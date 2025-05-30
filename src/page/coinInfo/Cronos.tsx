import React from "react";

const CronosBlockchainPresentation = () => {
    return (
        <div>
            <h1>Cronos</h1>
            <section>
                <h2>크립토닷컴</h2>
                <p>
                    글로벌 암호화폐 거래소 중에서 상당한 거래량과 사용자 수를 보유고 있으며 이 거래소에서 발행한 알트 코인이 Cronos이다
                </p>
            </section>

            {/* 1. 개요 */}
            <section>
                <h2>개요</h2>
                <p>
                    Cronos는 <strong>Cosmos SDK</strong>와 <strong>Ethermint</strong>를 기반으로 구축된
                    <strong>탈중앙화 블록체인</strong>으로, <strong>EVM 호환성</strong>과 <strong>높은 확장성</strong>을
                    제공합니다. 또한 <strong>PoA(Proof of Authority)</strong> 합의 알고리즘을 통해 <strong>보안</strong>과
                    <strong>확장성</strong>을 확보하며, 다양한 블록체인 간의 <strong>상호 운용성</strong>을 가능하게 합니다.
                </p>
            </section>

            {/* 2. 주요 특징 */}
            <section>
                <h2>주요 특징</h2>
                <ul>
                    <li><strong>EVM 호환성:</strong> Cronos는 Ethermint를 기반으로 하여, Ethereum 및 EVM 호환 체인에서의 애플리케이션과 스마트 계약을 빠르게 이식할 수 있습니다.</li>
                    <li><strong>확장성:</strong> PoA를 채택하여 빠르고 저렴한 거래와 스마트 계약 실행을 제공합니다. 이는 기존의 PoW(작업 증명) 체인보다 더 빠르고 탄소 중립적인 거래 환경을 구현합니다.</li>
                    <li><strong>상호 운용성:</strong> IBC (Inter Blockchain Communications) 프로토콜을 사용하여, Cosmos Hub, Osmosis 등 다른 IBC 지원 체인과의 상호 운용성과 브리징을 가능하게 합니다.</li>
                    <li><strong>권한 증명(POA):</strong> 경험이 풍부한 검증자들에 의해 보안을 유지하며, POA를 보다 간소화되고 확장 가능한 합의 메커니즘으로 활용합니다.</li>
                    <li><strong>오픈 소스:</strong> Cronos는 커뮤니티의 제안과 기여를 적극적으로 수용하며, 네트워크의 발전을 함께 이끌어 나가고 있습니다.</li>
                </ul>
            </section>


            {/* 4. 권한 증명(PoA) 합의 */}
            <section>
                <h2>합의 알고리즘(PoA)</h2>
                <p>
                    Cronos는 Ethermint를 기반으로 하며, 이는 확장 가능하고 처리량이 높은 지분 증명(PoS) 블록체인으로,
                    Cosmos SDK와 EVM과 호환됩니다. Ethermint는 Tendermint의 PoS 합의 엔진을 사용하면서 동시에 Ethereum의 기능을 갖추고 있습니다.
                </p>
                <p>
                    Cronos는 Tendermint PoS의 수정된 버전을 사용하여 PoA(Proof of Authority) 방식의 합의 메커니즘을 채택합니다.
                    이 방식에서 검증자는 다음 기준에 따라 선정됩니다:
                </p>
                <ul>
                    <li>Cronos 생태계에 대한 헌신</li>
                    <li>업그레이드를 완벽하게 구현하는 기술적 능력</li>
                    <li>고가용성 노드 운영 실적</li>
                    <li>경제적 실행 가능성</li>
                </ul>
                <p>
                    PoA 합의에서는 새로운 검증자 노드를 받아들이기 위해 기존 검증자가 스테이킹 토큰을 기부하거나 위임하는
                    동의가 필요합니다. 따라서, Cronos 합의는 PoA 방식으로, 검증자의 선택과 투표권 할당이 스테이킹 토큰
                    양에 기반합니다.
                </p>
                <p>
                    Cronos 합의에서의 스테이킹 토큰은 CRO 토큰이 아니라, 전용 스테이킹 토큰입니다. 이 토큰은 거버넌스
                    목적으로만 사용되며, 시장 가치가 없고 상장되지 않았습니다. 반면, CRO 토큰은 사용자가 거래 수수료를
                    지불하는 데 사용됩니다.
                </p>
            </section>

            {/* 6. 성능과 확장성 */}
            <section>
                <h2>성능과 확장성</h2>
                <ul>
                    <li>
                        <strong>빠른 거래 처리:</strong> PoA 합의 메커니즘을 채택하여 빠르고 효율적인 트랜잭션 처리가 가능합니다.
                        이는 DeFi, NFT, Web3 애플리케이션에 적합한 환경을 제공합니다. 거래 처리 속도는 초당 2000 TPS 이상으로
                        이더리움의 약 30 TPS에 비해 100배 이상 빠릅니다.
                    </li>
                    <li>
                        <strong>높은 확장성:</strong> 텐더민트 합의 엔진을 사용하여, 1초 내 거래가 완료될 수 있으며, 높은
                        처리량을 제공합니다. 또한, IBC 프로토콜을 통해 다른 블록체인과 확장성을 확보하고 있습니다.
                    </li>
                </ul>
            </section>
            {/* 3. 보안 */}
            <section>
                <h2>보안</h2>
                <ul>
                    <li>
                        <strong>텐더민트 합의 엔진:</strong> Tendermint 합의 엔진을 사용하여 비잔틴 장애 허용(BFT) 기능을 구현하고 있습니다. 이를 통해, 최대 1/3의 노드가 실패하거나 악의적인 행동을 하더라도 네트워크가 안정적으로 운영됩니다.
                    </li>
                    <li>
                        <strong>검증자와 보안:</strong> 검증자들은 CRO 토큰을 스테이킹하여 블록을 생성하고 거래를 검증합니다. BFT 프로토콜 덕분에 1/3의 노드가 잘못된 행동을 하더라도 네트워크가 정상적으로 작동할 수 있습니다.
                    </li>
                    <li>
                        <strong>네트워크 보호:</strong> CRO와 Cronos 스테이킹 토큰을 통해 검증자가 보상과 벌금을 받으며, 이는 네트워크의 보안과 무결성을 보장합니다.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default CronosBlockchainPresentation;
