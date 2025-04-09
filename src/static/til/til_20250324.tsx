import React from 'react';

const TIL20250324: React.FC = () => {
    return (
        <div>
            <h3>Solidity</h3>
            <ul>
                <li>이더리움 스마트 컨트랙트 및 DApp을 작성하기 위한 프로그래밍 언어</li>
                <li>이더리움 가상 머신(EVM)에서 실행되며 블록체인 기반의 자율적이고 검증 가능한 계약을 구현하는 데 사용</li>
                <li>이더리움뿐만 아니라 Binance Smart Chain, Polygon 등 EVM 호환 네트워크에서도 활용</li>
            </ul>

            <h3>Solidity 역사</h3>
            <ul>
                <li>2014년 이더리움 재단에서 개발</li>
                <li>2015년 이더리움 재단이 Solidity를 공식적으로 발표</li>
            </ul>

            <h3>Solidity 코드 실행 환경</h3>
            <ul>
                <li>
                    <strong>Remix IDE:</strong> 브라우저에서 Solidity 코드를 실행할 수 있는 온라인 개발 환경
                </li>
                <li>
                    <strong>Hardhat:</strong> Solidity 개발, 테스트, 배포 자동화를 지원하는 Node.js 기반 프레임워크
                </li>
                <li>
                    <strong>Truffle:</strong> 스마트 컨트랙트 배포 및 네트워크 관리에 특화된 개발 환경
                </li>
            </ul>

            <h3>Solidity 특징</h3>
            <ul>
                <li>
                    <strong>스마트 컨트랙트 기반:</strong>
                    <ul>
                        <li>블록체인에서 자동으로 실행되는 계약을 작성할 수 있다.</li>
                        <li>중개자 없이 탈중앙화된 금융(DeFi), NFT, DAO 등 구현 가능</li>
                    </ul>
                </li>
                <li>
                    <strong>정적 타입 언어:</strong>
                    <ul>
                        <li>Solidity는 정적 타입 언어이며 변수의 타입을 명확하게 선언해야 한다.</li>
                        <li>uint, string, bool, address 등 다양한 데이터 타입 제공</li>
                    </ul>
                </li>
                <li>
                    <strong>EVM에서 실행 가능:</strong>
                    <ul>
                        <li>Solidity로 작성된 스마트 컨트랙트는 EVM에서 실행된다.</li>
                        <li>이더리움뿐만 아니라 Polygon, Avalanche, BNB Chain 등에서도 활용 가능</li>
                    </ul>
                </li>
                <li>
                    <strong>이벤트 기반 프로그래밍:</strong>
                    <ul>
                        <li>Solidity는 이벤트(Event) 기능을 지원하여 블록체인 데이터를 쉽게 추적 가능</li>
                    </ul>
                </li>
                <li>
                    <strong>보안 중심 개발:</strong>
                    <ul>
                        <li>스마트 컨트랙트는 배포 후 변경할 수 없으므로 보안이 매우 중요하다.</li>
                        <li>Solidity는 modifier, require, assert 등을 활용한 보안 강화 기능 제공</li>
                    </ul>
                </li>
            </ul>

            <h3>Solidity로 할 수 있는 일</h3>
            <ul>
                <li>
                    <strong>블록체인 애플리케이션 개발:</strong>
                    <ul>
                        <li>Solidity를 사용하면 탈중앙화 애플리케이션을 개발할 수 있다.</li>
                        <li>토큰발행 (ERC-20, ERC-721, ERC-1155): 이더리움 기반 암호화폐 및 NFT 생성</li>
                        <li>스마트 컨트랙트 기반 금융(DeFi): 탈중앙화 거래소(DEX), 스테이킹, 대출 플랫폼</li>
                        <li>DAO(탈중앙화 자율 조직): 투표 시스템, 거버넌스 모델 구축</li>
                        <li>게임 및 메타버스: NFT 게임, 가상자산 거래 시스템</li>
                    </ul>
                </li>
            </ul>

            <h3>스마트 컨트랙트 배포 및 테스트</h3>
            <ul>
                <li>스마트 컨트랙트를 배포하고 테스트하기 위해 Hardhat 또는 Truffle을 사용할 수 있다.</li>
            </ul>

            <h2>이더리움 개발환경 구성 - Remix</h2>
            <ul>
                <li>이더리움 스마트 컨트랙트를 개발할 때 사용할 수 있는 다양한 IDE가 있다.</li>
                <li>배포 및 테스트를 위해서는 Hardhat 또는 Truffle과 같은 개발 프레임워크가 필요하다.</li>
                <li>
                    <strong>Remix:</strong> 웹 기반 IDE인 Remix는 Solidity 개발을 위한 전용 IDE이다.
                </li>
                <li>remix.ethereum.org에 접속하여 사용한다.</li>
            </ul>

            <h3>Solidity 코드 실행순서</h3>
            <ol>
                <li>변수를 선언하고 초기화</li>
                <li>함수 실행</li>
                <li>트랜잭션 처리</li>
                <ul>
                    <li>message 변수가 먼저 선언된다.</li>
                    <li>setMessage 함수가 실행되면 message 값이 변경된다.</li>
                </ul>
            </ol>

            <h3>Solidity 콘솔 출력(이더리움 네트워크 로그 사용)</h3>
            <ul>
                <li>JS의 <code>console.log()</code>와 달리 Solidity는 블록체인 상에서 로그를 기록할 수 있도록 이벤트(event) 기능을 제공한다.</li>
            </ul>

            <h3>Solidity 코드의 오류 처리</h3>
            <ul>
                <li>
                    Solidity 코드가 실행되다가 오류가 발생하면 트랜잭션이 롤백되며 특정 지점에서 실행이 멈춘다.
                </li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>함수</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>require(condition, message)</td>
                        <td>조건이 참이 아니면 오류 발생</td>
                    </tr>
                    <tr>
                        <td>assert(condition)</td>
                        <td>내부 오류 체크 (개발자용)</td>
                    </tr>
                    <tr>
                        <td>revert(message)</td>
                        <td>강제적으로 실행을 취소하고 트랜잭션 롤백</td>
                    </tr>
                </tbody>
            </table>

            <h3>주석 사용</h3>
            <ul>
                <li>Solidity 코드에서도 주석을 사용하여 코드에 대한 설명을 추가할 수 있다.</li>
            </ul>

            <h3>Solidity의 값과 표현식</h3>
            <ul>
                <li>Solidity에서는 다양한 값(value)과 표현식(expression)을 사용할 수 있다.</li>
            </ul>

            <h3>주석 및 라이선스 정보</h3>
            <ul>
                <li>
                    <strong>SPDX-License-Identifier</strong>는 라이선스 정보를 명시하는 선언이다.
                </li>
                <li>
                    Solidity 컨트랙트를 오픈소스 프로젝트에 사용할 경우 필수적으로 포함해야 한다.
                </li>
                <li>
                    "MIT"는 가장 널리 사용되는 오픈소스 라이선스 중 하나이다.
                </li>
            </ul>

            <h3>프라그마(pragma)</h3>
            <ul>
                <li>Solidity 버전을 지정하는 부분이다.</li>
                <li>
                    <strong>^0.8.20</strong>는 0.8.20 이상, 0.9.0 미만의 버전과 호환됨을 의미한다.
                </li>
                <li>
                    버전을 명확히 지정하면 컴파일러 버전 변경으로 인한 호환성 문제를 방지할 수 있다.
                </li>
                <li>
                    보안 감사나 중요한 프로덕션 환경에서는 버전 고정이 안정성을 높여준다.
                </li>
                <li>버전 선언을 하지 않으면 컴파일러가 자동으로 최신 버전으로 컴파일한다.</li>
            </ul>

            <h3>컨트랙트 선언</h3>
            <ul>
                <li>Solidity에서 모든 코드는 <code>contract</code> 키워드를 사용하여 컨트랙트 블록 내부에서 작성된다.</li>
                <li>컨트랙트의 이름은 대문자로 시작하는 파스칼 케이스(PascalCase)를 사용하는 것이 일반적이다.</li>
            </ul>

            <h3>상태변수</h3>
            <ul>
                <li>블록체인에 저장되는 데이터로, 컨트랙트의 영구적인 상태를 유지한다.</li>
                <li>
                    <code>string public message;</code> → 스마트 컨트랙트가 message 값을 저장한다.
                </li>
                <li>
                    <strong>public</strong> 키워드를 사용하면 자동으로 getter 함수가 생성된다.
                </li>
            </ul>

            <h3>생성자</h3>
            <ul>
                <li>컨트랙트 배포 시 한 번만 실행되며, 초기 값을 설정하는 역할을 한다.</li>
            </ul>

            <h3>값 타입(Value Type)</h3>
            <ul>
                <li>변수가 직접 데이터를 저장하는 유형으로 스마트 컨트랙트에서 가장 많이 사용된다.</li>
                <li>
                    <strong>정수형:</strong> 부호가 있는 정수(int)와 부호 없는 정수(uint)를 제공
                </li>
                <li><strong>불리언(Boolean):</strong> true 또는 false 값을 저장하는 타입</li>
                <li><strong>주소(Address):</strong> 이더리움 주소를 저장하는 타입</li>
                <li><strong>바이트(Bytes):</strong> 고정 크기의 바이트 배열을 저장하는 타입</li>
                <li><strong>열거형(Enum):</strong> 특정 값들 중 하나를 선택할 때 사용된다</li>
            </ul>

            <h3>Solidity의 숫자 타입</h3>
            <ul>
                <li>Solidity는 정수형(Integer Type)만 지원하며 부동소수점 연산을 지원하지 않는다.</li>
            </ul>

            <h3>정수형</h3>
            <ul>
                <li><strong>부호 없는 정수:</strong> <code>uint</code>, <code>uint8</code> ~ <code>uint256</code></li>
                <li><strong>부호 있는 정수:</strong> <code>int</code>, <code>int8</code> ~ <code>int256</code></li>
            </ul>

            <h3>Solidity에서 숫자 연산</h3>
            <ul>
                <li>Solidity에서도 기본적인 사칙연산을 수행할 수 있다.</li>
                <li>0으로 나누는 연산은 <code>require</code>를 사용하여 방지해야 한다.</li>
                <li>
                    <strong>uint</strong>와 <strong>int</strong> 타입이 혼합되면 컴파일 오류가 발생할 수 있다.
                </li>
            </ul>

            <h3>Solidity에서 추가적인 수학 연산</h3>
            <ul>
                <li>
                    Solidity에는 JS의 Math 객체와 같은 내장된 고급 수학 함수는 없지만 기본적인 수학 연산을 수행할 수 있다.
                </li>
                <li>
                    <strong>제곱 연산</strong> (<code>**</code> 연산자 사용) 또는 <strong>최소값</strong>과 <strong>최댓값</strong> 비교가 가능하다.
                </li>
            </ul>

            <h3>오버플로우 및 언더플로우 방지</h3>
            <ul>
                <li>Solidity 0.8.0버전부터 오버플로우 및 언더플로우 방지가 기본으로 적용된다.</li>
                <li>
                    Solidity 0.8.x 이전 버전에서는 <code>SafeMath</code> 라이브러리를 사용해야 했지만 이제는 필요없다.
                </li>
            </ul>

            <h3>Solidity에서의 불리언 타입</h3>
            <ul>
                <li>
                    <code>bool</code>은 true 또는 false 값을 저장할 수 있는 데이터 타입이다.
                </li>
                <li>스마트 컨트랙트에서 조건문, 논리 연산, 상태 변수, 제어 흐름을 다룰 때 사용된다.</li>
                <li>기본값은 false이며, <code>if</code>문과 논리 연산자( <code>&&</code>, <code>||</code>, <code>!</code>)와 함께 자주 사용된다.</li>
            </ul>

            <h3>Solidity에서의 주소 타입(Address)</h3>
            <ul>
                <li><strong>address</strong> 타입은 이더리움 계정 또는 스마트 컨트랙트의 주소를 저장하는데 사용된다.</li>
                <li>
                    <strong>address payable</strong>을 사용하면 이더를 송금할 수 있는 주소로 변환이 가능하다.
                </li>
            </ul>

            <h3>Address 타입의 종류</h3>
            <ul>
                <li>일반 주소(<code>address</code>): 이더리움 네트워크에서 특정 계정이나 컨트랙트를 식별하는 기본적인 주소 타입</li>
                <li>지불 가능 주소(<code>address payable</code>): 이더를 송금할 수 있는 주소 타입</li>
            </ul>

            <h3>Address 타입의 주요 기능</h3>
            <ul>
                <li>이더 송금: <code>transfer</code>, <code>send</code>, <code>call</code></li>
                <li><code>transfer</code>: 실패 시 자동으로 revert</li>
                <li><code>send</code>: 실패 시 false 반환</li>
                <li><code>call</code>: 가장 유연하지만 보안 위험이 있음</li>
            </ul>

            <h3>Solidity에서 바이트 타입</h3>
            <ul>
                <li>
                    Solidity에서 <code>bytes</code> 타입은 고정 크기와 가변 크기의 바이트 배열을 저장하는데 사용된다.
                </li>
                <li>
                    바이트 배열은 문자열보다 낮은 가스 비용을 가지며, 특정 데이터 조작을 더 효율적으로 수행할 수 있다.
                </li>
            </ul>

            <h3>바이트 타입의 종류</h3>
            <ul>
                <li>고정 크기 바이트 배열 (<code>bytes1~bytes32</code>): 1~32 바이트 크기의 고정 크기 배열 제공</li>
                <li>가변 크기 바이트 배열 (<code>bytes</code>): 동적 크기의 바이트 배열, 문자열과 유사</li>
            </ul>

            <h3>Solidity에서 열거형(Enum) 타입</h3>
            <ul>
                <li>여러 개의 상수 값들을 한정된 집합으로 정의할 때 사용된다.</li>
                <li>enum을 사용하면 상태 변경을 제어하거나, 특정 옵션을 명확하게 표현할 수 있다.</li>
                <li>기본적으로 첫 번째 요소는 0, 두 번째 요소는 1의 값으로 저장된다.</li>
            </ul>

        </div>
    );
};

export default TIL20250324;
