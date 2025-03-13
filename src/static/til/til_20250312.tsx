import React from 'react';

// 온체인 데이터 항목 타입 정의
interface OnChainData {
    title: string;
    description: string;
    details: string[];
}

const onChainData: OnChainData = {
    title: '온체인 데이터',
    description: '온체인 데이터란 블록체인 네트워크에 기록된 모든 데이터를 의미한다.',
    details: [
        '이는 탈중앙화된 네트워크에서 검증된 데이터로 누구나 접근할 수 있으며 변경이 불가능하다.',
        '온체인 데이터는 스마트 컨트랙트 실행, 트랜잭션 정보, 계정 상태 등 블록체인 상에서 발생하는 모든 활동을 포함한다.'
    ]
};

// 온체인 데이터 주요 구성 요소 항목 타입 정의
interface OnChainDataComponents {
    title: string;
    description: string;
}

const onChainComponents: OnChainDataComponents[] = [
    {
        title: '트랜잭션 데이터',
        description: '트랜잭션 ID, 보낸 주소, 받는 주소, 전송된 금액, 가스 사용량 등이 포함된다.'
    },
    {
        title: '블록 데이터',
        description: '블록 해시, 블록 번호, 블록 생성 시간, 채굴자 주소, 트랜잭션 목록 등이 포함된다.'
    },
    {
        title: '상태 데이터',
        description: '계정 잔액, 스마트 컨트랙트 저장소, 토큰 보유량 등이 포함된다.'
    }
];

// 트랜잭션 데이터 항목
const transactionData = [
    '트랜잭션 ID (Transaction Hash): 트랜잭션을 식별하는 고유한 해시 값',
    '보낸 주소(From Address): 트랜잭션을 보낸 계정 주소',
    '받는 주소(To Address): 트랜잭션을 받는 계정 주소 또는 스마트 컨트랙트 주소',
    '전송된 금액(Value): 트랜잭션에서 이동한 암호화폐 또는 토큰의 양',
    '가스 사용량(Gas Used): 트랜잭션을 처리하는데 사용된 가스 양'
];

// 블록 데이터 항목
const blockData = [
    '블록 해시(Block Hash): 특정 블록을 식별하는 고유한 해시 값',
    '블록 번호: 해당 블록의 높이(높은 숫자일수록 최신 블록)',
    '블록 생성 시간(Timestamp): 블록이 생성된 시간',
    '채굴자 주소(Miner Address): 블록을 생성한 채굴자의 주소',
    '트랜잭션 목록(Transactions): 블록에 포함된 모든 트랜잭션'
];

// 상태 데이터 항목
const stateData = [
    '계정 잔액(Account Balance): 특정 계정의 보유 암호화폐 양',
    '스마트 컨트랙트 저장소(Contract Storage): 스마트 컨트랙트가 저장하는 데이터',
    '토큰 보유량(Token Balance): ERC-20 같은 토큰을 보유한 계정의 잔액 정보'
];

// 온체인 데이터 활용 사례 타입 정의
interface UseCase {
    title: string;
    description: string;
}

const useCases: UseCase[] = [
    { title: '트랜잭션 모니터링', description: '블록체인 상의 트랜잭션을 모니터링 할 수 있다.' },
    { title: 'DeFi 분석', description: 'DeFi 애플리케이션에서 발생하는 데이터를 분석할 수 있다.' },
    { title: 'NFT 조회', description: 'NFT의 소유 및 거래 내역을 조회할 수 있다.' },
    { title: '스마트 컨트랙트 상태 확인', description: '스마트 컨트랙트의 상태와 실행 결과를 확인할 수 있다.' }
];

// RPC, JSON-RPC 내용
interface RPCContent {
    title: string;
    content: string[];
}

const rpcContent: RPCContent = {
    title: '노드와 클라이언트 간 통신 JSON-RPC',
    content: [
        'RPC는 별도의 원격 제어를 위한 코딩 없이 다른 주소 공간에서 리모트의 함수나 프로시저를 실행할 수 있게 해주는 프로세스 간 통신이다.',
        'RPC 모델은 분산컴퓨팅 환경에서 많이 사용되었으며 현재 MSA에서 마이크로 서비스 간에도 많이 사용되는 방식이다.',
        'JSON-RPC는 무상태성의 경량 RPC 프로토콜이며, 다양한 메시지 전달 환경에서 사용할 수 있도록 추상화되어 있다.',
        '이 프로토콜은 JSON(RFC 4627)의 데이터 형식으로 사용된다.',
        'JSON-RPC API를 통해 이더리움 노드와 직접 상호작용할 수 있으며, Web3.js와 같은 라이브러리를 사용해 직관적인 한 줄의 메서드로 JSON-RPC API를 사용할 수 있다.'
    ]
};

// 이더리움 화폐 단위 내용
const ethUnits = [
    { title: 'Wei', description: '이더리움의 가장 작은 단위. 10¹⁸ Wei = 1 ETH' },
    { title: 'Gwei', description: '이더리움 트랜잭션 수수료(Gas Fee) 계산에서 주로 사용된다. 10⁹ Gwei = 1 ETH' },
    { title: 'ETH', description: '이더리움 네트워크의 기본 화폐 단위. 트랜잭션 송금에도 사용된다.' }
];

// Ganache 관련 내용
const ganacheInfo = [
    '가나슈(Ganache)는 이더리움 노드를 실행하여 스마트 컨트랙트를 구동할 수 있는 가상 네트워크 환경을 제공한다.',
    '가나슈를 사용하면 로컬에서 테스트를 진행하고 트랜잭션을 바로 처리할 수 있어 개발 과정에서 매우 유용하다.',
    '가나슈는 10개의 가상 계정이 있고, 각각 100 이더의 잔액이 충전되어 있으며, 트랜잭션을 빠르게 처리할 수 있도록 설정되어 있다.',
    'Ganache에서 mining이 활성화되어 있어 바로 contract를 배포하거나 transaction을 실행할 수 있는 환경이 갖춰진다.',
    '테스트 네트워크(TestRPC)와 같은 환경에서 스마트 컨트랙트와 트랜잭션을 테스트한 후, 실제 메인넷으로 배포할 수 있다.'
];

// Infura 정보
const infuraInfo = [
    'Infura는 원격 이더리움 노드를 통해 이더리움 네트워크에 접근할 수 있게 해주는 서비스이다.',
    'Infura에서는 RPC URL과 API Key를 제공하기 때문에 직접 네트워크에 접근하여 블록을 동기화하지 않아도 네트워크에 접근할 수 있다.',
    'API Key를 발급받아 사용하며, Infura는 블록체인 애플리케이션에서 널리 사용되는 인프라 서비스이다.'
];

// Web3.js 정보
const web3Info = [
    'Web3.js는 이더리움 블록체인과 상호작용하는 클라이언트를 개발하는 데 사용된다.',
    'Web3.js는 다른 계정으로 이더를 전송하거나 스마트 컨트랙트에서 데이터를 읽고 쓰거나 스마트 컨트랙트를 만드는 등 다양한 액션을 수행할 수 있게 해주는 라이브러리의 집합이다.',
    '이더리움은 여러 노드로 구성된 P2P 네트워크이며, Web3.js는 네트워크에 있는 데이터를 읽거나 쓰기 위해 JSON RPC를 사용해 하나의 이더리움 노드에게 요청을 보낸다.',
    'Web3.js에는 다양한 모듈이 있다.',
    'web3-eth: 이더리움 블록체인과 스마트 컨트랙트 모듈.',
    'web3-shh: P2P 커뮤니케이션과 브로드캐스트를 위한 위스퍼 프로토콜 모듈.',
    'web3-bzz: 탈중앙화 파일 스토리지를 위한 스왑 프로토콜 모듈.',
    'web3-utils: dApp 개발자를 위한 유용한 헬퍼 함수들을 모아둔 모듈.'
];

// 컴포넌트 정의
const TIL20250313: React.FC = () => {
    return (
        <div>
            <h1>{onChainData.title}</h1>
            <p>{onChainData.description}</p>
            <ul>
                {onChainData.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>

            <h2>온체인 데이터의 주요 구성 요소</h2>
            <ul>
                {onChainComponents.map((component, index) => (
                    <li key={index}>
                        <strong>{component.title}:</strong> {component.description}
                    </li>
                ))}
            </ul>

            <h3>트랜잭션 데이터</h3>
            <ul>
                {transactionData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>블록 데이터</h3>
            <ul>
                {blockData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>상태 데이터</h3>
            <ul>
                {stateData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2>온체인 데이터 활용 사례</h2>
            <ul>
                {useCases.map((useCase, index) => (
                    <li key={index}>
                        <strong>{useCase.title}:</strong> {useCase.description}
                    </li>
                ))}
            </ul>

            <h2>{rpcContent.title}</h2>
            <ul>
                {rpcContent.content.map((content, index) => (
                    <li key={index}>{content}</li>
                ))}
            </ul>

            <h2>이더리움 화폐 단위</h2>
            <ul>
                {ethUnits.map((unit, index) => (
                    <li key={index}>
                        <strong>{unit.title}:</strong> {unit.description}
                    </li>
                ))}
            </ul>

            <h2>Ganache</h2>
            <ul>
                {ganacheInfo.map((info, index) => (
                    <li key={index}>{info}</li>
                ))}
            </ul>

            <h2>Infura</h2>
            <ul>
                {infuraInfo.map((info, index) => (
                    <li key={index}>{info}</li>
                ))}
            </ul>

            <h2>Web3.js</h2>
            <ul>
                {web3Info.map((info, index) => (
                    <li key={index}>{info}</li>
                ))}
            </ul>
        </div>
    );
};

export default TIL20250313;
