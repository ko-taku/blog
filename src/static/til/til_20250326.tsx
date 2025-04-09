import React from 'react';

const TIL20250326: React.FC = () => {
    return (
        <div>
            <h3>Solidity에서 변수 선언</h3>
            <ul>
                <li>변수는 데이터를 저장하고 관리하는데 사용</li>
                <li>변수를 선언하면 이더리움 블록체인 상의 스마트 컨트랙트에 상태를 유지할 수 있다</li>
                <li>변수를 선언할 때 데이터 타입과 가시성을 명시해야 한다</li>
                <li>선언된 변수는 블록체인 상에 저장되며 <code>public</code>으로 선언된 변수는 자동으로 getter 함수가 생성된다</li>
            </ul>

            <h3>변수의 가시성</h3>
            <ul>
                <li>Solidity에서는 변수에 대한 접근 제어를 위한 가시성 제어자가 존재한다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>가시성</th>
                        <th>설명</th>
                        <th>접근 가능 범위</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>public</td>
                        <td>외부 및 내부에서 접근 가능 (자동으로 getter 함수 생성됨)</td>
                        <td>모든 컨트랙트, 외부 계정</td>
                    </tr>
                    <tr>
                        <td>private</td>
                        <td>오직 선언된 컨트랙트 내부에서만 접근 가능</td>
                        <td>선언된 컨트랙트 내부</td>
                    </tr>
                    <tr>
                        <td>internal</td>
                        <td>선언된 컨트랙트 및 상속받은 컨트랙트에서 접근 가능</td>
                        <td>내부 및 상속받은 컨트랙트</td>
                    </tr>
                    <tr>
                        <td>external</td>
                        <td>외부에서만 접근 가능 (변수에선 사용 불가, 함수에만 사용 가능)</td>
                        <td>외부 컨트랙트, 외부 계정</td>
                    </tr>
                </tbody>
            </table>

            <h3>상수</h3>
            <ul>
                <li>배포 시점에 고정된 값</li>
                <li>수정 불가능</li>
                <li>읽기 연산에만 사용되므로 가스 비용이 줄어듦</li>
            </ul>

            <h3>불변</h3>
            <ul>
                <li>배포 시점에서만 설정 가능, 이후에는 변경 불가능</li>
                <li>배포 이후 값이 변경되지 않는 특성으로 보안성이 향상된다</li>
            </ul>

            <h3>Solidity에서의 함수</h3>
            <ul>
                <li>스마트 컨트랙트에서 특정 동작을 수행하는 코드 블록</li>
                <li>함수는 입력값을 받아 처리하고 결과값을 반환하거나 상태를 변경하는 역할을 한다</li>
                <li>가시성 및 상태 변경자를 설정 가능하다</li>
            </ul>

            <h3>함수의 가시성</h3>
            <ul>
                <li>함수의 접근 범위를 지정하는 키워드로 네 가지 가시성 설정이 존재한다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>가시성</th>
                        <th>설명</th>
                        <th>접근 가능 범위</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>public</td>
                        <td>외부 및 내부에서 접근 가능 (기본적으로 외부에서 호출 가능)</td>
                        <td>모든 컨트랙트, 외부 계정</td>
                    </tr>
                    <tr>
                        <td>private</td>
                        <td>선언된 컨트랙트 내부에서만 접근 가능</td>
                        <td>선언된 컨트랙트 내부</td>
                    </tr>
                    <tr>
                        <td>internal</td>
                        <td>선언된 컨트랙트 및 상속받은 컨트랙트에서 접근 가능</td>
                        <td>내부 및 상속받은 컨트랙트</td>
                    </tr>
                    <tr>
                        <td>external</td>
                        <td>외부에서만 접근 가능 (내부 호출 불가)</td>
                        <td>외부 컨트랙트, 외부 계정</td>
                    </tr>
                </tbody>
            </table>

            <h3>상태 변경자</h3>
            <ul>
                <li>상태 변경자는 함수가 스마트 컨트랙트의 상태 변수에 어떤 영향을 미치는지를 정의한다</li>
            </ul>

            <table>
                <thead>
                    <tr>
                        <th>상태 변경자</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>view</td>
                        <td>상태 변수의 읽기만 허용 (가스 비용 없음)</td>
                    </tr>
                    <tr>
                        <td>pure</td>
                        <td>상태 변수의 읽기 및 쓰기 모두 금지 (가스 비용 없음)</td>
                    </tr>
                    <tr>
                        <td>payable</td>
                        <td>이더리움을 받을 수 있는 함수 (특정한 금액을 받기 위한 함수)</td>
                    </tr>
                </tbody>
            </table>

            <h3>반환값</h3>
            <ul>
                <li><code>return</code> 키워드를 사용하여 반환값의 타입을 지정할 수 있다</li>
                <li>여러 값도 반환 가능하며 이때 튜플 형태로 반환한다</li>
            </ul>

            <h3>함수 호출</h3>
            <ul>
                <li>내부에서 직접 호출할 수 있다</li>
                <li>외부 함수 호출은 <code>this.외부함수</code> 형식으로 접근해야 한다</li>
            </ul>

            <h3>접근 제어자</h3>
            <ul>
                <li>특정 조건을 충족할 때만 함수를 실행하도록 설정할 수 있다</li>
                <li>공통적인 동작을 재사용 가능하게 한다</li>
                <li><code>modifier</code>는 함수를 실행하기 전에 특정 조건을 검사하는데 유용하다</li>
                <li>주로 접근 제한과 조건 확인에 사용된다</li>
                <li><code>_</code>: 해당 위치에서 원래 함수 코드가 실행된다</li>
            </ul>

            <h3>함수 오버로딩</h3>
            <ul>
                <li>Solidity에서는 같은 이름의 함수를 서로 다른 매개변수로 선언할 수 있다</li>
                <li>동일한 함수를 사용하지만 매개변수에 따라 다른 함수가 호출된다</li>
            </ul>

            <h3>속성</h3>
            <table>
                <thead>
                    <tr>
                        <th>속성</th>
                        <th>storage</th>
                        <th>memory</th>
                        <th>calldata</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>저장 위치</td>
                        <td>블록체인의 영구 저장소 (상태 변수)</td>
                        <td>임시 메모리 (함수 실행 중에만 유지)</td>
                        <td>함수 호출 시 외부 입력 데이터 (읽기 전용)</td>
                    </tr>
                    <tr>
                        <td>지속성</td>
                        <td>트랜잭션 이후에도 유지됨</td>
                        <td>함수 실행 종료 후 소멸됨</td>
                        <td>함수 호출이 끝나면 소멸됨</td>
                    </tr>
                    <tr>
                        <td>가스 비용</td>
                        <td>읽기/쓰기 시 비용이 높음</td>
                        <td>상대적으로 비용이 저렴</td>
                        <td>가장 저렴 (읽기 전용)</td>
                    </tr>
                    <tr>
                        <td>변경 가능 여부</td>
                        <td>변경 가능</td>
                        <td>변경 가능</td>
                        <td>변경 불가능</td>
                    </tr>
                    <tr>
                        <td>용도</td>
                        <td>상태 변수에 직접 접근 및 저장</td>
                        <td>임시 데이터 처리</td>
                        <td>외부 입력값 처리 (예: 함수 매개변수)</td>
                    </tr>
                </tbody>
            </table>

            <h3>조건문</h3>
            <ul>
                <li>조건문은 특정 조건을 만족할 때 코드의 실행을 결정한다</li>
                <li><strong>if</strong>: 조건이 참일 경우 코드 실행</li>
                <li><strong>else if</strong>: 이전 조건이 거짓일 경우 다른 조건 확인</li>
                <li><strong>else</strong>: 모든 조건이 거짓일 경우 실행</li>
            </ul>

            <h3>삼항 연산자</h3>
            <ul>
                <li>간단한 조건문을 한 줄로 작성할 수 있다</li>
            </ul>

            <h3>반복문</h3>
            <ul>
                <li>반복문은 특정 조건이 만족될 때까지 코드를 반복 실행한다</li>
                <li><strong>for문</strong>: 반복 횟수가 명확할 때 사용하며 반복 조건이 거짓이 될 때까지 반복 실행한다</li>
                <li><strong>while문</strong>: 조건이 참인 동안 계속 실행되며 반복 횟수가 명확하지 않거나 조건에 따라 반복 여부가 결정될 때 사용한다</li>
                <li><strong>do-while문</strong>: Solidity는 do-while 반복문을 지원하지 않는다</li>
            </ul>

            <h3>반복문 제어 키워드</h3>
            <ul>
                <li><strong>break</strong>: 반복문을 즉시 종료</li>
                <li><strong>continue</strong>: 다음 반복으로 건너 뛰기</li>
            </ul>

            <h3>Solidity에서 이벤트</h3>
            <ul>
                <li>스마트 컨트랙트와 외부 애플리케이션 간의 통신을 위한 메커니즘이다</li>
                <li>스마트 컨트랙트 내에서 발생한 특정 동작을 기록하고 해당 로그는 이더리움 블록체인에 저장되어 외부 애플리케이션이 이를 감지할 수 있다</li>
                <li>블록체인에 기록되어 외부에서 읽기가 가능하다</li>
                <li>트랜잭션 로그로 저장되어 영구 저장은 아니지만 검색이 가능하다</li>
                <li>스마트 컨트랙트와 외부 애플리케이션 간의 소통에 사용된다</li>
                <li><strong>ValueChanged</strong> 이벤트는 값이 변경될 때 트리거된다</li>
                <li>이벤트는 <strong>emit</strong> 키워드로 발생시킬 수 있다</li>
                <li>이벤트 로그가 블록체인에 기록되어 외부 애플리케이션이 감지할 수 있다</li>
                <li>이벤트는 가스 비용이 낮으므로 상태 변수에 데이터를 저장하는 것보다 효율적이다</li>
                <li>로그로 저장되므로 상태 저장 비용 없이 외부에서 데이터를 추적할 수 있다</li>
                <li>복잡한 데이터 저장 대신 이벤트를 활용해 가스 비용을 줄이는 것이 일반적이다</li>
            </ul>

            <h3>이벤트 필터링</h3>
            <ul>
                <li>이벤트 로그는 인덱스를 사용해 값 타입을 빠르게 검색할 수 있다</li>
                <li><strong>indexed</strong> 키워드를 사용하면 해당 필드를 기준으로 필터링이 가능하다</li>
                <li>최대 3개의 인덱스 필드만 설정이 가능하다</li>
            </ul>

            <h3>이벤트 활용 사례</h3>
            <ul>
                <li><strong>스마트 컨트랙트 상태 변경</strong> 시 기록한다: <code>event StateChanged(string oldState, string newState);</code></li>
                <li><strong>트랜잭션 기록</strong>과 함께 외부 애플리케이션이 변화를 감지하도록 사용된다: <code>event PaymentReceived(address sender, uint256 amount);</code></li>
                <li><strong>권한 변경</strong>이나 엑세스 제어 시 발생하는 이벤트: <code>event AccessGranted(address indexed user, string role);</code></li>
            </ul>

            <h3>트랜잭션 로그에서 이벤트 확인</h3>
            <ul>
                <li>이벤트 발생 후 이더리움 로그에서 해당 이벤트를 조회할 수 있다</li>
                <li>Hardhat 콘솔에서도 조회가 가능하다</li>
                <li>이벤트 로그를 실시간으로 감지할 수 있다</li>
            </ul>

            <h3>Solidity에서 에러 처리</h3>
            <ul>
                <li><strong>require()</strong>: 조건 검사 및 입력값 검증에 사용된다
                    <ul>
                        <li><code>require(condition, "Error message");</code> 참이어야 하는 조건과 조건이 참이 아닐 경우 출력되는 메시지로 구성</li>
                    </ul>
                </li>
                <li><strong>revert()</strong>: 특정 조건이 충족되지 않을 때 명시적으로 오류를 발생시킨다
                    <ul>
                        <li><code>revert("Error message");</code></li>
                    </ul>
                </li>
                <li><strong>assert()</strong>: 내부 오류나 불변성 검사를 위해 사용되며 실패 시 모든 가스를 소모하므로 주의해야 한다
                    <ul>
                        <li><code>assert(condition);</code> 코드 로직의 버그나 계약 내 일관성 유지를 위해 사용된다</li>
                    </ul>
                </li>
                <li><strong>try/catch</strong>: 외부 호출이나 저수준 함수 호출에서 발생할 수 있는 실패를 처리한다
                    <ul>
                        <li>외부 함수 호출 시 오류 발생 가능성을 대비하며 명시적 에러와 저수준 에러를 분리 처리한다</li>
                    </ul>
                </li>
            </ul>

            <h3>Solidity에서 이더 송금</h3>
            <ul>
                <li>이더 송금은 주로 지불, 입출금 기능을 구현할 때 사용된다</li>
                <li><strong>transfer()</strong>: 안전한 이더 송금으로 상태 변경 로직이 없는 수신자만 사용 가능하며 가스 한도는 2300 gas이다</li>
                <li><strong>send()</strong>: 실패 시 반환값으로 성공 여부 확인되며 트랜잭션은 롤백되지 않아 명시적으로 처리해야 한다</li>
                <li><strong>call()</strong>: 가장 유연하지만 주의가 필요한 송금 방법이고 가스 제한이 없으며 재진입 공격에 취약할 수 있다
                    <ul>
                        <li>call 사용 시 재진입 공격 방지를 위한 ReentrancyGuard 패턴을 사용한다</li>
                        <li>call 사용 시 가스 한도 설정이 필요하다</li>
                    </ul>
                </li>
                <li>함수가 이더를 받을 수 있으려면 <strong>payable</strong> 키워드를 명시해야 한다</li>
                <li><strong>receive()</strong> 함수: 순수 이더 전송 시 호출(데이터 없이 전송)</li>
                <li><strong>fallback()</strong> 함수: 이더와 함께 데이터가 전송되거나 함수가 없을 때 호출</li>
                <li><code>address.balance</code>로 해당 주소의 잔액을 반환하여 조회할 수 있다</li>
            </ul>
        </div>
    );
};

export default TIL20250326;
