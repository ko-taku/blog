import React from 'react';

const TIL20250214: React.FC = () => {
    return (
        <div>
            <h2>20250214 TIL</h2>
            <article>
                <h3>JavaScript 역사</h3>
                <ul>
                    <li>
                        1955년 탄생
                        <ul>
                            <li>브렌던 아이크에 의해 개발</li>
                        </ul>
                    </li>
                    <li>
                        ECMAScript 표준화
                        <ul>
                            <li>1997년에 ECMA 국제 표준화 기구에 의해 표준화</li>
                        </ul>
                    </li>
                    <li>
                        현재의 위치
                        <ul>
                            <li>웹 어플리케이션의 중심 언어</li>
                            <li>
                                React, Angular, Vue.js와 같은 프레임워크와 Node.js를 통해 웹,
                                서버, 모바일 및 IoT 개발에도 광범위하게 사용
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>JS 설치</h3>
                <ul>
                    <li>JS는 웹브라우저에 내장되어 있어 추가 설치 없이도 실행</li>
                    <li>서버측 개발이나 로컬 환경에서 실행하기 위해서 Node.js 설치가 필요</li>
                </ul>

                <h3>Node.js 설치</h3>
                <ol>
                    <li>Node.js 공식 웹사이트에 접속</li>
                    <li>LTS(Long Term Support) 버전을 다운로드</li>
                    <li>
                        설치 후, 터미널에 다음 명령어를 입력하여 설치 여부를 확인
                        <ul>
                            <li>node -v</li>
                            <li>nom -v</li>
                        </ul>
                    </li>
                    <li>설치 후 .js 파일을 생성한 뒤 node 파일이름.js로 실행할 수 있다</li>
                </ol>

                <h3>JS 특징</h3>
                <ul>
                    <li>
                        인터프리터 언어
                        <ul>
                            <li>코드를 실행 전에 컴파일하지 않고 브라우저가 즉시 해석하여 실행</li>
                        </ul>
                    </li>
                    <li>
                        크로스 플랫폼
                        <ul>
                            <li>브라우저만 있으면 플랫폼에 상관없이 실행 가능</li>
                        </ul>
                    </li>
                    <li>
                        동적 타이핑
                        <ul>
                            <li>변수의 타입을 선언할 필요가 없으며 실행 중에 타입이 동적으로 결정</li>
                        </ul>
                    </li>
                    <li>
                        객체 지향과 함수형 프로그래밍
                        <ul>
                            <li>객체 지향 프로그래밍(OOP)과 함수형 프로그래밍(FP) 모두 지원</li>
                        </ul>
                    </li>
                    <li>
                        이벤트 기반 프로그래밍
                        <ul>
                            <li>사용자 상호작용(클릭, 입력 등)을 처리하기 위해 이벤트 기반 방식으로 동작</li>
                        </ul>
                    </li>
                </ul>

                <h3>JS로 할 수 있는 일</h3>
                <ul>
                    <li>
                        동적인 웹 페이지 생성
                        <ul>
                            <li>DOM 조작을 통해 HTML요소를 동적으로 업데이트하거나 CSS를 변경하여 페이지 스타일을 조정</li>
                        </ul>
                    </li>
                    <li>
                        프론트엔드 애플리케이션 개발
                        <ul>
                            <li>React, Angular, Vue.js와 같은 프레임워크를 사용해 SPA(Single Page App)를 개발</li>
                        </ul>
                    </li>
                    <li>
                        서버 애플리케이션 개발
                        <ul>
                            <li>Node.js를 활용해 서버를 구축하거나 REST API를 개발</li>
                        </ul>
                    </li>
                    <li>
                        모바일 앱 개발
                        <ul>
                            <li>React Native, sonic 등을 통해 크로스 플랫폼 모바일 앱을 개발</li>
                        </ul>
                    </li>
                    <li>
                        데스크탑 애플리케이션 개발
                        <ul>
                            <li>Electron을 사용해 데스크탑 애플리케이션을 제작</li>
                        </ul>
                    </li>
                    <li>
                        게임 개발
                        <ul>
                            <li>Phaser와 같은 게임 엔진을 사용해 2D 또는 3D 게임을 개발</li>
                        </ul>
                    </li>
                    <li>
                        머신러닝 및 데이터 처리
                        <ul>
                            <li>TensorFlow.js와 같은 라이브러리를 통해 브라우저에서 머신러닝 작업을 수행</li>
                        </ul>
                    </li>
                </ul>
            </article>
            <article>
                <h3>JS에서 주석</h3>
                <ul>
                    <li>//다음에 작성</li>
                    <li>/* 과 */ 사이에 작성</li>
                    <li>주석 처리된 코드는 JS엔진은 인식을 하지 않는다</li>
                </ul>

                <h3>값과 표현식</h3>
                <ul>
                    <li>
                        표현식
                        <ul>
                            <li>하나의 값으로 평가될 수 있는 코드</li>
                        </ul>
                    </li>
                    <li>
                        값
                        <ul>
                            <li>하나의 고유한 의미를 가지는 코드</li>
                        </ul>
                    </li>
                    <li>
                        연산자
                        <ul>
                            <li>특정 연산을 수행할 수 있는 코드</li>
                        </ul>
                    </li>
                </ul>

                <h3>JS 타입</h3>
                <ul>
                    <li>
                        원시 타입 : 간단한 데이터를 표현하는 타입
                        <ul>
                            <li>1. 숫자</li>
                            <li>2. 문자열 : 큰따옴표나 작은 따옴표로 감싼다</li>
                            <li>3. 불리언 : 참 또는 거짓을 나타낸다</li>
                            <li>4. undefined : 값을 아직 정의하지 않은 상태</li>
                            <li>5. null : 값이 없음을 명시적으로 표현</li>
                            <li>6. symbol : 고유한 식별자를 만들 때 사용</li>
                        </ul>
                    </li>
                    <li>
                        타입을 알아야 하는 이유
                        <ul>
                            <li>데이터를 정확히 이해하고 다룰 수 있다</li>
                            <li>오류를 예방</li>
                            <li>코드를 깔끔하고 효율적으로 작성 가능</li>
                        </ul>
                    </li>
                    <li>
                        타입 확인 방법
                        <ul>
                            <li>typeof 키워드로 확인할 수 있다</li>
                        </ul>
                    </li>
                    <li>
                        원시 타입인 null이 object인 이유
                        <ul>
                            <li>자바스크립트가 처음 설계될 당시 메모리 관리를 위해 데이터 타입을 나타내는 값들이 비트 형태로 저장</li>
                            <li>객체 타입을 나타내는 내부 비트는 000으로 시작했으며 null의 내부 표현도 000으로 설정</li>
                            <li>결과적으로 typeof null이 object로 반환</li>
                        </ul>
                    </li>
                    <li>
                        Number 타입
                        <ul>
                            <li>정수(integer)와 실수(float)를 모두 표현할 수 있다</li>
                            <li>같은 숫자 값 간에는 산술 연산자를 사용할 수 있다(+, -, *, /, %)</li>
                            <li>
                                Math 내장 객체
                                <ul>
                                    <li>좀 더 복잡한 계산을 위해 사용</li>
                                    <li>Math.floor() : 괄호 안의 숫자를 내림하여 반환</li>
                                    <li>Math.ceil() : 괄호 안의 숫자를 올림하여 반환</li>
                                    <li>Math.round() : 괄호 안의 숫자를 반올림하여 반환</li>
                                    <li>Math.abs() : 괄호 안의 숫자의 절대값을 반환</li>
                                    <li>Math.sqrt() : 괄호 안의 숫자의 루트값을 반환</li>
                                    <li>Math.pow() : 괄호 안의 첫 번째 숫자를 밑, 두 번째 숫자를 지수로 반환</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        String 타입
                        <ul>
                            <li>인간의 언어, 자연어를 JS에서 표현하기 위한 데이터 타입</li>
                            <li>따옴표, 큰따옴표, 백틱(`)으로 감싸면 된다</li>
                            <li>맥북에서 백틱은 영어 전환 후 물결(~)을 누르면 입력할 수 있다</li>
                            <li>+ 로 문자열을 이어 붙일 수 있다</li>
                            <li>다른 타입과 이어 붙이려고 하면 모두 문자열로 변하므로 조심해서 사용해야 한다</li>
                            <li>문자열의 length 속성을 이용하여 문자열의 길이를 확인할 수 있다</li>
                            <li>문자열 값에 .length를 붙이면 된다</li>
                            <li>각 문자가 몇 번째에 위치하는지 인덱스로 확인할 수 있다</li>
                            <li>
                                문자열 주요 메서드
                                <ul>
                                    <li>toLowerCase() : 문자열을 소문자로 변경</li>
                                    <li>toUpperCase() : 문자열을 대문자로 변경</li>
                                    <li>concat() : 문자열 연결 연산자 + 처럼 문자열을 이어붙일 수 있다</li>
                                    <li>slice() : 문자열의 일부를 자를 수 있다</li>
                                    <li>indexOf() : 문자열 내에 특정 문자나 숫자가 몇 번째 위치하는지 확인한다</li>
                                    <li>includes() : 문자열 내에 특정 문자가 포함되어 있는지 확인한다</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Boolean 타입
                        <ul>
                            <li>사실관계를 구분하기 위한 타입</li>
                            <li>true 혹은 false 둘 중 하나의 값</li>
                            <li>
                                falsy : 불리언 타입은 아니지만 JS로 false로 여겨지는 값
                                <ul>
                                    <li>0</li>
                                    <li>-0</li>
                                    <li>0n</li>
                                    <li>""</li>
                                    <li>''</li>
                                    <li>``</li>
                                    <li>null</li>
                                    <li>undefined</li>
                                    <li>NaN</li>
                                </ul>
                            </li>
                            <li>불리언은 비교연산자로 두 값이 같은지 다른지를 확인할 때 유용하다</li>
                            <li>
                                엄격한 동치 연산자
                                <ul>
                                    <li>===, !==</li>
                                    <li>두 피연산자 값과 타입이 같으면 true, 다르면 false를 반환</li>
                                </ul>
                            </li>
                            <li>
                                느슨한 동치 연산자
                                <ul>
                                    <li>==, !=</li>
                                    <li>예외가 많아 사용을 권장하지 않는다</li>
                                    <li>숫자열과 문자열의 값이 같아도 true로 반환한다</li>
                                </ul>
                            </li>
                            <li>
                                대소 관계 비교 연산자
                                <ul>
                                    <li>&gt;, &lt;,&gt;=, &lt;=</li>
                                    <li>두 피연산자의 값의 크기를 비교</li>
                                </ul>
                            </li>
                            <li>
                                논리연산자
                                <ul>
                                    <li>두 값 간의 논리 관계를 확인</li>
                                    <li>
                                        || : 논리합(or)
                                        <ul>
                                            <li>두 값 중 하나만 true여도 true로 판단</li>
                                            <li>두 값이 모두 false면 false로 판단</li>
                                        </ul>
                                    </li>
                                    <li>
                                        && : 논리곱(AND)
                                        <ul>
                                            <li>두 값이 모두 true면 true로 판단</li>
                                            <li>두 값 중 하나만 false여도 false로 판단</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                논리 부정 연산자
                                <ul>
                                    <li>사실 관계를 반대로 표현</li>
                                    <li>
                                        ! : 부정(not)
                                        <ul>
                                            <li>오른쪽 피연산자와 반대의 사실을 반환</li>
                                            <li>false, truthy의 반대 값을 반환</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3>JS변수 선언</h3>
                <ul>
                    <li>아무것도 할당하지 않은 변수는 undefined가 자동으로 할당</li>
                    <li>
                        let
                        <ul>
                            <li>let은 블록 스코프를 가진다</li>
                            <li>코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효</li>
                            <li>초기화되지 않은 상태에서 호이스팅으로 접근하면 TDZ(Terminal Dead Zone) 오류</li>
                            <li>동일 스코프 내 같은 이름으로 재선언 불가</li>
                            <li>값 변경 가능</li>
                        </ul>
                    </li>
                    <li>
                        const
                        <ul>
                            <li>const는 블록 스코프를 가진다</li>
                            <li>코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효</li>
                            <li>초기화되지 않은 상태에서 호이스팅으로 접근하면 TDZ 오류</li>
                            <li>동일 스코프 내에서 같은 이름으로 재선언 불가</li>
                            <li>const는 상수로서 값을 한 번만 할당</li>
                            <li>객체나 배열같은 참조형 데이터 타입의 경우 내부 값 변경 가능</li>
                        </ul>
                    </li>
                    <li>
                        네이밍 규칙
                        <ul>
                            <li>식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야 한다</li>
                            <li>식별자는 특수문자를 제외한 문자, 숫자, 언더스코어, 달러 기호를 포함할 수 있다</li>
                            <li>예약어는 식별자로 사용할 수 없다</li>
                            <li>
                                예약어 : 프로그래밍 언어에서 사용되고 있거나 사용될 예정인 단어(let, const, true 등)
                            </li>
                        </ul>
                    </li>
                    <li>
                        네이밍 컨벤션
                        <ul>
                            <li>카멜케이스</li>
                            <li>첫 단어의 첫 문자는 소문자로 그 이후에 연결되는 단어의 첫 문자는 대문자로 작성</li>
                            <li>예 : lastName</li>
                        </ul>
                    </li>
                </ul>

                <h3>변수 활용</h3>
                <ul>
                    <li>변수에 숫자 타입이 할당되어 있는 경우 숫자 타입에 사용 가능한 모든 연산이 가능</li>
                    <li>연산 결과를 변수에 반영하려면 재할당 필요</li>
                    <li>변수끼리의 연산도 가능</li>
                </ul>
            </article>
            <article>
                <h3>함수 정의</h3>
                <ul>
                    <li>입력을 받아서 코드블록 내부의 코드를 실행한 후 함수의 실행 결과를 반환하는 일련의 과정 묶음
                        <ul>
                            <li>1. 함수 외부에서 특정한 입력값을 전달하여 호출</li>
                            <li>2. 함수 내부의 코드가 실행</li>
                            <li>3. 함수의 실행 결과는 함수 외부로 반환(Return)</li>
                        </ul>
                    </li>
                </ul>

                <h3>함수선언문과 함수표현식</h3>
                <ul>
                    <li>함수선언문
                        <ul>
                            <li>function 키워드 사용</li>
                            <li>키워드 다음으로 함수명을 지정</li>
                            <li>소괄호에서 함수 내부에 사용하는 매개변수를 사용</li>
                            <li>중괄호 안에 실행할 코드 블록을 넣어준다</li>
                        </ul>
                    </li>
                    <li>함수표현식
                        <ul>
                            <li>let 키워드를 사용해서 변수를 선언</li>
                            <li>함수를 할당하는 형태로 코드를 작성</li>
                            <li>함수에는 특별한 식별자를 지정할 필요가 없다</li>
                        </ul>
                    </li>
                    <li>함수 호출
                        <ul>
                            <li>함수를 정의할 때 지정한 함수명 뒤에 소괄호를 붙이면 함수를 호출할 수 있다</li>
                            <li>함수표현식은 선언한 변수명에 소괄호를 붙이면 된다</li>
                        </ul>
                    </li>
                </ul>

                <h3>매개변수와 전달인자</h3>
                <ul>
                    <li>매개변수
                        <ul>
                            <li>매개변수는 함수를 정의할 때 선언</li>
                            <li>함수 코드 블록 안에서 변수처럼 취급</li>
                            <li>함수를 정의할 때 소괄호 안에 매개변수 추가할 수 있다</li>
                            <li>여러 개의 매개변수를 사용할 수 있다</li>
                        </ul>
                    </li>
                    <li>전달인자
                        <ul>
                            <li>함수를 호출할 때 소괄호 안에 값을 넣는다</li>
                            <li>값을 넣음으로서 매개변수에 값을 할당</li>
                            <li>매개변수의 개수에 맞게 전달인자를 전달</li>
                            <li>매개변수보다 적은 전달인자가 전달되면 전달되지 않은 매개변수는 undefined로 초기화</li>
                        </ul>
                    </li>
                    <li>스코프
                        <ul>
                            <li>변수가 유효한 범위</li>
                            <li>매개변수는 함수 내부에서만 사용이 가능</li>
                            <li>함수 내부에서 선언한 변수도 함수 내부에서만 사용 가능</li>
                        </ul>
                    </li>
                </ul>

                <h3>return문</h3>
                <ul>
                    <li>return
                        <ul>
                            <li>함수의 실행결과를 외부로 반환</li>
                            <li>함수 내부의 코드가 차례대로 실행되다가 return문을 만나면 값을 반환한 후 함수는 종료</li>
                            <li>return문 뒤에 나오는 코드는 실행되지 않는다</li>
                            <li>return문에 작성된 코드를 실행한 후 결과를 함수 외부로 리턴</li>
                            <li>함수 외부에서 함수를 호출하면 함수 실행결과를 확인할 수 있다</li>
                            <li>함수 호출의 결과를 변수에 할당하는 것도 가능</li>
                            <li>함수의 호출 결과끼리의 연산도 가능</li>
                        </ul>
                    </li>
                </ul>
            </article>
            <article>
                <h3>함수 정의</h3>
                <ul>
                    <li>입력을 받아서 코드블록 내부의 코드를 실행한 후 함수의 실행 결과를 반환하는 일련의 과정 묶음
                        <ul>
                            <li>1. 함수 외부에서 특정한 입력값을 전달하여 호출</li>
                            <li>2. 함수 내부의 코드가 실행</li>
                            <li>3. 함수의 실행 결과는 함수 외부로 반환(Return)</li>
                        </ul>
                    </li>
                </ul>

                <h3>함수선언문과 함수표현식</h3>
                <ul>
                    <li>함수선언문
                        <ul>
                            <li>function 키워드 사용</li>
                            <li>키워드 다음으로 함수명을 지정</li>
                            <li>소괄호에서 함수 내부에 사용하는 매개변수를 사용</li>
                            <li>중괄호 안에 실행할 코드 블록을 넣어준다</li>
                        </ul>
                    </li>
                    <li>함수표현식
                        <ul>
                            <li>let 키워드를 사용해서 변수를 선언</li>
                            <li>함수를 할당하는 형태로 코드를 작성</li>
                            <li>함수에는 특별한 식별자를 지정할 필요가 없다</li>
                        </ul>
                    </li>
                    <li>함수 호출
                        <ul>
                            <li>함수를 정의할 때 지정한 함수명 뒤에 소괄호를 붙이면 함수를 호출할 수 있다</li>
                            <li>함수표현식은 선언한 변수명에 소괄호를 붙이면 된다</li>
                        </ul>
                    </li>
                </ul>

                <h3>매개변수와 전달인자</h3>
                <ul>
                    <li>매개변수
                        <ul>
                            <li>매개변수는 함수를 정의할 때 선언</li>
                            <li>함수 코드 블록 안에서 변수처럼 취급</li>
                            <li>함수를 정의할 때 소괄호 안에 매개변수 추가할 수 있다</li>
                            <li>여러 개의 매개변수를 사용할 수 있다</li>
                        </ul>
                    </li>
                    <li>전달인자
                        <ul>
                            <li>함수를 호출할 때 소괄호 안에 값을 넣는다</li>
                            <li>값을 넣음으로서 매개변수에 값을 할당</li>
                            <li>매개변수의 개수에 맞게 전달인자를 전달</li>
                            <li>매개변수보다 적은 전달인자가 전달되면 전달되지 않은 매개변수는 undefined로 초기화</li>
                        </ul>
                    </li>
                    <li>스코프
                        <ul>
                            <li>변수가 유효한 범위</li>
                            <li>매개변수는 함수 내부에서만 사용이 가능</li>
                            <li>함수 내부에서 선언한 변수도 함수 내부에서만 사용 가능</li>
                        </ul>
                    </li>
                </ul>

                <h3>return문</h3>
                <ul>
                    <li>return
                        <ul>
                            <li>함수의 실행결과를 외부로 반환</li>
                            <li>함수 내부의 코드가 차례대로 실행되다가 return문을 만나면 값을 반환한 후 함수는 종료</li>
                            <li>return문 뒤에 나오는 코드는 실행되지 않는다</li>
                            <li>return문에 작성된 코드를 실행한 후 결과를 함수 외부로 리턴</li>
                            <li>함수 외부에서 함수를 호출하면 함수 실행결과를 확인할 수 있다</li>
                            <li>함수 호출의 결과를 변수에 할당하는 것도 가능</li>
                            <li>함수의 호출 결과끼리의 연산도 가능</li>
                        </ul>
                    </li>
                </ul>
            </article>
            <article>
                <h3>함수 정의</h3>
                <ul>
                    <li>입력을 받아서 코드블록 내부의 코드를 실행한 후 함수의 실행 결과를 반환하는 일련의 과정 묶음
                        <ul>
                            <li>1. 함수 외부에서 특정한 입력값을 전달하여 호출</li>
                            <li>2. 함수 내부의 코드가 실행</li>
                            <li>3. 함수의 실행 결과는 함수 외부로 반환(Return)</li>
                        </ul>
                    </li>
                </ul>

                <h3>함수선언문과 함수표현식</h3>
                <ul>
                    <li>함수선언문
                        <ul>
                            <li>function 키워드 사용</li>
                            <li>키워드 다음으로 함수명을 지정</li>
                            <li>소괄호에서 함수 내부에 사용하는 매개변수를 사용</li>
                            <li>중괄호 안에 실행할 코드 블록을 넣어준다</li>
                        </ul>
                    </li>
                    <li>함수표현식
                        <ul>
                            <li>let 키워드를 사용해서 변수를 선언</li>
                            <li>함수를 할당하는 형태로 코드를 작성</li>
                            <li>함수에는 특별한 식별자를 지정할 필요가 없다</li>
                        </ul>
                    </li>
                    <li>함수 호출
                        <ul>
                            <li>함수를 정의할 때 지정한 함수명 뒤에 소괄호를 붙이면 함수를 호출할 수 있다</li>
                            <li>함수표현식은 선언한 변수명에 소괄호를 붙이면 된다</li>
                        </ul>
                    </li>
                </ul>

                <h3>매개변수와 전달인자</h3>
                <ul>
                    <li>매개변수
                        <ul>
                            <li>매개변수는 함수를 정의할 때 선언</li>
                            <li>함수 코드 블록 안에서 변수처럼 취급</li>
                            <li>함수를 정의할 때 소괄호 안에 매개변수 추가할 수 있다</li>
                            <li>여러 개의 매개변수를 사용할 수 있다</li>
                        </ul>
                    </li>
                    <li>전달인자
                        <ul>
                            <li>함수를 호출할 때 소괄호 안에 값을 넣는다</li>
                            <li>값을 넣음으로서 매개변수에 값을 할당</li>
                            <li>매개변수의 개수에 맞게 전달인자를 전달</li>
                            <li>매개변수보다 적은 전달인자가 전달되면 전달되지 않은 매개변수는 undefined로 초기화</li>
                        </ul>
                    </li>
                    <li>스코프
                        <ul>
                            <li>변수가 유효한 범위</li>
                            <li>매개변수는 함수 내부에서만 사용이 가능</li>
                            <li>함수 내부에서 선언한 변수도 함수 내부에서만 사용 가능</li>
                        </ul>
                    </li>
                </ul>

                <h3>return문</h3>
                <ul>
                    <li>return
                        <ul>
                            <li>함수의 실행결과를 외부로 반환</li>
                            <li>함수 내부의 코드가 차례대로 실행되다가 return문을 만나면 값을 반환한 후 함수는 종료</li>
                            <li>return문 뒤에 나오는 코드는 실행되지 않는다</li>
                            <li>return문에 작성된 코드를 실행한 후 결과를 함수 외부로 리턴</li>
                            <li>함수 외부에서 함수를 호출하면 함수 실행결과를 확인할 수 있다</li>
                            <li>함수 호출의 결과를 변수에 할당하는 것도 가능</li>
                            <li>함수의 호출 결과끼리의 연산도 가능</li>
                        </ul>
                    </li>
                </ul>
            </article>


        </div>
    );
};

export default TIL20250214;
