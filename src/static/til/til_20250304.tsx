import React from 'react';

const TIL20250304: React.FC = () => {
    return (
        <article>
            <h2>20250304 TIL</h2>

            <h3>State</h3>
            <ul>
                <li>컴포넌트 내에서 변경될 수 있는 데이터</li>
                <li>컴포넌트 상태가 변경되면 자동으로 리렌더링이 발생</li>
                <li>컴포넌트 내에서 변할 수 있는 상태는 React state로 다뤄야 한다</li>
            </ul>

            <h3>State 특징</h3>
            <ul>
                <li>컴포넌트 내부에서 관리된다(Private)</li>
                <li>변경될 수 있는 동적인 데이터(Mutable)</li>
                <li>useState 등을 사용하여 관리</li>
                <li>값이 변경되면 해당 컴포넌트와 하위 컴포넌트가 리렌더링 된다</li>
            </ul>

            <h3>State hook, useState</h3>
            <ul>
                <li>
                    useState란 React에서 State를 관리하기 위한 훅(Hook)이다
                    <ul>
                        <li>Hook : 함수형 컴포넌트에서 상태관리, 생명주기 메서드, 기타 React 기능을 사용할 수 있게 해주는 함수</li>
                    </ul>
                </li>
                <li>
                    import 키워드로 useState를 불러와야 사용할 수 있다
                    <ul>
                        <li><code>import &#123; useState &#125; from 'react';</code></li>
                    </ul>
                </li>
                <li>이후 useState를 컴포넌트 안에서 호출해준다</li>
                <li>useState를 호출한다는 것은 state라는 변수를 선언하는 것과 같으며 이 변수의 이름은 아무 이름으로 지어도 된다</li>
                <li>일반적인 변수는 함수가 끝날 때 사라지지만 state 변수는 React에 의해 함수가 끝나도 사라지지 않는다</li>
                <li>useState를 호출하면 배열을 반환하는데 배열의 0번째 요소는 현재 state의 변수이고 1번째 요소는 이 변수를 갱신할 수 있는 함수이다</li>
                <li>useState의 인자로 넘겨주는 값은 state 초깃값이다
                    <ul>
                        <li>const [isChecked, setIsChecked] = useState(false);</li>
                        <li>isChecked : state를 저장하는 변수</li>
                        <li>setIsChecked : state isChecked를 변경하는 함수</li>
                        <li>useState : state hook</li>
                        <li>false : state 초깃값</li>
                    </ul>
                </li>
                <li>이 state 변수에 저장된 값을 사용하려면 JSX 엘리먼트 안에 직접 불러서 사용하면 된다</li>
                <li>
                    isChecked가 boolean 값을 가지기 때문에 true or false 여부에 따라 다른 결과가 보이도록 삼항연산자를 사용한다
                    <ul>
                        <li><span>{'isChecked가 true이면 "Checked!!", false이면 "Unchecked"로 나타낸다'}</span></li>
                    </ul>
                </li>
                <li>state를 갱신하려면 state 변수를 갱신할 수 있는 함수인 setIsChecked를 호출한다</li>
                <li>React 컴포넌트는 state가 변경되면 새롭게 호출되로 리렌더링된다</li>
                <li>React state는 상태 변경 함수 호출로 변경해야 한다</li>
                <li>강제로 변경을 시도하면 안된다</li>
            </ul>

            <h3>Props</h3>
            <ul>
                <li>컴포넌트의 속성을 의미한다</li>
                <li>변하지 않는 외부로부터 전달받은 값으로 웹 애플리케이션에서 해당 컴포넌트가 가진 속성에 해당한다</li>
                <li>부모 컴포넌트로부터 전달받은 값이다</li>
                <li>React 컴포넌트는 JS 함수나 클래스로 props를 함수의 전달인자처럼 전달받아 이를 기반으로 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다</li>
                <li>컴포넌트가 최초 렌더링될 때 화면에 출력하고자 하는 데이터를 담은 초깃값으로 사용할 수 있다</li>
                <li>객체 형태이다</li>
                <li>외부로부터 전달받아 변하지 않는 값이다. 그래서 함부로 변경할 수 없는 읽기 전용 객체이다</li>
                <li>읽기 전용 객체가 아니라면 props를 전달받은 하위 컴포넌트 내에서 props를 직접 수정 시 props를 전달한 상위 컴포넌트의 값에 영향을 미칠 수 있게 된다</li>
            </ul>

            <h3>Event</h3>
            <ul>
                <li>React의 이벤트 방식은 DOM의 이벤트 처리 방식과 유사하다</li>
                <li>React에서 이벤트는 소문자 대신 카멜 케이스를 사용한다</li>
                <li>JSX를 사용한 문자열이 아닌 함수로 이벤트 처리 함수를 전달한다
                    <ul>
                        <li>예시: <span>버튼 클릭 시 handleEvent 함수 호출</span></li>
                    </ul>
                </li>
            </ul>
        </article>
    );
};

export default TIL20250304;
