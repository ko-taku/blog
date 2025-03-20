import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';  // Chart.js와 React 통합
import { ChartOptions, ChartTypeRegistry } from 'chart.js'; // Chart.js의 Options 타입 임포트
import './Explorer.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import moment from 'moment-timezone';

const web3 = new Web3('https://public-en.node.kaia.io');

const apiKey = process.env.REACT_APP_KAIROS_API_KEY;

// Chart.js의 필요한 요소들 등록
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

// Kaia API 블록 데이터의 타입을 정의합니다.
interface KaiaBlockData {
    number: string;
    hash: string;
    transactions: any[];  // 트랜잭션 배열
    size: string;
    stateRoot: string;
}

interface KaiaRewardData {
    reward: string;
    rewards: { [address: string]: string }; // 주소별 리워드 객체
    burntFee: string; // 소각된 수수료
    kef: string; // KEF 수수료
    kif: string; // KIF 수수료
    minted: string; // 발행된 토큰
    proposer: string; // 제안자 보상
    stakers: string; // 스테이커 보상
    totalFee: string; // 총 수수료}
}

interface ChartData {
    labels: number[];  // 블록 번호
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        lineTension: number;  // 선의 곡선 정도 설정
    }[];
}

const Explorer: React.FC = () => {

    const [searchBlock, setSearchBlock] = useState<string>('');
    const [blockData, setBlockData] = useState<any>(null);
    const [apiBlockData, setApiBlockData] = useState<KaiaBlockData | null>(null);  // Kaia API 블록 데이터 상태
    const [rewardData, setRewardData] = useState<KaiaRewardData | null>(null);  // Kaia API 리워드 데이터 상태
    const [transactionDetails, setTransactionDetails] = useState<any>(null);
    const [showTransactionDetails, setShowTransactionDetails] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [transactionsPerPage] = useState<number>(10);
    const [blockArray, setBlockArray] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<string>('blockData');  // 'blockData' 또는 'rewardData' 탭을 추적하는 상태
    const [isSearchComplete, setIsSearchComplete] = useState(false); // 검색 완료 여부
    const [smartContractCount, setSmartContractCount] = useState<number | null>(null);
    const [activeTransactionHash, setActiveTransactionHash] = useState<string | null>(null);
    const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false); // 상세 정보 표시 여부 상태 추가
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [],
    });

    // 차트 옵션 (x축 반전 설정)
    const options: ChartOptions<'line'> = {
        scales: {
            x: {
                reverse: true,  // x축 반전
                grid: {
                    display: false,  // x축 격자 숨기기
                },
                ticks: {
                    padding: 15,  // x축 값과 차트 영역 간의 간격을 늘림 (기본 값보다 더 아래로 위치)
                },
            },
            y: {
                grid: {
                    display: false,  // y축 격자 숨기기
                },
                ticks: {
                    padding: 20,
                },

            },
        },
        plugins: {
            legend: {
                display: false,  // 범례 표시 안 함
            },
        },
    };

    // 트랜잭션 배열에서 스마트 컨트랙트 트랜잭션의 수를 구하는 함수
    async function getSmartContractCount(transactions: any[]): Promise<number> {
        const smartContractCount = await Promise.all(
            transactions.map(async (tx) => {
                // 스마트 컨트랙트 배포 (to가 null인 경우)
                if (tx.to === null) {
                    return true;
                }

                // 스마트 컨트랙트 주소인지 확인하는 함수
                const isContract = await isContractAddress(tx.to);
                return isContract;
            })
        );

        // 스마트 컨트랙트인 트랜잭션 수를 카운트해서 반환
        return smartContractCount.filter(Boolean).length;
    }

    // 주소가 스마트 컨트랙트인지 확인하는 함수
    async function isContractAddress(address: string): Promise<boolean> {
        try {
            const code = await web3.eth.getCode(address);
            return code !== '0x'; // 스마트 컨트랙트는 코드가 있을 것임 (0x는 코드 없음)
        } catch (error) {
            console.error('스마트 컨트랙트 주소 확인 중 오류 발생:', error);
            return false;
        }
    }

    // 블록 생성 시간을 "X초 전", "X분 전" 등으로 표시하는 함수
    function timeAgo(timestamp: BigInt): string {
        const now = Date.now() / 1000; // 현재 시간 (초 단위)
        const diff = now - Number(timestamp); // 시간 차이 (초 단위)

        if (diff < 60) {
            return `${Math.floor(diff)}초 전`;
        } else if (diff < 3600) {
            return `${Math.floor(diff / 60)}분 전`;
        } else if (diff < 86400) {
            return `${Math.floor(diff / 3600)}시간 전`;
        } else if (diff < 2592000) {
            return `${Math.floor(diff / 86400)}일 전`;
        } else if (diff < 31536000) {
            return `${Math.floor(diff / 2592000)}개월 전`;
        } else {
            return `${Math.floor(diff / 31536000)}년 전`;
        }
    }

    function formatTimestamp(timestamp: BigInt): string {
        // UNIX 타임스탬프를 moment.js로 포맷
        return moment.unix(Number(timestamp)).tz('Asia/Seoul')  // 한국 표준시로 설정
            .format('MMM-DD-YYYY hh:mm:ss A [GMT+9]')
    }



    // TPS 계산 함수
    // function calculateTPS(block: any, previousBlock: any): number {
    //     // 트랜잭션 수
    //     const transactionsCount = block.transactions.length;

    //     // 블록 생성 시간 간격 계산 (초 단위)
    //     const timeDifference = block.timestamp - previousBlock.timestamp;

    //     // TPS 계산: 트랜잭션 수 / 시간 차이 (초 단위)
    //     const tps = transactionsCount / timeDifference;

    //     return tps;
    // }

    // 탭 변경 함수
    const handleTabChange = (tab: 'blockData' | 'rewardData' | 'transactionData') => {
        setActiveTab(tab);
    };

    // wei를 ether로 변환하는 함수
    function convertWeiToEther(weiValue: number) {
        return web3.utils.fromWei(weiValue.toString(), 'ether');
    }

    // 최신 블록을 가져오는 함수
    async function getLatestBlocks(numBlocks: number) {
        try {
            // 최신 블록 번호를 가져옵니다.
            const latestBlockNumber = await web3.eth.getBlockNumber();

            // numBlocks 만큼의 최신 블록 데이터를 가져옵니다.
            const blockArrayData = [];
            for (let i = 0; i < numBlocks; i++) {
                const block = await web3.eth.getBlock(latestBlockNumber - BigInt(i));

                // block 객체에 timeAgo 속성을 추가
                const blockWithTimeAgo = {
                    ...block, // 기존 블록 데이터 복사
                    timeAgo: timeAgo(block.timestamp), // timeAgo 계산해서 추가
                };

                //console.log(`Block ${blockWithTimeAgo.number} created: ${blockWithTimeAgo.timeAgo}`);


                blockArrayData.push(blockWithTimeAgo);
            }

            setBlockArray(blockArrayData); // 상태 업데이트

        } catch (error) {
            console.error('블록을 가져오는 중 오류 발생:', error);
        }
    }

    // 차트 데이터 업데이트 함수
    const getChartData = () => {

        if (!blockArray || blockArray.length === 0) {
            console.error('블록 데이터가 없습니다.');
            return;
        }

        const blockNumbers = Array.isArray(blockArray) ? blockArray.map(block => block.number) : [];
        const transactionCounts = Array.isArray(blockArray) ? blockArray.map(block => block.transactions.length) : [];
        console.log(blockArray);
        console.log('블록넘버', blockNumbers);
        console.log('트랜잭션카운트', transactionCounts);

        setChartData({
            labels: blockNumbers,  // 블록 번호
            datasets: [
                {
                    label: '트랜잭션 수',
                    data: transactionCounts,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    lineTension: 0.4,  // 선을 곡선으로 만들기 위한 설정
                },
            ],
        });

        console.log('들어갔니?', setChartData);
    };

    useEffect(() => {
        // 10초마다 getLatestBlocks를 호출하는 interval 설정
        const intervalId = setInterval(() => {
            getLatestBlocks(10); // 최신 5개 블록을 가져옵니다.
        }, 10000); // 5000ms = 5초

        // 컴포넌트가 마운트 된 후 바로 한 번 호출
        getLatestBlocks(10);

        // 컴포넌트 언마운트 시 interval을 정리
        return () => clearInterval(intervalId);
    }, []); // 빈 배열: 컴포넌트가 마운트된 이후에만 실행, 계속해서 10초마다 갱신


    useEffect(() => {

        // 컴포넌트 마운트 후 차트 데이터 업데이트
        if (blockArray.length > 0) {
            getChartData();
        }
    }, [blockArray]);  // blockArray가 업데이트될 때마다 차트 데이터 갱신

    // chartData가 변경될 때마다 출력
    useEffect(() => {
        console.log('차트 데이터 업데이트 후:', chartData);
    }, [chartData]);  // chartData가 업데이트될 때마다 실행

    useEffect(() => {
        const calculateSmartContractCount = async () => {
            if (blockData && blockData.transactions) {
                const count = await getSmartContractCount(blockData.transactions);
                setSmartContractCount(count);
            }
        };

        calculateSmartContractCount();
    }, [blockData]);

    // block.transactions가 전달되는 경우, 트랜잭션 수를 구하는 함수
    function getTransactionCount(transactions: string[]): number {
        if (Array.isArray(transactions)) {
            // transactions 배열의 길이를 반환
            return transactions.length;
        } else {
            console.error('전달된 데이터가 배열이 아닙니다.');
            return 0; // 배열이 아닌 경우 0을 반환
        }
    }

    //리서치기능
    const researchFunction = async () => {

        const blockNumber = Number(searchBlock);

        if (!isNaN(blockNumber)) {
            try {

                const block = await web3.eth.getBlock(blockNumber, true);
                web3.eth.getBlockTransactionCount(blockNumber);
                setBlockData(block);
                setIsSearchComplete(true);

                // Kaia API로 블록 데이터 가져오기
                try {
                    const response = await axios.post(
                        'https://public-en.node.kaia.io',
                        {
                            jsonrpc: '2.0',
                            method: 'kaia_getBlockByNumber',
                            params: [blockNumber, true],  // true로 설정하여 트랜잭션 포함
                            id: 1
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${apiKey}`  // API 키를 헤더에 포함
                            }
                        }
                    );
                    setApiBlockData(response.data.result);  // Kaia API 응답 저장
                    setIsSearchComplete(true);
                } catch (apiError) {
                    console.error('Kaia API 호출 오류:', apiError);
                    setApiBlockData(null);  // 오류 발생 시 Kaia 데이터 초기화
                }

                // Kaia API로 리워드 데이터 가져오기
                try {
                    const rewardResponse = await axios.post(
                        'https://public-en.node.kaia.io',
                        {
                            jsonrpc: '2.0',
                            method: 'kaia_getRewards',
                            params: [blockNumber],
                            id: 1
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${apiKey}`  // API 키를 헤더에 포함
                            }
                        }
                    );
                    console.log(rewardResponse.data.result);

                    setRewardData(rewardResponse.data.result);  // 리워드 데이터 응답 저장
                    setIsSearchComplete(true);
                } catch (rewardError) {
                    console.error('리워드 데이터 호출 오류:', rewardError);
                    setRewardData(null);  // 오류 발생 시 리워드 데이터 초기화
                }



            } catch (error) {
                console.error('블록을 가져오는 중 오류 발생:', error);
                setBlockData(null);
            }
        } else {
            console.log('숫자입력필요');
        }

    };

    // 트랜잭션의 상세 정보를 가져오는 함수
    const getTransactionDetails = async (txHash: string) => {
        if (!blockData) {
            console.error('블록 데이터가 없습니다.');
            return;
        }

        try {
            const tx = await web3.eth.getTransaction(txHash);
            setTransactionDetails(tx);
            setActiveTransactionHash(txHash); // 현재 트랜잭션 해시를 저장하여 해당 트랜잭션의 상세 정보만 표시
            setIsDetailsVisible(!isDetailsVisible); // 상세 정보 표시/숨기기 상태 반전
        } catch (error) {
            console.error('트랜잭션 정보 가져오는 중 오류 발생:', error);
        }
    };

    // 트랜잭션 상세 정보를 닫는 함수
    const closeTransactionDetails = () => {
        setTransactionDetails(null);
        setActiveTransactionHash(null); // 상세 정보 숨기기
        setIsDetailsVisible(false); // 상태 반전 (닫기)
    };


    // 페이지에 해당하는 트랜잭션만 필터링
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = blockData ? blockData.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction) : [];

    // 트랜잭션을 최신순으로 정렬하는 함수
    const sortTransactionsByTimestamp = (transactions: any[]) => {
        return transactions.sort((a, b) => b.timestamp - a.timestamp); // 내림차순 정렬 (최신 트랜잭션이 먼저)
    };


    // 페이지 변경 함수
    // 페이지네이션
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // 페이지네이션 버튼에서 페이지 번호를 배열로 생성 (1, 2, 3, ...)
    const totalPages = blockData && blockData.transactions
        ? Math.ceil(blockData.transactions.length / transactionsPerPage)
        : 0;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const renderBlockData = (block: any) => {
        return (
            <li key={block.number}>
                <p><strong>블록 번호:</strong> {block.number}</p>
                <p><strong>블록 해시:</strong> {block.hash}</p>
                <p><strong>블록 타임스탬프:</strong> {new Date(block.timestamp * 1000).toLocaleString()}</p>
                <p><strong>트랜잭션 수:</strong> {block.transactions.length}</p>
            </li>
        );
    };


    return (
        <div className='explorerBox'>
            <h1>Block Explorer</h1>
            <div className="inputText">
                <input onChange={(e) => setSearchBlock(e.target.value)}
                    placeholder='검색입력'></input>
                <div className='searchButton' onClick={researchFunction}><SearchRoundedIcon /></div>
            </div>

            {/* 검색 완료 후에만 탭 메뉴와 탭 콘텐츠 표시 */}
            {isSearchComplete && (
                <>
                    {/* 탭 메뉴 */}
                    <div className="tab-menu">
                        <button
                            onClick={() => handleTabChange('blockData')}
                            className={activeTab === 'blockData' ? 'active' : ''}
                        >
                            Block
                        </button>
                        <button
                            onClick={() => handleTabChange('rewardData')}
                            className={activeTab === 'rewardData' ? 'active' : ''}
                        >
                            Rewards
                        </button>
                        <button
                            onClick={() => handleTabChange('transactionData')}
                            className={activeTab === 'transactionData' ? 'active' : ''}
                        >
                            Block Transaction
                        </button>
                    </div>

                    {/* 선택된 탭에 따라 표시되는 내용 */}
                    <div className="tab-content">
                        {activeTab === 'blockData' && (
                            <div>
                                <h2>Block Data</h2>
                                <div className="block-data">
                                    {blockData ? (
                                        <div>
                                            <table className="blockTable">

                                                <tr>
                                                    <td>타임스탬프</td>
                                                    <td>{formatTimestamp(blockData.timestamp)}, {timeAgo(blockData.timestamp)}</td>
                                                </tr>
                                                <tr>
                                                    <td>블록 번호</td>
                                                    <td>{blockData.number}</td>
                                                </tr>
                                                <tr>
                                                    <td>블록 해시</td>
                                                    <td>{blockData.hash}</td>
                                                </tr>
                                                <tr>
                                                    <td>블록 부모해시</td>
                                                    <td>{blockData.parentHash}</td>
                                                </tr>
                                                <tr>
                                                    <td>사이즈</td>
                                                    <td>{blockData.size} bytes</td>
                                                </tr>
                                                <tr>
                                                    <td>트랜잭션</td>
                                                    <td>{getTransactionCount(blockData.transactions)} txs</td>
                                                </tr>
                                                <tr>
                                                    <td>스마트 컨트랙트</td>
                                                    <td>{smartContractCount !== null ? smartContractCount : '계산 중...'} contract</td>
                                                </tr>
                                                <tr>
                                                    <td>블록 기본가스비</td>
                                                    <td>{convertWeiToEther(blockData.baseFeePerGas)} KAIA</td>
                                                </tr>
                                                <tr>
                                                    <td>가스리밋</td>
                                                    <td>{convertWeiToEther(blockData.gasLimit)} KAIA</td>
                                                </tr>
                                                <tr>
                                                    <td>가스사용</td>
                                                    <td>{convertWeiToEther(blockData.gasUsed)} KAIA</td>
                                                </tr>
                                                <tr>
                                                    <td>블록 논스</td>
                                                    <td>{blockData.nonce}</td>
                                                </tr>
                                                <tr>
                                                    <td>마이너</td>
                                                    <td>{blockData.miner}</td>
                                                </tr>
                                                <tr>
                                                    <td>트랜섹션루트</td>
                                                    <td>{blockData.transactionsRoot}</td>
                                                </tr>
                                                <tr>
                                                    <td>스테이트루트</td>
                                                    <td>{blockData.stateRoot}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    ) : (
                                        <p>블록 정보를 로딩 중입니다...</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === 'rewardData' && (
                            <div>
                                <h2>Reward Data</h2>
                                <div className="reward-data">
                                    {rewardData ? (
                                        <table className="rewardTable">
                                            <tr>
                                                <td>블록 보상</td>
                                                <td>{convertWeiToEther(Number(rewardData.proposer) * 10)} KAIA</td>
                                            </tr>
                                            <tr>
                                                <td>소각된 수수료</td>
                                                <td>{convertWeiToEther(Number(rewardData.burntFee))} KAIA</td>
                                            </tr>
                                            <tr>
                                                <td>스테이커 보상</td>
                                                <td>{convertWeiToEther(Number(rewardData.stakers) * 10)} KAIA</td>
                                            </tr>
                                        </table>
                                    ) : (
                                        <p>리워드 정보를 로딩 중입니다...</p>
                                    )}
                                </div>
                            </div>
                        )}
                        {activeTab === 'transactionData' && (
                            <div>
                                <h2>Block Transaction Data</h2>
                                <div className="transaction-data">
                                    {rewardData ? (
                                        <div>
                                            <div>
                                                {currentTransactions.map((tx: any, index: number) => {
                                                    return (
                                                        <div className="transaction-item" key={index}>
                                                            <div className="transaction-header"><span className="transaction-hash">TX hash</span> <span>{tx.hash}</span>
                                                                <button onClick={() => getTransactionDetails(tx.hash)} className="toggle-details-button">
                                                                    {isDetailsVisible && activeTransactionHash === tx.hash ? '정보 닫기' : '정보 열기'}</button>
                                                            </div>
                                                            {isDetailsVisible && activeTransactionHash === tx.hash && transactionDetails && (
                                                                <div className="transaction-details">
                                                                    <h3 className="detailH3">details</h3>
                                                                    <table className="transaction-table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><strong>hash</strong></td>
                                                                                <td>{transactionDetails.hash}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><strong>From</strong></td>
                                                                                <td>{transactionDetails.from}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><strong>To</strong></td>
                                                                                <td>{transactionDetails.to}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><strong>GasFee</strong></td>
                                                                                <td>{convertWeiToEther(transactionDetails.gasPrice)} KAIA</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><strong>GasLimit</strong></td>
                                                                                <td>{transactionDetails.gas}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><strong>value</strong></td>
                                                                                <td>{web3.utils.fromWei(transactionDetails.value, 'ether')} KAIA</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            )}
                                                        </div>

                                                    );
                                                })} </div>
                                            {/* 페이지네이션 */}
                                            <div className="pagination">
                                                {/* 이전 페이지 버튼 */}
                                                <button
                                                    onClick={() => paginate(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                    className="page-button"
                                                >
                                                    {'<'}
                                                </button>

                                                {/* 페이지 번호들 */}
                                                {pageNumbers.map((number) => (
                                                    <button
                                                        key={number}
                                                        onClick={() => paginate(number)}
                                                        className={`page-button ${currentPage === number ? 'active' : ''}`}
                                                    >
                                                        {number}
                                                    </button>
                                                ))}

                                                {/* 다음 페이지 버튼 */}
                                                <button
                                                    onClick={() => paginate(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                    className="page-button"
                                                >
                                                    {'>'}
                                                </button>
                                            </div>
                                        </div>

                                    ) : (
                                        <p>트랜잭션 정보를 로딩 중입니다...</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            <div>
                {/* 차트 렌더링 */}
                {blockArray.length > 0 && (
                    <div>
                        <h2 className="blockChartTitle">Block Transaction chart</h2>
                        <Line data={chartData} options={options} />
                    </div>
                )}
                <div>
                    <h2 className="blockTableTitle">Latest Blocks</h2>
                    <table className="block-table">
                        <thead>
                            <tr>
                                <th>Block Number</th>
                                <th>Block Hash</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockArray.map((block, index) => (
                                <tr key={index}>
                                    <td>{block.number}</td>
                                    <td>{block.hash}</td>
                                    <td>{block.timeAgo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>


            {/* 전체 블록 리워드 정보 추가 */}
            {/* <h4>블록 전체 리워드</h4>
                    <p><strong>소각된 수수료 (burntFee):</strong> {rewardData.burntFee} wei</p>
                    <p><strong>KEF 수수료 (kef):</strong> {rewardData.kef} wei</p>
                    <p><strong>KIF 수수료 (kif):</strong> {rewardData.kif} wei</p>
                    <p><strong>발행된 토큰 (minted):</strong> {rewardData.minted} wei</p>
                    <p><strong>제안자 보상 (proposer):</strong> {rewardData.proposer} wei</p>
                    <p><strong>스테이커 보상 (stakers):</strong> {rewardData.stakers} wei</p>
                    <p><strong>총 수수료 (totalFee):</strong> {rewardData.totalFee} wei</p> */}



        </div>
    );
};

export default Explorer;
