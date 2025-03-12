import React from 'react';

const TIL20250305: React.FC = () => (
    <article>
        <h2>20250305 TIL</h2>

        <h3>클라이언트-서버 아키텍처</h3>
        <ul>
            <li>리소스가 존재하는 곳과 리소스를 사용하는 앱을 분리시킨 것을 말한다</li>
        </ul>

        <h3>3-Tier 아키텍처</h3>
        <ul>
            <li>기존 2티어 아키텍처(클라이언트-서버)에 DB가 추가된 형태를 3티어 아키텍처라고 부른다</li>
            <li>Dapp의 경우 컨트랙트를 이용하여 DB 자체에서 데이터를 제공해줄 수 있기 때문에 서버리스 아키텍처라고 할 수 있다</li>
        </ul>

        <h3>HTTP</h3>
        <ul>
            <li>웹 상에서 클라이언트와 서버 간에 데이터를 주고받기 위한 프로토콜</li>
        </ul>

        <h3>HTTP의 역할</h3>
        <ul>
            <li>웹페이지 로딩</li>
            <li>API 통신 : 클라이언트와 서버 간 데이터 교환을 지원</li>
            <li>파일 전송 : 서버에서 클라이언트로 전송</li>
            <li>상태 비저장 : HTTP는 각 요청을 독립적으로 처리하며 서버는 이전 요청의 정보를 기억하지 않는다</li>
        </ul>

        <h3>HTTPS</h3>
        <ul>
            <li>HTTP에 보안계층(SSL/TLS)가 추가된 버전</li>
            <li>기밀성 : 데이터가 암호화되어 외부에서 볼 수 없다</li>
            <li>무결성 : 데이터가 전송 중 변조되지 않는다</li>
            <li>인증 : 신뢰할 수 있는 웹사이트인지 확인 가능</li>
        </ul>

        <h3>HTTP Messages</h3>
        <ul>
            <li>클라이언트와 서버 사이에 데이터가 교환되는 방식</li>
            <li>Request와 Response가 있으며 아래와 같은 유사한 구조를 가진다
                <ul>
                    <li>start line : 항상 첫 번째 줄에 위치하며 요청이나 응답의 상태를 나타낸다. 응답에서는 status line이라 한다</li>
                    <li>HTTP headers : 요청을 지정하거나 메시지에 포함된 본문을 설명하는 헤더의 집합이다</li>
                    <li>empty line : 헤더와 본문을 구분하는 빈 줄이 있다</li>
                    <li>body : 요청과 관련된 데이터나 응답과 관련된 데이터 또는 문서를 포함한다</li>
                </ul>
            </li>
        </ul>

        <h3>Stateless</h3>
        <ul>
            <li>HTTP로 클라이언트와 서버가 통신을 주고받는 과정에서 HTTP가 클라이언트나 서버의 상태를 확인하지 않는다</li>
            <li>필요에 따라 상태(카트에 담긴 상품 정보 등)를 확인하고 싶으면 다른 방법(쿠키-세션, API 등)을 사용해야 한다</li>
        </ul>

        <h3>HTTP Requests</h3>

        <h3>Start line</h3>
        <ul>
            <li>HTTP Requests는 클라이언트가 서버에게 보내는 메시지이다</li>
            <li>수행할 작업(GET, PUT, POST 등)이나 방식(HEAD or OPTIONS)을 설명하는 HTTP method를 나타낸다</li>
            <li>요청 대상 또는 프로토콜, 포트, 도메인의 절대 경로에는 요청 컨텍스트에 작성된다</li>
            <li>origin 형식 : ?와 쿼리 문자열이 붙는 절대 경로며 GET, POST, HEAD, OPTIONS 등의 메소드와 함께 사용된다</li>
            <li>absolute 형식 : 완전한 URL 형식으로 프록시에 연결하는 경우 대부분 GET 방식과 함께 사용한다</li>
            <li>authority 형식 : 도메인의 이름과 포트 번호로 이루어진 URL의 일부분이며 HTTP 터널을 구축하는 경우 CONNECT와 함께 사용할 수 있다</li>
            <li>asterisk 형식 : OPTIONS와 함께 별표 하나로 서버 전체를 표현한다</li>
        </ul>

        <h3>Headers</h3>
        <ul>
            <li>요청의 Headers는 기본 구조를 따른다</li>
            <li>헤더 이름, 콜론 값을 입력하고 값은 헤더에 따라 다르다</li>
            <li>General headers : 메시지 전체에 적용되는 헤더로 body를 통해 전송되는 데이터와는 관련이 없는 헤더다</li>
            <li>Request headers : fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더를 의미하며 User-Agent, Accept-Type,
                Accept-Language와 같은 헤더는 요청을 보다 구체화하며 Referer처럼 컨텍스트를 제공하거나 if-None과 같이 조건에 따라 제약을 추가할 수 있다</li>
            <li>Representation headers : 이전에는 Entity headers로 불렀으며 body에 담긴 리소스의 정보(콘텐츠 길이, MIME 타입 등)를 포함하는 헤더다</li>
        </ul>

        <h3>Body</h3>
        <ul>
            <li>요청의 본문은 HTTP messages 구조의 마지막에 위치한다</li>
            <li>모든 요청에 body가 필요하지는 않고 GET, HEAD, DELETE, OPTIONS처럼 서버에 리소스를 요청하는 경우에는 본문이 필요하지 않다</li>
            <li>POST나 PUT과 같은 일부 요청은 데이터를 업데이트하기 위해 사용하며 body는 다음과 같이 두 종류로 나눌 수 있다
                <ul>
                    <li>Single-resource bodies(단일-리소스 본문) : 헤더 두 개(Content Type과 Content-Length)로 정의된 단일 파일로 구성된다</li>
                    <li>Multiple-resource bodies(다중-리소스 본문) : 여러 파트로 구성된 본문에서는 각 파트마다 다른 정보를 지녔으며 보통 HTML form과 관련이 있다</li>
                </ul>
            </li>
        </ul>

        <h3>HTTP Responses</h3>

        <h3>Status line</h3>
        <ul>
            <li>HTTP Responses는 서버가 클라이언트에게 보내는 메시지다</li>
            <li>응답의 첫 줄을 Status line이라고 부르며 다음의 정보를 포함한다
                <ul>
                    <li>현재 프로토콜의 버전(HTTP/1.1)</li>
                    <li>상태 코드 : 요청의 결과를 나타낸다(ex 200, 302, 404 등)</li>
                    <li>상태 텍스트 : 상태 코드에 대한 설명</li>
                </ul>
            </li>
            <li>Status line의 한 예시로 HTTP/1.1 404 Not Found가 있다</li>
        </ul>

        <h3>Headers</h3>
        <ul>
            <li>응답에 들어가는 HTTP headers는 요청 헤더와 동일한 구조를 가지고 있다</li>
            <li>대소문자 구분 없는 문자열, 콜론 값을 입력한다</li>
            <li>값은 헤더에 따라 다르며 요청의 헤더와 마찬가지로 몇 그룹으로 나눌 수 있다
                <ul>
                    <li>General headers : 메시지 전체에 적용되는 헤더로 body를 통해 전송되는 데이터와는 관련이 없는 헤더다</li>
                    <li>Response headers : 위치 또는 서버 자체에 대한 정보(이름, 버전 등)과 같이 응답에 대한 부가적인 정보를 갖는 헤더로 Vary, Accept-Ranges와 같이
                        상태 줄에 넣기에는 공간이 부족했던 추가 정보를 제공한다</li>
                    <li>Representation headers : 이전에는 Entity headers로 불렀으며 body에 담긴 리소스의 정보(콘텐츠 길이, MIME 타입 등)를 포함하는 헤더다
                    </li>
                </ul>
            </li>
        </ul>

        <h3>Body</h3>
        <ul>
            <li>응답의 본문은 HTTP messages 구조의 마지막에 위치한다</li>
            <li>모든 응답에 body가 필요하지 않으며 201, 204와 같은 상태 코드를 가지는 응답에는 본문이 필요하지 않다</li>
            <li>Single-resource bodies(단일-리소스 본문)
                <ul>
                    <li>길이가 알려진 단일-리소스 본문은 두 개의 헤더(Content-Type, Content-Length)로 정의한다</li>
                    <li>길이를 모르는 단일 파일로 구성된 단일-리소스 본문은 Transfer-Encoding이 chunked로 설정되어 있으며 파일은 chunk로 나뉘어 인코딩 되어 있다</li>
                </ul>
            </li>
            <li>Multiple-resource bodies(다중-리소스 본문)
                <ul>
                    <li>서로 다른 정보를 담고 있는 body다</li>
                </ul>
            </li>
        </ul>

        <h3>Domain name</h3>
        <ul>
            <li>웹 브라우저를 통해 특정 사이트에 진입할 때 IP 주소를 대신하여 사용하는 주소</li>
        </ul>

        <h3>DNS</h3>
        <ul>
            <li>해당 도메인 이름과 매칭된 IP 주소를 확인하는 작업이 반드시 필요하고 네트워크에는 이것을 위한 서버가 별도로 필요한데 이를 DNS라고 한다</li>
        </ul>

        <h3>에러 메세지</h3>
        <ul>
            <li>웹페이지 대신 에러 메시지가 표시된다면 Chrome 브라우저가 웹 페이지를 로드하는 데에 문제가 발생한 경우다</li>
            <li>전체 에러 메시지 목록은 크롬 브라우저 검색창에 chrome://network-errors/를 입력하여 확인할 수 있다</li>
        </ul>

        <h3>AJAX</h3>
        <ul>
            <li>Asynchronous JavaScript And XMLHttpRequest의 약자로 JS, DOM, Fetch, XMLHttpRequest, HTML 등의 다양한 기술을 사용하는 웹 개발 기법</li>
            <li>웹 페이지에 필요한 부분에 데이터만 비동기적으로 받아와 화면에 그려낼 수 있다</li>
            <li>Fetch를 사용하면 페이지를 이동하지 않아도 서버로부터 필요한 데이터를 받아올 수 있다</li>
            <li>Fetch 이전에는 XHR을 사용했는데 Fetch는 XHR의 단점을 보완한 새로운 Web API이며 XML보다 가볍고 js와 호환되는 JSON을 사용한다</li>
        </ul>

        <h3>AJAX 장점</h3>
        <ul>
            <li>서버에서 HTML을 완성하여 보내주지 않아도 웹페이지를 만들 수 있다</li>
            <li>표준화된 방법 이전에는 브라우저마다 다른 방식으로 AJAX를 사용했으나 XHR이 표준화되면서 브라우저에 상관없이 AJAX를 사용할 수 있게 되었다</li>
            <li>유저 중심 애플리케이션 개발 AJAX를 사용하면 필요한 일부분만 렌더링하기 때문에 빠르고 더 많은 상호작용이 가능한 애플리케이션을 만들 수 있다</li>
            <li>작은 대역폭 : 네트워크 통신 한 번에 보낼 수 있는 데이터의 크기 이전에는 서버로부터 완성된 HTML 파일을 받아와야 했기 때문에 한 번에 보내야 하는 데이터의 크기가 컸지만 AJAX에서는
                필요한 데이터를 텍스트 형태로 보내면 되기 때문에 비교적 데이터의 크기가 작다</li>
        </ul>

        <h3>AJAX 단점</h3>
        <ul>
            <li>Search Engine Optimization(SEO)에 불리하다</li>
            <li>AJAX는 이전 상태를 기억하지 않기 때문에 사용자가 의도한 대로 뒤로가기 기능이 동작하지 않아 별도로 History API를 사용해야 한다</li>
        </ul>

        <h3>SSR</h3>
        <ul>
            <li>Server Side Rendering의 줄임말</li>
            <li>웹페이지를 브라우저에서 렌더링하는 대신 서버에서 렌더링한다</li>
            <li>브라우저가 서버의 URI로 GET 요청을 보내면 서버는 정해진 웹 페이지 파일을 브라우저로 전송한다</li>
            <li>그리고 서버의 웹페이지가 브라우저에 도착하면 완전히 렌더링된다</li>
            <li>웹 페이지의 내용에 DB의 데이터가 필요한 경우 서버는 DB의 데이터를 불러온 다음 웹 페이지를 완전히 렌더링 된 페이지로 변환한 후에 브라우저에 응답으로 보낸다</li>
            <li>SEO가 우선순위인 경우 사용하면 좋다</li>
            <li>앱 페이지 첫 화면 렌더링이 빠르게 필요한 경우 단일 파일 용량이 적은 SSR이 적합하다</li>
        </ul>

        <h3>CSR</h3>
        <ul>
            <li>웹 클라이언트에서 페이지를 랜더링</li>
            <li>브라우저의 요청을 서버로 보내면 서버는 웹 페이지를 랜더링하는 대신 웹 페이지의 골격이 될 단일 페이지를 클라이언트에 보낸다</li>
            <li>이때 서버는 웹 페이지와 함께 JS파일도 보내고 클라이언트가 웹 페이지를 받으면 웹 페이지와 전달된 JS파일은 브라우저의 웹 페이지를 완전히 렌더링된 페이지로 바꾼다</li>
            <li>사이트에 풍부한 상호 작용이 있는 경우 CSR은 빠른 라우팅으로 인해 강력한 사용 경험을 제공한다</li>
        </ul>
        <h3>REST API</h3>
        <ul>
            <li>로이 필딩의 박사학위 논문에서 웹의 장점을 최대한 활용할 수 있는 아키텍처로 처음 소개</li>
            <li>웹에서 사용하는 데이터나 자원을 HTTP URI로 표현하고 HTTP 프로토콜을 통해 요청과 응답을 정의하는 방식</li>
            <li>REST 성숙도 모델은 0단계부터 3단계까지 있다</li>
            <li>3단계까지 지키기 어려우므로 2단계까지만 적용해도 좋은 API 디자인이라고 볼 수 있다
                <ul>
                    <li>0단계 : HTTP 프로토콜을 사용하기만 해도 된다</li>
                    <li>1단계 : 개별 리소스와의 통신을 준수해야 한다(모든 데이터나 자원을 HTTP URI로 표현해야 한다)
                        <ul>
                            <li>모든 자원은 개별 리소스에 맞는 엔드포인트를 사용해야 하며 요청하고 받는 자원에 대한 정보를 응답으로 전달해야 한다는 것이 1단계의 핵심</li>
                        </ul>
                    </li>
                    <li>2단계 : CRUD에 맞게 적절한 HTTP 메서드를 사용하는 것에 중점을 둔다
                        <ul>
                            <li>GET 메서드 같은 경우 서버의 데이터를 변화시키지 않는 요청에 사용해야 한다</li>
                            <li>POST 메서드는 요청마다 새로운 리소스를 생성하고 PUT 메서드는 요청마다 같은 리소스를 반환한다</li>
                            <li>매 요청마다 같은 리소스를 반환하는 특징을 멱등하다고 하는데 멱등성을 가지는 PUT과 그렇지 않은 POST는 구분하여 사용한다</li>
                            <li>PUT과 PATCH 메서드도 구분해서 사용해야 한다 PUT은 교체 PATCH는 수정의 용도로 사용한다</li>
                        </ul>
                    </li>
                    <li>3단계 : 하이퍼미디어 컨트롤을 적용한다(HAteOAS)
                        <ul>
                            <li>3단계 요청은 2단계 요청과 동일하지만 응답에는 리소스 URI를 포함한 링크 요소를 삽입하여 작성해야 한다</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h3>OPEN API</h3>
        <ul>
            <li>정부는 OPEN API 형태로 공공데이터를 제공하고 있다</li>
            <li>무제한으로 이용할 수 있다는 의미는 아니고 이용 수칙에 따라 제한사항이 있을 수 있다</li>
        </ul>

        <h3>API Key</h3>
        <ul>
            <li>API를 이용하기 위해서는 API Key가 필요하다</li>
            <li>서버를 운영하는 데 비용이 발생하기 때문에 API Key로 자원에 접근할 수 있는 권한을 제공하고 데이터를 요청할 때 API key를 같이 전달해야 원하는 응답을 받을 수 있다</li>
        </ul>

        <h3>Postman</h3>
        <ul>
            <li>웹개발에서 사용하는 대표적인 클라이언트는 브라우저인데 브라우저는 웹 페이지를 받아오는 GET 요청에 사용한다</li>
            <li>브라우저의 주소창에 URL을 입력하면 해당 URL의 root-endpoint로 GET 요청을 보내는데 테스트를 위해 GET요청이 아닌 다른 요청을 보내려면 개발자 도구의 콘솔창에서 Web API
                fetch를 사용해야 한다</li>
            <li>매번 코드를 작성하는 것 대신에 HTTP 요청을 테스트할 수 있는 다양한 API 테스트 도구들이 있는데 그중 대표적인 게 바로 Postman이다</li>
        </ul>
    </article>
);

export default TIL20250305;
