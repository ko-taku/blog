import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import axios from 'axios';

const web3 = new Web3('https://public-en.node.kaia.io');

const apiKey = process.env.REACT_APP_KAIROS_API_KEY;

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

const Explorer: React.FC = () => {

    const [searchBlock, setSearchBlock] = useState<string>('');
    const [blockData, setBlockData] = useState<any>(null);
    const [apiBlockData, setApiBlockData] = useState<KaiaBlockData | null>(null);  // Kaia API 블록 데이터 상태
    const [rewardData, setRewardData] = useState<KaiaRewardData | null>(null);  // Kaia API 리워드 데이터 상태
    const [transactionDetails, setTransactionDetails] = useState<any>(null);
    const [showTransactionDetails, setShowTransactionDetails] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [transactionsPerPage] = useState<number>(10);
    const [blocks, setBlocks] = useState<any>(null);


    async function getLatestBlocks(numBlocks: number) {
        try {


            // 'latest'로 최신 블록을 가져옵니다.
            const latestBlock = await web3.eth.getBlock('latest', true);

            console.log('최신블록 ', latestBlock);


            setBlocks(latestBlock); // 상태 업데이트
            console.log(blocks);
        } catch (error) {
            console.error('블록을 가져오는 중 오류 발생:', error);
        }
    }

    useEffect(() => {
        console.log('블록 데이터 변경됨:', blocks);
    }, [blocks]);

    const researchFunction = async () => {

        const blockNumber = Number(searchBlock);




        if (!isNaN(blockNumber)) {
            try {

                const block = await web3.eth.getBlock(blockNumber, true);
                web3.eth.getBlockTransactionCount(blockNumber);
                setBlockData(block);

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
        try {
            const tx = await web3.eth.getTransaction(txHash);
            setTransactionDetails(tx);
            setShowTransactionDetails(true); // 상세 정보를 보이도록 설정
        } catch (error) {
            console.error('트랜잭션 정보 가져오는 중 오류 발생:', error);
        }
    };

    // 트랜잭션 상세 정보를 닫는 함수
    const closeTransactionDetails = () => {
        setTransactionDetails(null);
        setShowTransactionDetails(false); // 상세 정보를 숨김
    };


    // 페이지에 해당하는 트랜잭션만 필터링
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;

    // 트랜잭션을 최신순으로 정렬하는 함수
    const sortTransactionsByTimestamp = (transactions: any[]) => {
        return transactions.sort((a, b) => b.timestamp - a.timestamp); // 내림차순 정렬 (최신 트랜잭션이 먼저)
    };

    // 최신순으로 정렬한 후 페이지에 해당하는 트랜잭션만 필터링
    const currentTransactions = blockData ?
        sortTransactionsByTimestamp(blockData.transactions).slice(indexOfFirstTransaction, indexOfLastTransaction)
        : [];

    // 페이지 변경 함수
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        <div>
            <input onChange={(e) => setSearchBlock(e.target.value)}
                placeholder='검색입력'></input><button onClick={researchFunction}>확인</button>
            <div>
                <h3>최신 10개 블록</h3>
                {blockData ? (
                    <div>
                        <h3>최신 블록</h3>
                        <p><strong>블록 번호:</strong> {blockData.number}</p>
                        <p><strong>블록 해시:</strong> {blockData.hash}</p>
                        <p><strong>블록 타임스탬프:</strong> {new Date(blockData.timestamp * 1000).toLocaleString()}</p>
                        <p><strong>트랜잭션 수:</strong> {blockData.transactions.length}</p>
                        <p><strong>블록 데이터:</strong> {JSON.stringify(blockData)}</p>
                    </div>
                ) : (
                    <p>최신 블록을 불러오는 중입니다...</p>
                )}
            </div>
            {blockData && blockData.transactions && (
                <div>
                    <p>블록 번호: {blockData.number}</p>
                    <p>블록 해시: {blockData.hash}</p>
                    <p>블록 부모해시: {blockData.parentHash}</p>
                    <p>블록 기본가스비: {blockData.baseFeePerGas}</p>
                    <p>블록 논스: {blockData.nonce}</p>
                    <p>sha3엉클: {blockData.sha3Uncles}</p>
                    <p>로그블룸: {blockData.logsBloom}</p>
                    <p>트랜섹션루트: {blockData.transactionsRoot}</p>
                    <p>스테이트루트: {blockData.stateRoot}</p>
                    <p>마이너: {blockData.miner}</p>
                    <p>디피컬티: {blockData.difficulty}</p>
                    <p>토탈디피컬티: {blockData.totalDifficulty}</p>
                    <p>추가데이터: {blockData.extraData}</p>
                    <p>사이즈: {blockData.size}</p>
                    <p>가스리밋: {blockData.gasLimit}</p>
                    <p>가스사용: {blockData.gasUsed}</p>
                    <p>타임스탬프: {blockData.timestamp}</p>
                    <p>트잭: {JSON.stringify(blockData.transactions, (key, value) =>
                        typeof value === 'bigint' ? value.toString() : value
                    )}</p>
                    {/* 트랜잭션 목록 */}
                    <h3>트랜잭션 목록</h3>
                    {currentTransactions.map((tx: any, index: number) => {

                        return (
                            <div key={index}>
                                <p>트랜잭션 해시: {tx.hash}</p>
                                <button onClick={() => getTransactionDetails(tx.hash)}>상세 정보 보기</button>
                                {showTransactionDetails && transactionDetails && (
                                    <div>
                                        <h3>트랜잭션 상세 정보</h3>
                                        <p><strong>해시:</strong> {transactionDetails.hash}</p>
                                        <p><strong>보내는 주소 (From):</strong> {transactionDetails.from}</p>
                                        <p><strong>받는 주소 (To):</strong> {transactionDetails.to}</p>
                                        <p><strong>가스비 (Gas):</strong> {transactionDetails.gas}</p>
                                        <p><strong>값 (Value):</strong> {web3.utils.fromWei(transactionDetails.value, 'ether')} ETH</p>
                                        <p><strong>데이터 (Input Data):</strong> {transactionDetails.input}</p>
                                        <button onClick={closeTransactionDetails}>닫기</button>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* 페이지네이션 */}
                    <div>
                        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                            이전
                        </button>
                        <span> Page {currentPage} </span>
                        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastTransaction >= blockData.transactions.length}>
                            다음
                        </button>
                    </div>
                </div>
            )}
            {apiBlockData && (
                <div>
                    <h3>Kaia API 블록 데이터</h3>
                    <p><strong>블록 번호:</strong> {apiBlockData.number}</p>
                    <p><strong>블록 해시:</strong> {apiBlockData.hash}</p>
                    <p><strong>트랜잭션 수:</strong> {apiBlockData.transactions.length}</p>
                    <p><strong>블록 크기:</strong> {apiBlockData.size}</p>
                    <p><strong>블록 상태 루트 (State Root):</strong> {apiBlockData.stateRoot}</p>
                </div>
            )}
            {rewardData && (
                <div>
                    <h3>리워드 데이터</h3>
                    <p><strong>보상:</strong> {rewardData.reward} ETH</p>

                    {/* 전체 블록 리워드 정보 추가 */}
                    <h4>블록 전체 리워드</h4>
                    <p><strong>소각된 수수료 (burntFee):</strong> {rewardData.burntFee} wei</p>
                    <p><strong>KEF 수수료 (kef):</strong> {rewardData.kef} wei</p>
                    <p><strong>KIF 수수료 (kif):</strong> {rewardData.kif} wei</p>
                    <p><strong>발행된 토큰 (minted):</strong> {rewardData.minted} wei</p>
                    <p><strong>제안자 보상 (proposer):</strong> {rewardData.proposer} wei</p>
                    <p><strong>스테이커 보상 (stakers):</strong> {rewardData.stakers} wei</p>
                    <p><strong>총 수수료 (totalFee):</strong> {rewardData.totalFee} wei</p>

                    {/* 주소별 리워드 */}
                    <h4>주소별 리워드</h4>
                    {rewardData.rewards && Object.entries(rewardData.rewards).map(([address, reward], index) => (
                        <div key={index}>
                            <p>주소: {address}</p>
                            <p>보상: {reward} wei</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Explorer;
