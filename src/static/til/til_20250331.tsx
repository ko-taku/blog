import React from 'react';

const TIL20250331: React.FC = () => {
    return (
        <div>
            <h3>Getter</h3>
            <ul>
                <li>상태 변수를 조회하는 함수</li>
                <li>public으로 선언된 상태 변수에 대해 자동으로 getter 함수가 생성된다</li>
                <li>view나 state로 사용된다</li>
                <li>트랜잭션이 없는 view 함수를 사용하여 가스비가 없다</li>
            </ul>

            <h3>Setter</h3>
            <ul>
                <li>상태 변수를 변경하는 함수</li>
                <li>상태 변수를 변경할 때 setter 함수를 직접 구현해야 한다</li>
                <li>setter 함수는 public이나 external로 선언되며 상태 변수 값을 변경한다</li>
                <li>트랜잭션 실행이 필요하므로 가스 비용이 발생한다</li>
            </ul>

            <h3>스마트 컨트랙트 테스트가 중요한 이유</h3>
            <ul>
                <li>배포 후 수정이 불가능</li>
                <li>가스 비용 절감</li>
                <li>보안 강화</li>
                <li>예측 가능한 동작 보장</li>
            </ul>

            <h3>테스트 코드 작성 시 사용되는 라이브러리</h3>
            <ul>
                <li><strong>chai</strong>: 테스트 라이브러리</li>
                <li><strong>ethers</strong>: 이더리움과 상호작용할 수 있도록 도와주는 라이브러리</li>
                <li>Hardhat 프레임워크에서는 <strong>ethers</strong>를 기본 블록체인 라이브러리로 사용한다</li>
                <li>Test 실행 명령어: <code>npx hardhat test</code></li>
            </ul>
        </div>
    );
};

export default TIL20250331;
