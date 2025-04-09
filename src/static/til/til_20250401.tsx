import React from 'react';

const TIL20250401: React.FC = () => {
    return (
        <div>
            <h3>Getter</h3>
            <ul>
                <li>private 또는 internal로 선언하면 외부에서 직접 접근할 수 없어 getter를 직접 구현해야 한다</li>
            </ul>

            <h3>Struct</h3>
            <ul>
                <li>struct는 기본적으로 public or private 같은 접근 제한자로 설정되지 않으며 다른 상태 변수를 통해 private로 선언할 수 있다</li>
            </ul>

            <h3>구조체의 Getter</h3>
            <ul>
                <li>상태 변수를 private로 선언하게 되면 getter 함수가 자동으로 생성되지 않아 별도의 getter 함수를 public으로 만들어야 한다</li>
            </ul>

            <h3>구조체의 Setter</h3>
            <ul>
                <li>구조체 데이터를 설정하는 setter 함수는 특정 필드만 변경할 수도 있고 전체 구조체를 한번에 설정할 수도 있다</li>
            </ul>

            <h3>매핑을 활용한 여러 개의 구조체 관리</h3>
            <ul>
                <li>하나의 구조체만 관리하는 것이 아니라 여러 개의 데이터를 저장하고 관리할 수도 있다</li>
            </ul>

            <h3>프로젝트에서 고려되는 포인트</h3>
            <ul>
                <li>사용처가 많은게 좋다(게임도 그 중 하나다)</li>
                <li>빌드의 시간이 많이 걸린다</li>
                <li>Fully onchain이 거의 불가능하다</li>
                <li>메스어댑션의 벽이 높다(web2 유저를 어떻게 데리고 올 수 있을지가 관건)</li>
                <li>크립토 마켓 자체가 게임보다 재밌다</li>
                <li>커뮤니티를 보강하는게 좋다</li>
            </ul>

            <h3>블록체인은 랜덤할 수 있는가?</h3>
            <ul>
                <li>블록체인은 본질적으로 결정론적인 시스템</li>
                <li>랜덤값을 만들기 위해 사용되는 시드 구문은 모두가 알 수 있다</li>
                <li>블록체인에서 트랜잭션은 특정한 순서로만 실행되며 특정 노드는 트랜잭션의 내용을 미리 알게 된다</li>
            </ul>

            <h3>파운드리</h3>
            <ul>
                <li>빠르고 네이티브 테스트를 할 수 있다</li>
            </ul>
        </div>
    );
};

export default TIL20250401;
