import React from 'react';

const TIL20250328: React.FC = () => {
    return (
        <div>
            <h3>구조체와 매핑</h3>
            <ul>
                <li>매핑과 구조체를 사용해 데이터를 더 구조적으로 관리할 수 있다</li>
                <li>매핑 안에 또 다른 매핑을 정의해 2차원 이상의 데이터 저장이 가능하다</li>
                <li>다중 매핑 구조는 권한 관리와 복잡한 관계 설정에 유용하다</li>
            </ul>

            <h3>Receive</h3>
            <ul>
                <li>이더를 직접 수신할 때 호출되는 함수</li>
                <li>계약이 명시적으로 이더를 받을 때 호출</li>
                <li><strong>external</strong>과 <strong>payable</strong>로 선언해야 한다</li>
            </ul>

            <h3>Fallback</h3>
            <ul>
                <li>정의되지 않은 함수가 호출되거나 데이터가 포함된 호출이 발생할 때 자동으로 실행된다</li>
                <li><strong>external</strong>로 선언되어야 한다</li>
                <li>이더 전송이 포함되었다면 <strong>payable</strong>도 필요하다</li>
            </ul>

            <h3>Receive vs Fallback</h3>
            <table>
                <thead>
                    <tr>
                        <th>기능</th>
                        <th>Receive</th>
                        <th>Fallback</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>호출 조건</td>
                        <td>이더만 전송될 때 (데이터 없이)</td>
                        <td>명시된 함수가 없거나 잘못된 함수 호출 시 호출</td>
                    </tr>
                    <tr>
                        <td>선언 방법</td>
                        <td>receive() external payable</td>
                        <td>fallback() external [payable]</td>
                    </tr>
                    <tr>
                        <td>주 용도</td>
                        <td>순수 이더 수신 처리</td>
                        <td>데이터 포함 호출 처리, 예외 처리</td>
                    </tr>
                </tbody>
            </table>

            <h3>try/catch</h3>
            <ul>
                <li>외부 함수 호출이나 스마트 계약의 생성 시 오류가 발생할 수 있고 이를 방지하기 위해 사용</li>
                <li><strong>try</strong>: 성공적으로 실행될 경우 결과 반환</li>
                <li><strong>catch</strong>: 에러 발생 시 처리</li>
            </ul>

            <h3>사용자 정의 에러 (Custom Errors)</h3>
            <ul>
                <li>특정 조건이 충족되지 않았을 때 발생할 수 있는 에러를 명확하게 정의할 수 있다</li>
                <li>가스비가 절감되는 장점이 있다</li>
                <li><strong>error</strong>: 에러 정의</li>
                <li><strong>revert</strong>: 에러 발생 시 실행 중단 및 에러 반환</li>
            </ul>
        </div>
    );
};

export default TIL20250328;
