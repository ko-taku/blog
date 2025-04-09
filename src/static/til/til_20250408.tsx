import React from 'react';

const TIL20250408: React.FC = () => {
    return (
        <div>
            <h3>EIP (Ethereum Improvement Proposal, 이더리움 개선 제안)</h3>
            <ul>
                <li>이더리움 네트워크의 기능 추가, 성능 개선, 보안 업데이트 등을 제안하는 문서</li>
                <li>누구나 EIP를 작성하여 네트워크 기능 추가, 최적화, 버그 수정 등을 제안</li>
                <li>EIP는 이더리움 커뮤니티의 논의를 거쳐 승인될 경우, 네트워크에 반영</li>
            </ul>

            <h3>ERC (Ethereum Request for Comments, 이더리움 표준 제안)</h3>
            <ul>
                <li>ERC는 스마트 컨트랙트 및 토큰 표준을 정의하는 EIP의 하위 개념</li>
                <li>개발자들은 ERC 표준에 따르면 모든 애플리케이션에서 쉽게 호환되는 컨트랙트를 만들 수 있다</li>
                <li>대표적인 ERC 표준으로 ERC-20, ERC-721이 있다</li>
            </ul>

            <h3>ERC-20</h3>
            <ul>
                <li>이더리움 네트워크에서 사용되는 토큰 표준으로 파비안 보그스텔러와 비탈릭 부테린에 의해 제안</li>
                <li>EVM 블록체인에서 스마트 컨트랙트를 통해 생성되는 토큰들이 서로 호환될 수 있도록 기술적 규칙을 정의</li>
                <li>디지털 자산 및 ICO 표준이다</li>
                <li>Depp 및 이더와의 호환성이 있고 개발자 및 사용자 친화적인 환경을 제공한다</li>
            </ul>

            <h3>함수와 이벤트</h3>
            <ul>
                <li><strong>totalSupply()</strong>: 총발행량으로 토큰이 총 몇 개 있는지 알려준다</li>
                <li><strong>transfer()</strong>: 송금으로 토큰을 총 발행 주소에서 개인 계정으로 송금할 수 있다</li>
                <li><strong>balanceOf()</strong>: 잔액으로 계정에 있는 토큰을 반환한다</li>
                <li><strong>transferFrom()</strong>: 사용자 간 송금 기능으로 사용자는 송금 기능을 이용하여 다른 사용자에게 토큰을 송금할 수 있다</li>
                <li><strong>approve()</strong>: 승인 기능으로 사람들이 위조 토큰을 만드는 것을 방지하며 토큰의 총 발행량을 확인하여 트랜잭션을 허용하거나 거부한다</li>
                <li><strong>allowance()</strong>: 허용 기능으로 누군가가 시스템을 속이고 본인이 소유한 것보다 더 많은 토큰을 보내고자 하는 경우 이 기능을 이용하여 사용자는 자신이 가진 것보다 더 많은 토큰을 보낼 수 없으며, 거래가 이루어지는 경우 취소된다</li>
                <li><strong>event Transfer(address indexed _from, address indexed _to, uint256 _value)</strong></li>
                <li><strong>event Approval(address indexed _owner, address indexed _spender, uint256 _value)</strong></li>
            </ul>

            <h3>OpenZeppelin</h3>
            <ul>
                <li><strong>스마트 컨트랙트 라이브러리 제공</strong>: ERC-20(토큰 표준), ERC-721(NFT), 접근 제어(Ownable), 수학 연산(SafeMath) 등 다양한 컨트랙트 모듈을 제공하여 개발자가 직접 작성해야 하는 코드를 줄여준다</li>
                <li><strong>보안성 검증</strong>: OpenZeppelin의 컨트랙트는 수많은 보안 감사를 거쳐 작성되었으며, 블록체인 보안 연구자들이 지속적으로 점검하고 개선한다</li>
                <li><strong>Upgradeable Contracts 지원</strong>: 스마트 컨트랙트 배포 후에도 업그레이드가 가능하도록 Proxy 패턴을 활용한 업그레이드 가능한 컨트랙트 기능을 제공한다</li>
                <li><strong>Access Control (권한 관리)</strong>: Ownable, Roles 등의 접근 제어 기능을 제공하여 특정 역할을 가진 사용자만 실행할 수 있는 함수를 정의할 수 있다</li>
                <li><strong>문서화 및 커뮤니티 지원</strong>: 공식 문서와 GitHub 리포지토리를 통해 코드 예제 및 설명이 제공되며, 개발자 커뮤니티에서 적극적으로 지원된다</li>
            </ul>

            <h3>OpenZeppelin 라이브러리 설치</h3>
            <ul>
                <li><strong>npm install @openzeppelin/contracts</strong></li>
            </ul>
        </div>
    );
};

export default TIL20250408;
