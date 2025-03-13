import React from 'react';

const TIL20250313: React.FC = () => {
    return (
        <div>
            <h1>3월 13일 TIL: DApp</h1>

            <section>
                <h2>DApp</h2>
                <ul>
                    <li>Decentralized Application의 약자로 탈중앙화 애플리케이션을 뜻한다.</li>
                    <li>블록체인 네트워크 위에서 작동하며 중앙 서버가 아닌 분산된 네트워크에서 데이터를 저장하고 처리한다.</li>
                    <li>이더리움, 큐텀, 이오스와 같은 스마트 컨트랙트를 지원하는 블록체인 플랫폼 위에서 작동한다.</li>
                    <li>블록체인 기술의 특징을 활용하여 중앙 서버가 필요없는 구조를 가지며 스마트 컨트랙트를 통해 특정 조건이 충족되면 자동으로 실행된다.</li>
                    <li>DApp의 암호화폐는 토큰이라고 부르며 블록체인 네트워크의 기본 암호화폐와 구분된다.</li>
                </ul>
            </section>

            <section>
                <h2>DApp의 특징</h2>
                <ul>
                    <li><strong>탈중앙화</strong>: DApp은 중앙 서버를 사용하지 않고 블록체인 네트워크에 데이터를 분산 저장하기 때문에 중앙 관리자의 개입 없이 데이터의 신뢰성과 안정성을 보장한다.</li>
                    <li><strong>위조 및 변조 불가</strong>: 블록체인의 특성상 데이터는 위조 및 변조가 불가능하고 갱신된 정보는 암호화되거나 참조값으로 저장되므로 보안성이 높고 무단 유출 위험이 적다.</li>
                    <li><strong>가동성</strong>: DApp은 분산된 네트워크를 기반으로 하기 때문에 일부 네트워크 장애가 발생하더라도 다른 노드를 통해 서비스를 계속 이용할 수 있다.</li>
                    <li><strong>토큰 이코노미</strong>: DApp은 자체 토큰을 발행하여 광고 대신 사용자에게 보상을 제공하는 독립적인 경제 생태계를 구축할 수 있다.</li>
                </ul>
            </section>

            <section>
                <h2>DApp과 전통적인 App의 차이점</h2>
                <table>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>DApp</th>
                            <th>전통적인 앱</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>가동성</td>
                            <td>일부 블록이 다운되어도 다른 블록들이 동일한 정보를 보유하므로 영향을 받지 않음</td>
                            <td>앱을 동작시키는 서버나 컴퓨터가 다운되면 정지</td>
                        </tr>
                        <tr>
                            <td>사용자 비용</td>
                            <td>기능 사용을 위해 보통 토큰 / 코인이 필요</td>
                            <td>앱 사용 자체는 일반적으로 무료</td>
                        </tr>
                        <tr>
                            <td>유저 친화성</td>
                            <td>지갑, 토큰, 거래 등 사용에 학습이 필요</td>
                            <td>일반적으로 직관적이며 튜토리얼 없이도 사용 가능</td>
                        </tr>
                        <tr>
                            <td>구동 방식</td>
                            <td>스마트 계약을 사용하여 명령을 수행하고 정보를 가져옴</td>
                            <td>서버와 앱에 포함된 프로그래밍에 따라 서버와 앱 사이에 정보 전송</td>
                        </tr>
                        <tr>
                            <td>정보 저장 / 보안</td>
                            <td>분산 네트워크에 저장되므로 위·변조가 어려움</td>
                            <td>중앙화된 데이터베이스 또는 로컬 컴퓨터에 저장되어 해킹 위험이 있음</td>
                        </tr>
                        <tr>
                            <td>데이터 삭제 여부</td>
                            <td>데이터와 거래는 생성된 이후 삭제가 불가능</td>
                            <td>데이터베이스에서 삭제 가능</td>
                        </tr>
                        <tr>
                            <td>정보 투명성</td>
                            <td>공공 거래 장부에 모든 기록이 공개됨</td>
                            <td>데이터베이스에 기록되어 접근 권한이 필요</td>
                        </tr>
                        <tr>
                            <td>거래 속도</td>
                            <td>플랫폼마다 다르지만 일부는 느릴 수 있음</td>
                            <td>인터넷과 하드웨어 속도에 따라 보통 빠름</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>DApp 개발 특징</h2>
                <ul>
                    <li>DApp 개발은 기존 앱 개발과 달리 스마트 계약이 메인넷에 배포된 후에는 변경이 불가능하다는 점에서 더 엄격한 품질 보증과 정밀한 테스트가 필요하다.</li>
                    <li>하드웨어 제품 개발처럼 출시 전에 철저한 점검과 검증이 이루어져야 한다.</li>
                    <li>배포 후 문제가 발생하면 수정에 더 많은 시간과 비용이 들기 때문에 철저한 준비가 필수적이다.</li>
                </ul>
            </section>

            <section>
                <h2>주요 DApp 예시</h2>
                <ul>
                    <li><strong>금융(Finance): DeFi (탈중앙화 금융)</strong> - 블록체인 기술을 이용해 중개자 없이 금융 서비스를 제공하는 DApp이다.</li>
                    <li><strong>게임(Gaming)</strong> - DApp 기반 게임은 게임 아이템과 자산 소유권이 블록체인에 기록되어 사용자에게 진정한 소유권을 부여한다.</li>
                    <li><strong>소셜 미디어(Social Media)</strong> - 블록체인을 기반으로 한 소셜 미디어는 사용자 데이터의 소유권과 수익 분배를 탈중앙화한다.</li>
                    <li><strong>NFT 마켓플레이스</strong> - NFT(Non-Fungible Token)를 발행, 거래 및 소유할 수 있는 DApp이다.</li>
                    <li><strong>공급망 및 추적(Supply Chain & Tracking)</strong> - 블록체인은 공급망 데이터를 투명하고 신뢰할 수 있게 기록하는 데 사용된다.</li>
                    <li><strong>파일 저장 및 공유(File Storage & Sharing)</strong> - 중앙 서버 없이 파일을 저장하고 공유할 수 있는 DApp이다.</li>
                </ul>
            </section>

            <section>
                <h2>기타 DApp</h2>
                <ul>
                    <li><strong>Brave Browser</strong>
                        <ul>
                            <li>설명: 광고 차단과 개인정보 보호를 중점으로 한 블록체인 기반 웹 브라우저</li>
                            <li>특징: 사용자에게 광고 수익을 공유</li>
                        </ul>
                    </li>
                    <li><strong>Golem</strong>
                        <ul>
                            <li>설명: 컴퓨터 리소스를 공유할 수 있는 탈중앙화 컴퓨팅 플랫폼</li>
                            <li>특징: 사용자는 여유 리소스를 제공하고 암호화폐를 보상으로 받음</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default TIL20250313;
