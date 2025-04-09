import React from 'react';

const TIL20250327: React.FC = () => {
    return (
        <div>
            <h3>전역 변수</h3>
            <ul>
                <li>스마트 계약 실행 시 자동으로 제공되는 읽기 전용 데이터</li>
                <li>주로 블록, 트랜잭션, 메시지에 대한 정보를 제공</li>
                <li><strong>block.prevrandao</strong>는 Ethereum 2.0 (Proof of Stake) 업그레이드 이후 <strong>block.difficulty</strong>를 대체했다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>전역 변수</th>
                        <th>타입</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>msg.sender</td>
                        <td>address</td>
                        <td>현재 함수를 호출한 주체의 주소 (계정 또는 스마트 계약)</td>
                    </tr>
                    <tr>
                        <td>msg.value</td>
                        <td>uint</td>
                        <td>호출 시 전송된 이더의 양 (wei 단위)</td>
                    </tr>
                    <tr>
                        <td>msg.data</td>
                        <td>bytes</td>
                        <td>호출 시 전송된 데이터 전체</td>
                    </tr>
                    <tr>
                        <td>tx.origin</td>
                        <td>address</td>
                        <td>트랜잭션을 시작한 외부 계정 주소 (스마트 계약에서 호출되더라도 최초 발신자의 주소 반환)</td>
                    </tr>
                    <tr>
                        <td>block.timestamp</td>
                        <td>uint</td>
                        <td>현재 블록이 생성된 시간 (초 단위, 유닉스 타임스탬프)</td>
                    </tr>
                    <tr>
                        <td>block.number</td>
                        <td>uint</td>
                        <td>현재 블록의 번호</td>
                    </tr>
                    <tr>
                        <td>block.prevrandao</td>
                        <td>uint</td>
                        <td>이전 블록의 난수(random number) 값</td>
                    </tr>
                    <tr>
                        <td>block.gaslimit</td>
                        <td>uint</td>
                        <td>현재 블록의 가스 한도 (전체 사용 가능한 가스의 양)</td>
                    </tr>
                    <tr>
                        <td>block.coinbase</td>
                        <td>address</td>
                        <td>현재 블록을 채굴한 채굴자의 주소</td>
                    </tr>
                    <tr>
                        <td>gasleft()</td>
                        <td>uint</td>
                        <td>현재 실행 중인 함수에 남아 있는 가스량</td>
                    </tr>
                </tbody>
            </table>

            <h3>전역 함수</h3>
            <ul>
                <li>전역 함수는 스마트 계약 내에서 호출할 수 있는 내장 함수로 주로 트랜잭션 관리나 블록 상태 추적에 사용된다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>전역 함수</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>gasleft()</strong></td>
                        <td>현재 트랜잭션에서 남아 있는 가스 양 확인</td>
                    </tr>
                    <tr>
                        <td><strong>keccak256()</strong></td>
                        <td>입력된 데이터를 해시 처리 (SHA3)</td>
                    </tr>
                    <tr>
                        <td><strong>blockhash(uint)</strong></td>
                        <td>특정 블록 번호에 대한 해시 값을 반환 (256개 이내의 최근 블록)</td>
                    </tr>
                </tbody>
            </table>

            <h3>전역 변수와 함수 활용 시 주의사항</h3>
            <ul>
                <li><strong>보안 문제</strong>
                    <ul>
                        <li><strong>tx.origin</strong>은 재진입 공격에 취약하므로 인증에 사용하면 안 된다</li>
                        <li>대신 <strong>msg.sender</strong>를 활용하는 것이 권장된다</li>
                    </ul>
                </li>
                <li><strong>타임스탬프 조작</strong>
                    <ul>
                        <li><strong>block.timestamp</strong>는 채굴자에 의해 소폭 조작될 수 있으므로 시간 기반 게임 로직에 주의가 필요하다 (약 +- 15초)</li>
                    </ul>
                </li>
                <li><strong>가스 관리</strong>
                    <ul>
                        <li>반복문이나 복잡한 로직은 가스 비용 증가에 주의해야 하며 <strong>gasleft()</strong> 함수를 활용해 남은 가스량을 실시간으로 추적해주는 게 좋다</li>
                    </ul>
                </li>
            </ul>

            <h3>상속</h3>
            <ul>
                <li>상속은 객체 지향 프로그래밍에서 파생된 개념으로 기존의 계약의 기능을 확장하거나 재사용하기 위한 기능이다</li>
                <li>Solidity에서 상속을 활용하면 기존 스마트 계약의 코드를 그대로 사용하면서도 새로운 기능을 덧붙일 수 있다</li>
                <li><strong>is</strong> 키워드를 사용해 부모 계약을 상속한다</li>
                <li>부모 계약의 함수나 변수에 접근할 수 있으며 상속된 함수와 상태 변수는 별도의 선언 없이도 사용할 수 있다</li>
                <li>Solidity는 다중 상속을 지원한다</li>
                <li>상속 우선 순위는 상속 선언 순서에 따라 결정된다</li>
            </ul>

            <h3>함수 오버라이딩</h3>
            <ul>
                <li><strong>virtual</strong>: 부모 계약에서 오버라이딩 가능하도록 설정해준다</li>
                <li><strong>override</strong>: 자식 계약에서 부모 계약의 함수를 재정의할 때 사용한다</li>
            </ul>

            <h3>접근 제어자와 상속</h3>
            <ul>
                <li><strong>public</strong>: 상속받은 계약에서 접근 가능</li>
                <li><strong>internal</strong>: 상속받은 계약에서 접근 가능(외부에서는 접근 불가)</li>
                <li><strong>private</strong>: 상속받은 계약에서도 접근 불가</li>
            </ul>

            <h3>인터페이스</h3>
            <ul>
                <li>외부 계약이 따를 수 있는 표준 함수 시그니처만 정의하는 계약이다</li>
                <li>상태 변수나 구현 로직은 포함할 수 없고 오직 함수의 선언만 포함할 수 있다</li>
                <li>함수 정의만 존재하고 구현은 없다</li>
                <li>상태 변수는 가질 수 없다</li>
                <li>모든 함수는 <strong>external</strong>로 선언되어야 한다</li>
                <li>다른 계약에서 상속받아 구현해야 한다</li>
            </ul>

            <h3>추상 계약</h3>
            <ul>
                <li>하나 이상의 구현되지 않은 함수를 가진 계약이다</li>
                <li>주로 기본 로직이나 공통 기능을 정의하고 이를 상속받은 계약에서 구현하도록 설계된다</li>
                <li>직접 배포할 수 없다</li>
                <li>최소한 하나 이상의 <strong>virtual</strong> 함수가 존재해야 한다</li>
                <li>상속받은 계약에서 반드시 <strong>override</strong>해야 한다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>특징</th>
                        <th>인터페이스 (Interface)</th>
                        <th>추상 계약 (Abstract Contract)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>상태 변수</td>
                        <td>❌ 불가능</td>
                        <td>✅ 가능</td>
                    </tr>
                    <tr>
                        <td>함수 구현</td>
                        <td>❌ 불가능</td>
                        <td>✅ 가능</td>
                    </tr>
                    <tr>
                        <td>함수 선언</td>
                        <td>✅ 필수 (external)</td>
                        <td>✅ 가능 (virtual로 선언)</td>
                    </tr>
                    <tr>
                        <td>상속받는 계약에서의 구현</td>
                        <td>✅ 필수 (모든 함수 구현)</td>
                        <td>✅ 필요에 따라 구현 (필요한 함수만)</td>
                    </tr>
                    <tr>
                        <td>사용 예시</td>
                        <td>표준화된 인터페이스 정의 (ERC20 등)</td>
                        <td>공통 로직을 제공하는 기반 계약</td>
                    </tr>
                </tbody>
            </table>

            <h3>라이브러리</h3>
            <ul>
                <li>라이브러리는 Solidity에서 재사용 가능한 코드 집합이다</li>
                <li>스마트 계약과 유사하지만 상태 변수가 없고 배포 불가능하며 오직 함수 집합만을 제공한다</li>
                <li><strong>library</strong> 키워드를 사용해 정의한다</li>
                <li><strong>pure</strong> 또는 <strong>view</strong> 함수를 주로 포함한다</li>
                <li>스마트 계약에서 직접 호출되거나 <strong>using for</strong> 구문을 통해 사용할 수 있다</li>
                <li>내장된 가스 최적화 기능이 제공된다</li>
                <li><strong>using for</strong> 구문은 라이브러리 함수를 특정 데이터 타입에 연결시켜 메서드 형식으로 사용할 수 있게 해준다</li>
                <li>코드 가독성이 높아지며 특정 데이터 타입에 맞는 함수를 명확하게 사용할 수 있다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>기능</th>
                        <th>라이브러리 (Library)</th>
                        <th>스마트 계약 (Contract)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>상태 변수</td>
                        <td>❌ 가질 수 없음</td>
                        <td>✅ 가질 수 있음</td>
                    </tr>
                    <tr>
                        <td>배포 가능성</td>
                        <td>❌ 직접 배포 불가</td>
                        <td>✅ 배포 가능</td>
                    </tr>
                    <tr>
                        <td>상속</td>
                        <td>❌ 상속 불가</td>
                        <td>✅ 상속 가능</td>
                    </tr>
                    <tr>
                        <td>재사용성</td>
                        <td>✅ 재사용성 높음 (다른 계약에서 쉽게 호출 가능)</td>
                        <td>✅ 제한된 범위 내에서 재사용 가능</td>
                    </tr>
                    <tr>
                        <td>가스 비용 최적화</td>
                        <td>✅ 최적화됨</td>
                        <td>❌ 상대적으로 비용이 높음</td>
                    </tr>
                </tbody>
            </table>

            <h3>기타</h3>
            <ul>
                <li><strong>Cryptography</strong>: 프라이빗키에 대한 비밀번호를 진짜 번호인지 확인해준다</li>
                <li><strong>HTTP JSON-RPC</strong>: 서버와 소통하는 프로토콜</li>
                <li><strong>Consensus</strong>: 합의를 볼 때 사용하는 것 (PoW, PoS)</li>
                <li><strong>P2P</strong>: 노드끼리 소통해주는 역할</li>
                <li><strong>Opcode</strong>: EVM이 실행하는 가장 기본적인 명령어의 집합</li>
                <li>Opcode마다 고유한 가스 비용이 있다</li>
            </ul>
        </div>
    );
};

export default TIL20250327;
