const TIL20250226: React.FC = () => {
    return (
        <div>
            <h2>20250226 TIL</h2>
            <article>
                <h3>비동기</h3>
                <ul>
                    <li>시작 시점과 완료 시점이 같은 상황을 동기적이라고 한다</li>
                    <li>백그라운드 실행, 로딩 창 등의 작업에 효율적이다</li>
                    <li>인터넷에서 서버로 요청을 보내고 응답을 기다리는 작업에 효율적이다</li>
                    <li>큰 용량의 파일을 로딩하는 작업에 효율적이다</li>
                    <li>Node.js는 논블로킹하고 비동기적으로 작동하는 런타임이다</li>
                    <li>비동기 코드는 코드가 작성된 순서대로 작동되는 것이 아니라 동작이 완료되는 순서대로 작동하게 된다</li>
                    <li>callBack 함수를 통해 비동기 코드의 순서를 제어할 수 있다</li>
                    <li>callback 함수를 많이 사용하면 복잡해지고 가독성이 낮아지는 callback Hell이 발생하는 단점이 있다</li>
                </ul>

                <h3>동기</h3>
                <ul>
                    <li>JS에서 동기 처리란 특정 코드의 실행이 완료될 때까지 기다리고 난 후 다음 코드를 수행하는 것을 말한다</li>
                </ul>

                <h3>타이머 관련 API</h3>
                <ul>
                    <li><strong>setTimeout(callback, millisecond)</strong>
                        <ul>
                            <li>일정 시간 후에 함수를 실행한다</li>
                            <li>매개변수 : 실행할 콜백 함수, 콜백 함수 실행 전 기다려야 할 시간(밀리초)</li>
                            <li>return값 : 임의의 타이머 ID</li>
                        </ul>
                    </li>
                    <li><strong>clearTimeout(timerId)</strong>
                        <ul>
                            <li>setTimeout 타이머를 종료</li>
                            <li>매개변수 : 타이머ID</li>
                            <li>리턴값 : 없음</li>
                        </ul>
                    </li>
                    <li><strong>setInterval(callback, millisecond)</strong>
                        <ul>
                            <li>일정 시간의 간격을 가지고 함수를 반복적으로 실행</li>
                            <li>매개변수 : 실행할 콜백함수, 반복적으로 함수를 실행시키기 위한 시간 간격(밀리초)</li>
                            <li>리턴값 : 임의의 타이머 ID</li>
                        </ul>
                    </li>
                    <li><strong>clearInterval(timerId)</strong>
                        <ul>
                            <li>setInterval 타이머를 종료</li>
                            <li>매개변수 : 타이머ID</li>
                            <li>리턴값 : 없음</li>
                        </ul>
                    </li>
                </ul>

                <h3>Promise</h3>
                <ul>
                    <li>Promise는 class이기 때문에 new 키워드를 통해 Promise 객체를 생성</li>
                    <li>Promise는 비동기 처리를 수행할 콜백함수(executor)를 인수로 전달받는다</li>
                    <li>이 콜백함수는 resolve, reject 함수를 인수로 전달받는다</li>
                    <li>Promise 객체가 생성되면 executor는 자동으로 실행되고 작성했던 코드들이 작동된다</li>
                    <li>코드가 정상적으로 처리되었다면 resolve 함수를 호출하고 에러나 발생했을 시 reject 함수를 호출하면 된다</li>
                    <li>Promise 객체는 state, result 내부 프로퍼티를 가진다</li>
                    <li>하지만 직접 접근할 수 없고 .then, .catch, .finally의 메서드를 사용해야 접근이 가능하다</li>
                    <li>Promise를 인스턴스 객체로 사용할 때에 resolve, reject 메소드를 사용하기 때문에 이들의 위치와 명칭을 밖면 안된다 (resolve, reject)</li>
                    <li>reject(error) 앞에 return을 붙여주는 이유는 Promise의 상태 변경을 명확히 하고, 이후의 코드 실행을 방지하기 위함이다</li>
                </ul>

                <h3>State</h3>
                <ul>
                    <li>기본 상태는 pending(대기)이다</li>
                    <li>비동기 처리를 수행할 콜백함수(executor)가 성공적으로 작동했다면 fulfiled(이행)으로 변경</li>
                    <li>에러가 발생한다면 rejected(거부)가 된다</li>
                </ul>

                <h3>Then</h3>
                <ul>
                    <li>executor에 작성했던 코드들이 정상적으로 처리되었다면 resolve 함수를 호출하고 .then 메서드로 접근할 수 있다</li>
                    <li>또한 then 안에서 리턴한 값이 Promise면 Promise의 내부 프로퍼티 result를 다음 .then의 콜백 함수의 인자로 받아오고 Promise가 아니라면 리턴한 값을 .then의
                        콜백함수 인자로 받아올 수 있다</li>
                </ul>

                <h3>Catch</h3>
                <ul>
                    <li>executor에 작성했던 코드들이 에러가 발생했을 경우 reject 함수를 호출하고 .catch 메서드로 접근할 수 있다</li>
                </ul>

                <h3>Finally</h3>
                <ul>
                    <li>executor에 작성했던 코드들의 정상 처리 여부와 상관없이 .finally 메서드로 접근할 수 있다</li>
                </ul>

                <h3>Promise chaining</h3>
                <ul>
                    <li>Promise chaining가 필요한 경우에는 비동기 작업을 순차적으로 진행해야 하는 경우이다</li>
                    <li>Promise chaining이 가능한 이유는 .then, .catch, .finally의 메서드들은 Promise를 리턴하기 때문이다</li>
                    <li>따라서 .then을 통해 연결할 수 있고 에러가 발생할 경우 .catch로 처리하면 된다</li>
                </ul>

                <h3>Promise.all</h3>
                <ul>
                    <li>Promise.all()은 여러 개의 비동기 작업을 동시에 처리하고 싶을 때 사용한다</li>
                    <li>인자로는 배열을 받고 해당 배열에 있는 모든 Promise에서 executor 내 작성했던 코드들이 정상적으로 처리되었다면 결과를 배열에 저장해 새로운 Promise를 반환해준다</li>
                    <li>Promise chaining은 코드들이 순차적으로 동작되고 같은 코드가 중복되는 현상이 발생하는데 Promise.all은 비동기 작업을 동시에 처리하고 코드가 간결하다</li>
                    <li>Promise.all은 인자로 받는 배열에 있는 Promise 중 하나라도 에러가 발생하게 되면 나머지 Promise의 state와 상관없이 즉시 종료된다</li>
                </ul>

                <h3>Async/Await</h3>
                <ul>
                    <li>JS는 ES8에서 async / await 키워드를 제공한다</li>
                    <li>이를 통해 복잡한 Promise 코드를 간결하게 작성할 수 있게 되었다</li>
                    <li>함수 앞에 async 키워드를 사용하고 async 함수 내에서만 await 키워드를 사용하면 된다</li>
                    <li>이렇게 작성된 코드는 await 키워드가 작성된 코드가 동작하고 나서야 다음 순서의 코드가 동작하게 된다</li>
                </ul>
            </article>

            <article>
                <h3>Node.js</h3>
                <ul>
                    <li>Node.js는 JavaScript를 사용하여 서버 사이드 애플리케이션을 개발할 수 있게 해주는 런타임 환경이다</li>
                    <li>모듈은 어떤 기능을 조립할 수 있는 형태로 만든 부분이다</li>
                    <li>fs(File System) 모듈은 PC의 파일을 읽거나 저장하는 등의 일을 할 수 있게 도와준다</li>
                </ul>

                <h3>Node.js 내장 모듈을 사용하는 방법</h3>
                <ul>
                    <li>Node.js v18.20.6 Documentation 여기서 내장 모듈 목록을 찾을 수 있다</li>
                    <li>개발자는 자신이 이해하는 범위만큼 모듈을 사용할 수 있다</li>
                    <li>DNS에 대한 지식을 알고 있다면 DNS 모듈 사용법 문서에서 관련 메서드를 사용할 수 있다</li>
                    <li>파일을 읽을 때에는 readFile이라는 메서드가 적합하다</li>
                    <li>파일을 저장할 때에는 writeFile을 쓰면 된다</li>
                    <li>모든 모듈을 모듈을 사용하기 위해 불러오는 과정이 필요하다</li>
                    <li>브라우저에서 다른 파일을 불러올 때에는 <code>&lt;script&gt;</code>태그를 이용한다</li>
                    <li>Node.js는 JS 코드 상단에 require 구문을 이용하여 다른 파일을 불러온다</li>
                    <li>Node.js 공식 문서 가이드를 활용한다</li>
                </ul>

                <h3>3rd-party 모듈을 사용하는 방법</h3>
                <ul>
                    <li>서드 파티 모듈은 해당 프로그래밍 언어에서 공식적으로 제공하는 빌트인 모듈(built-in module)이 아닌 모든 외부 모듈을 일컫는다</li>
                    <li>예를 들어 Node.js에서 underscore는 Node.js 공식 문서에 없는 모듈이기 때문에 서드 파티 모듈이다</li>
                    <li>이런 서드 파티 모듈을 다운로드하기 위해서는 npm을 사용해야 한다</li>
                    <li>터미널에서 다음과 같이 입력해 underscore를 설치할 수 있다 (npm install underscore)</li>
                    <li>node_modules에 설치가 되면 내장 모듈을 사용하듯 require 구문을 통해 underscore를 사용할 수 있다</li>
                    <li><code>const _ = require('underscore');</code></li>
                </ul>
            </article>
        </div>
    );
};

export default TIL20250226;
