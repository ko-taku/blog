import React from 'react';

const TIL20250325: React.FC = () => {
    return (
        <div>
            <h3>참조 타입</h3>
            <ul>
                <li>참조 타입은 데이터를 직접 저장하는 대신 참조하는 방식으로 동작</li>
            </ul>

            <h3>문자열</h3>
            <ul>
                <li>문자열 데이터를 직접 저장하는 타입</li>
                <li>Solidity에서는 문자열 조작이 제한적이며 가스 비용이 높은 연산이 많기 때문에 <code>bytes</code> 타입을 활용하는 것이 성능 면에서 더 효율적일 수 있다.</li>
                <li>UTF-8 인코딩된 문자들을 저장</li>
                <li>동적 크기를 가지며 배열처럼 개별 문자에 직접 접근할 수 없다.</li>
                <li><code>string.length</code>가 없기 때문에 <code>bytes(str).length</code>를 사용해야 한다.</li>
                <li>문자열을 비교할 때 <code>keccak256(abi.encodePacked(str))</code>를 사용해야 한다.</li>
                <li>문자열 연결은 <code>abi.encodePacked()</code>를 사용하여 처리한다.</li>
            </ul>

            <h3>배열</h3>
            <ul>
                <li>동일한 타입의 여러 데이터를 저장하는 타입</li>
                <li>동적 크기와 고정 크기 배열로 나뉜다.</li>
                <li>고정 크기 배열은 선언할 때 크기를 지정해야 하며, 선언 후 크기를 변경할 수 없다.</li>
                <li>특정 요소 접근 및 수정이 가능하며 (<code>array[idx]</code>) <code>push()</code>, <code>pop()</code> 등의 내장 함수를 제공한다.</li>
                <li>Solidity는 중간 요소를 제거하는 <code>remove()</code> 함수를 제공하지 않지만 인덱스를 지정하여 수동으로 삭제할 수 있다.</li>
                <li><code>delete</code>를 사용하면 해당 인덱스 값이 0으로 초기화되며 배열 크기는 변하지 않는다.</li>
                <li>가스 비용이 높을 수 있어 최적화가 필요하다.</li>
            </ul>

            <h3>매핑</h3>
            <ul>
                <li>키-값 쌍을 저장하는 해시 테이블 구조의 데이터 타입</li>
                <li><code>mapping(KeyType =&gt; ValueType)</code> 형식으로 선언한다.</li>
                <li>키를 입력하면 해당하는 값을 즉시 조회 가능하다.</li>
                <li>모든 키는 기본적으로 0 또는 false와 같은 초기값을 가지므로 존재 여부를 체크하려면 별도의 플래그 변수가 필요할 수 있다.</li>
                <li>storage에만 저장이 가능하다 (메모리 변수로 사용 불가)</li>
                <li><code>delete</code>로 초기화가 가능하다 (0으로 설정되며 완전히 제거되지 않는다).</li>
                <li>매핑 안에 또 다른 매핑을 선언하여 2차원 매핑을 만들 수 있다.</li>
                <li>반복문을 사용하여 모든 키를 조회할 수 없다 (키 목록을 별도로 관리해야 한다).</li>
            </ul>

            <h3>구조체(Struct)</h3>
            <ul>
                <li>여러 타입의 변수를 하나의 데이터 구조로 묶을 수 있다.</li>
                <li>storage, memory 키워드를 사용하여 저장 방식 선택 가능</li>
                <li>매핑과 함께 사용하면 강력한 데이터 저장 기능을 제공</li>
                <li>구조체를 배열로 선언할 수 있다.</li>
                <li>구조체 내부 값 수정 가능</li>
                <li><code>delete</code> 키워드를 사용하여 구조체 값을 초기화할 수 있다.</li>
                <li>메모리 구조체(임시 저장) 사용 시 가스 비용 절감 효과가 있고 저장체 구조체 사용 시 영구적으로 보관된다.</li>
            </ul>

            <h3>바이트 배열(Bytes)</h3>
            <ul>
                <li>가변 크기의 바이트 배열을 저장한다.</li>
                <li>UTF-8 문자열을 바이트 형태로 저장할 수 있다.</li>
                <li><code>string</code>보다 효율적인 저장 및 조작이 가능하며 가스 비용 절감 효과가 있다.</li>
                <li>가변 크기의 바이트 배열은 <code>push()</code>, <code>pop()</code> 등을 사용하여 크기를 조절할 수 있다.</li>
            </ul>
        </div>
    );
};

export default TIL20250325;
