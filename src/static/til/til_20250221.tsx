import React from 'react';

const TIL20250221: React.FC = () => {
    return (
        <div>
            <h2>20250221 TIL</h2>

            <article>
                <h3>DOM</h3>
                <ul>
                    <li>Document Object Model의 약자</li>
                    <li>HTML 요소를 Object처럼 조작할 수 있는 모델</li>
                    <li>DOM 구조를 조회할 때에는 <code>console.dir</code>이 유용하다</li>
                    <li>JS에서 DOM은 <code>document</code> 객체에 구현되어 있다</li>
                    <li><code>console.dir(document.body)</code>를 통해 출력된 객체에서 <code>children</code> 속성으로 자식 요소를 확인할 수 있다</li>
                    <li>왠만하면 <code>script</code> 태그는 <code>body</code> 끝에 넣는게 안정적이다 → <code>body</code></li>
                    <li>초기설정, 전역 구성, 외부 라이브러리를 사용할 때 → <code>head</code></li>
                </ul>

                <h3>CRUD</h3>
                <ul>
                    <li>Create, Read, Update and Delete</li>
                    <li>새로운 데이터를 추가, 저장, 수정, 삭제하는 작업</li>
                    <li>db와 웹 애플리케이션에서 가장 기본적인 작업을 나타내는 약어</li>
                    <li>CRUD는 HTTP 메서드와 밀접한 관련이 있다</li>
                    <ul>
                        <li>Create : POST 새로운 리소스를 생성</li>
                        <li>Read : GET 리소스를 조회</li>
                        <li>Update : PUT/PATCH 기존 리소스를 수정</li>
                        <li>Delete : DELETE 리소스를 삭제</li>
                    </ul>
                </ul>
            </article>

            <article>
                <h3>document 활용</h3>
                <ul>
                    <li><code>document.createElement()</code> : () 안의 요소를 만든다 (‘div’)</li>
                    <li><code>document.body.append()</code> : body 태그 안에 요소()를 추가한다
                        <ul>
                            <li>append는 여러 개의 노드를 한 번에 추가할 수 있으며 텍스트도 직접 추가할 수 있다</li>
                        </ul>
                    </li>
                    <li><code>parentNode.appendChild(childNode)</code> : body 태그 안에 하나의 요소를 추가할 수 있다
                        <ul>
                            <li>텍스트 노드를 추가하려면 텍스트를 감싸는 <code>document.createTextNode()</code>를 사용해야 한다</li>
                        </ul>
                    </li>
                    <li><code>document.body.innerHTML</code> : body 태그에 HTML 문자열을 삽입하는 속성이다
                        <ul>
                            <li>기존의 자식 노드를 덮어쓰는 문제가 발생할 수 있다</li>
                        </ul>
                    </li>
                    <li><code>document.querySelector()</code> : 선택된 첫 번째 요소를 반환한다
                        <ul>
                            <li>첫 번째 요소만 반환한다</li>
                            <li>요소 선택이 다양하다(id, class, 태그, 자식/후손, 속성값, 가상클래스, 결합자 사용)</li>
                        </ul>
                    </li>
                    <li><code>document.querySelectorAll()</code> : 매칭되는 모든 요소를 NodeList 형태로 반환한다</li>
                    <li><code>getElementById()</code> : ID를 가진 단일 요소를 선택하는 데 사용된다
                        <ul>
                            <li>ID만 가능하여 그 결과 성능이 매우 빠르다</li>
                        </ul>
                    </li>
                    <li><code>element.setAttribute(attributeName, value)</code> : 특정 HTML 요소의 속성을 설정하거나 변경하는데 사용되는 메서드이며 HTML에 속성을 동적으로 설정할 수 있다
                        <ul>
                            <li><code>attributeName</code> : 설정하려는 속성의 이름</li>
                            <li><code>value</code> : 해당 속성의 새로운 값</li>
                        </ul>
                    </li>
                    <li><code>classList</code>는 클래스의 목록을 읽거나 수정할 수 있다
                        <ul>
                            <li><code>add()</code> : 요소에 하나 이상의 클래스를 추가한다. 클래스가 이미 존재하면 중복해서 추가하지 않는다</li>
                            <li><code>remove()</code> : 요소에서 하나 이상의 클래스를 제거한다. 지정된 클래스가 없으면 아무 일도 일어나지 않는다</li>
                        </ul>
                    </li>
                    <li><code>innerHTML</code>을 이용하면 자식 요소를 지울 때 편리하지만 보안에서 몇 가지 문제를 가지고 있다</li>
                    <li><code>remove()</code>로 삭제할 수 있다</li>
                    <li><code>removeChild()</code> : 자식 요소를 지정해서 삭제하는 메서드이다</li>
                </ul>
            </article>

            <article>
                <h3>property</h3>
                <ul>
                    <li>HTML 속성을 객체의 프로퍼티로 설정하거나 수정하는 방식</li>
                    <li><code>element.property</code>는 해당 HTML 요소의 속성을 다루는 JS 프로퍼티이다</li>
                    <li><code>element.className</code> : class 속성을 변경</li>
                    <li><code>element.id</code> : id를 변경</li>
                    <li>input, textarea, select와 같은 폼 요소에서 <code>value</code> 프로퍼티를 사용해 값을 읽고 쓸 수 있다</li>
                    <li>체크박스나 라디오버튼의 <code>checked</code> 속성은 <code>checked</code> 프로퍼티로 다룰 수 있다</li>
                    <li><code>style</code> 프로퍼티로 인라인 스타일을 설정할 수 있다</li>
                    <li><code>data-*</code> 속성은 <code>dataset</code> 프로퍼티로 다룰 수 있다</li>
                </ul>

                <h3>setAttribute와 property의 차이</h3>
                <ul>
                    <li>input 요소에서 <code>value</code> 속성을 직접 수정하면 DOM의 <code>value</code> 프로퍼티 값이 자동으로 업데이트되지만,
                        <code>setAttribute</code>로 수정하면 DOM 프로퍼티 값은 자동으로 업데이트되지 않는다
                    </li>
                </ul>
            </article>

            <article>
                <h3>onkeyup</h3>
                <ul>
                    <li><code>onkeyup</code>은 속성으로 설정되며 해당 요소가 발생할 이벤트와 관련된 핸들러를 설정한다.</li>
                    <li>이벤트가 발생하면 지정된 함수가 실행된다.</li>
                    <li><code>event</code> : 이벤트 객체로서 이벤트가 발생했을 때 세부정보가 들어있는 객체</li>
                    <li><code>event.target</code> : 이벤트를 캐치하는 역할</li>
                </ul>

                <h3>addEventListener</h3>
                <ul>
                    <li>JS에서 동적으로 이벤트 리스너를 추가하는 방법</li>
                    <li>한 요소에 여러 개의 이벤트 리스너를 추가할 수 있다.</li>
                    <li>이벤트 등록과 처리를 분리하므로 더 유연하고 모듈화된 코드를 작성할 수 있다.</li>
                </ul>

                <h3>이벤트의 종류</h3>
                <h4>Mouse Events (마우스 이벤트)</h4>
                <ul>
                    <li><code>click</code>: 마우스를 클릭했을 때 발생</li>
                    <li><code>dblclick</code>: 마우스를 더블 클릭했을 때 발생</li>
                    <li><code>mouseenter</code>: 마우스가 요소 위로 들어갔을 때 발생</li>
                    <li><code>mouseleave</code>: 마우스가 요소 밖으로 나갔을 때 발생</li>
                    <li><code>mousemove</code>: 마우스가 움직일 때 발생</li>
                    <li><code>mousedown</code>: 마우스 버튼을 눌렀을 때 발생</li>
                    <li><code>mouseup</code>: 마우스 버튼을 뗐을 때 발생</li>
                </ul>

                <h4>Keyboard Events (키보드 이벤트)</h4>
                <ul>
                    <li><code>keydown</code>: 키가 눌렸을 때 발생</li>
                    <li><code>keyup</code>: 키에서 손을 뗐을 때 발생</li>
                    <li><code>keypress</code>: 키가 눌렸을 때 발생(문자 입력에 주로 사용됨)</li>
                </ul>

                <h4>Form Events (폼 이벤트)</h4>
                <ul>
                    <li><code>submit</code>: 폼을 제출할 때 발생</li>
                    <li><code>input</code>: 폼 입력이 변경될 때 발생</li>
                    <li><code>change</code>: 입력 값이 변경되었을 때 발생</li>
                    <li><code>focus</code>: 입력 요소에 포커스가 맞춰졌을 때 발생</li>
                    <li><code>blur</code>: 입력 요소에서 포커스가 벗어났을 때 발생</li>
                </ul>

                <h4>Window Events (창 관련 이벤트)</h4>
                <ul>
                    <li><code>load</code>: 페이지가 모두 로드되었을 때 발생</li>
                    <li><code>resize</code>: 창의 크기가 변경될 때 발생</li>
                    <li><code>scroll</code>: 스크롤이 이동할 때 발생</li>
                </ul>

                <h4>Touch Events (터치 이벤트)</h4>
                <ul>
                    <li><code>touchstart</code>: 화면을 터치했을 때 발생</li>
                    <li><code>touchend</code>: 터치가 끝났을 때 발생</li>
                    <li><code>touchmove</code>: 터치한 손가락이 이동할 때 발생</li>
                </ul>
            </article>
        </div>
    );
};

export default TIL20250221;
