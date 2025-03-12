import React from 'react';

const TIL20250306: React.FC = () => {
    return (
        <article>
            <h2>20250306 TIL</h2>

            <h3>State 끌어올리기</h3>
            <ul>
                <li>데이터의 흐름이 단방향으로 흘러가는데 부모의 상태를 변경할 수 있는 키워드</li>
                <li>상태를 변경시키는 함수(handler)를 하위 컴포넌트에 props로 전달해서 해결할 수 있다</li>
            </ul>

            <h3>Side Effect</h3>
            <ul>
                <li>함수 내에서 어떤 구현이 함수 외부에 영향을 끼치는 경우 해당 함수는 Side Effect가 있다고 말한다</li>
                <li>React에서는 컴포넌트 내에서 fetch를 사용해 API 정보를 가져오거나 이벤트를 활용해 DOM을 직접 조작할 때 Side Effect가 발생했다고 말한다(예를 들어 전역변수를 다른 함수가 수정하는 경우)</li>
            </ul>

            <h3>Pure Function</h3>
            <ul>
                <li>순수 함수란 오직 함수의 입력만이 함수의 결과에 영향을 주는 함수를 의미한다</li>
                <li>함수의 입력이 아닌 다른 값이 함수의 결과에 영향을 미치는 경우 순수함수라고 부를 수 없다</li>
                <li>순수 함수는 입력으로 전달된 값을 수정하지 않는다</li>
                <li>순수 함수에는 네트워크 요청과 같은 Side Effect가 없다</li>
                <li>순수 함수의 특징 중 하나는 어떠한 전달 인자가 주어진 경우 항상 똑같은 값이 리턴됨을 보장한다</li>
            </ul>

            <h3>React의 함수 컴포넌트</h3>
            <ul>
                <li>React의 함수 컴포넌트는 props가 입력으로, JSX Element가 출력으로 나가며 여기에는 그 어떤 Side Effect도 없으며 순수 함수로 작동한다</li>
                <li>React 애플리케이션을 작성할 때에는 AJAX 요청이 필요하거나 LocalStorage 또는 타이머와 같은 React와 상관없는 API를 사용하는 경우가 발생할 수 있다</li>
                <li>이는 React 입장에서 전부 Side Effect이며 React는 Side Effect를 다루기 위한 Hook인 Effect Hook을 제공한다</li>
            </ul>

            <h3>React 컴포넌트에서의 Side Effect</h3>
            <ul>
                <li>타이머 사용 (setTimeout)</li>
                <li>데이터 가져오기(fetch API, localStorage)</li>
            </ul>

            <h3>Effect Hook</h3>
            <ul>
                <li>useEffect는 함수형 컴포넌트에서 Side Effect(부수 효과)를 실행할 수 있게 해주는 Hook이다</li>
                <li>Side Effect란 컴포넌트의 렌더링 결과에 영향을 미치는 외부 작업을 의미한다</li>
                <li>데이터 fetching, DOM 조작, 구독 설정등이 있다</li>
                <li>Hook이란 React useState처럼 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 함수이다</li>
            </ul>

            <h3>useEffect 예시</h3>
            <ul>
                <li><strong>useEffect(함수, [의존성 배열]);</strong></li>
                <ol>
                    <li>
                        첫 번째 인자(함수)
                        <ul>
                            <li>Side Effect를 실행하는 함수</li>
                            <li>이 함수는 컴포넌트가 렌더링된 후 실행된다</li>
                            <li>함수 내에서 반환하는 값은 정리(clean-up) 함수로, 컴포넌트가 언마운트되거나 다음 렌더링 전에 실행된다</li>
                        </ul>
                    </li>
                    <li>
                        두 번째 인자(의존성 배열)
                        <ul>
                            <li>이 배열에 포함된 값이 변경될 때만 Effect가 실행</li>
                            <li>배열이 비어있으면 [], Effect는 컴포넌트가 마운트될 때 한번만 실행되고 언마운트될 때 정리함수가 실행된다</li>
                            <li>배열을 생략하면 Effect는 매 렌더링마다 실행된다</li>
                        </ul>
                    </li>
                </ol>
                <li>useEffect 첫번째 인자만 있을 때</li>
                <ol>
                    <li>컴포넌트 생성 후 처음 화면에 렌더링(표시)</li>
                    <li>컴포넌트에 새로운 props가 전달되며 렌더링</li>
                    <li>컴포넌트 상태(state)가 바뀌며 렌더링</li>
                    <li>이와 같이 매번 새롭게 컴포넌트가 렌더링 될 때 Effect Hook이 실행된다</li>
                </ol>
            </ul>

            <h3>Hook 사용 시 주의할 점</h3>
            <ul>
                <li>최상위에서만 Hook을 호출한다</li>
                <li>React 함수 내에서 Hook을 호출한다</li>
            </ul>

            <h3>조건부 effect 발생</h3>
            <ul>
                <li>useEffect의 두 번째 인자는 배열이다</li>
                <li>이 배열은 조건을 담고 있고 여기서 조건은 boolean 형태의 표현식이 아닌 어떤 값의 변경이 일어날 때를 의미한다</li>
                <li>따라서 해당 배열엔 어떤 값의 목록이 들어가고 이 배열을 특별히 종속성 배열이라고 부른다</li>
                <li>종속성 배열에는 filter만 존재하고 count는 존재하지 않기 때문이다</li>
            </ul>

            <h3>단 한 번만 실행되는 Effect 함수</h3>
            <ul>
                <li>두 번째 인자에 빈 배열로 둘 경우 컴포넌트가 처음 생성될 때만 effect 함수가 실행된다</li>
                <li>두 번째 인자에 아무것도 넣지 않은 경우 위의 첫 번째 인자만 있을 때의 경우다</li>
                <li>외부 API를 통해 리소스를 받아오고 더 이상 API 호출이 필요하지 않을 때에 사용할 수 있다</li>
            </ul>

            <h3>목록 내 필터링 구현</h3>
            <ul>
                <li><strong>컴포넌트 내에서 필터링:</strong> 전체 목록의 데이터를 불러오고 목록을 검색어로 filter 하는 방법
                    <ul>
                        <li>HTTP 요청의 빈도를 줄일 수 있다</li>
                        <li>브라우저의 메모리상에 많은 데이터를 갖게 되므로, 클라이언트의 부담이 늘어난다</li>
                    </ul>
                </li>
                <li><strong>컴포넌트 외부에서 필터링:</strong> 컴포넌트 외부로 API 요청을 할 때 필터링한 결과를 받아오는 방법(보통 서버에 매번 검색어와 함께 요청하는 경우가 이에 해당한다)
                    <ul>
                        <li>클라이언트가 필터링 구현을 생각하지 않아도 된다</li>
                        <li>빈번한 HTTP 요청이 일어나게 되며 서버가 필터링을 처리하므로 서버가 부담을 가져간다</li>
                    </ul>
                </li>
            </ul>

            <h3>AJAX 요청</h3>
            <ul>
                <li>fetch API를 사용해서 서버에 요청할 수 있다</li>
                <li>외부 API 접속이 느릴 경우를 고려하여 로딩 화면 구현은 필수적이다(loading indicator)</li>
                <li>loading indicator도 상태 처리가 필요하다</li>
            </ul>

            <h3>기타 내용</h3>
            <ul>
                <li><strong>await:</strong> 비동기 작업이 완료될 때까지 기다려준다(promise 반환)</li>
                <li><strong>fetch:</strong> 서버로 HTTP 요청을 보낸다 이때 fetch는 promise를 반환하고 비동기적으로 처리된다</li>
                <li><strong>.then():</strong> fetch 요청 결과가 완료된 후 호출 () 안에 서버로부터 받은 객체가 있다</li>
                <li><strong>.json():</strong> JSON 형태로 파싱한다 객체를 읽어 JS 객체로 변환하는 과정이며 비동기적인 메서드로 promise를 반환한다</li>
                <li><strong>filter():</strong> 사용하면 각 항목에 대해 콜백 함수를 실행하므로 반환할 값이 있어야 한다</li>
            </ul>
        </article>
    );
};

export default TIL20250306;
