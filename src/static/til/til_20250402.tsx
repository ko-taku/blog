import React from 'react';

const TIL20250402: React.FC = () => {
    return (
        <div>
            <h3>로컬 테스트</h3>
            <ul>
                <li>가장 빠르고 비용이 들지 않는 방법</li>
                <li>스마트 컨트랙트를 배포하기 전에 로컬 테스트를 통해 모든 기능이 정상적으로 동작하는지 확인해야 한다</li>
            </ul>

            <h3>사용 도구</h3>
            <ul>
                <li><strong>Hardhat</strong>: 로컬 이더리움 네트워크를 제공하여 스마트 컨트랙트를 빠르게 배포 및 테스트 할 수 있다</li>
                <li><strong>Ganache</strong>: 이더리움 테스트 환경을 로컬에서 실행할 수 있도록 지원하는 도구</li>
                <li><strong>Foundry</strong>: 고성능 스마트 컨트랙트 개발 및 테스트 도구</li>
                <li><strong>Ethers.js / Web3.js</strong>: 블록체인과 상호작용하여 테스트 수행</li>
            </ul>

            <h3>로컬 테스트의 한계</h3>
            <ul>
                <li>실제 블록체인 네트워크와 다르다</li>
                <li>실제 네트워크 지연 확인 불가능</li>
                <li>실제 가스비 측정 불가능</li>
            </ul>

            <h3>테스트넷 배포 및 검증</h3>
            <ul>
                <li>테스트넷은 메인넷과 동일한 환경을 제공하지만 가치가 없는 테스트 토큰을 사용한다</li>
                <li>실제 블록체인 환경에서 동작 확인</li>
                <li>다른 스마트 컨트랙트 및 DApp과의 상호작용 테스트</li>
                <li>네트워크 지연 시간 및 가스 소비량 검토</li>
                <li>배포 과정에서 발생할 수 있는 예상치 못한 문제 해결</li>
            </ul>

            <h3>테스트넷 배포 후 확인해야 할 사항</h3>
            <ul>
                <li>트랜잭션이 예상한대로 실행되는가?</li>
                <li>이벤트가 정상적으로 발생하는가?</li>
                <li>실제 네트워크에서 가스 소비량은?</li>
                <li>여러 계정 간 호출 시 예상한 결과가 나오는가?</li>
            </ul>

            <h3>테스트넷 테스트의 한계</h3>
            <ul>
                <li>여전히 가상 환경이다(테스트 토큰 사용)</li>
                <li>가스비는 실제와 차이가 있을 수 있다</li>
                <li>일부 네트워크 문제는 메인넷과 다를 수 있다</li>
            </ul>

            <h3>메인넷 배포 및 최종 검증</h3>
            <ul>
                <li>메인넷 배포는 실제 비용이 발생하는 과정으로 철저한 사전테스트가 필요하다</li>
                <li>스마트 컨트랙트가 완전 검증된 상태인지 확인</li>
                <li>실제 사용자와의 상호작용을 테스트</li>
                <li>보안 및 안정성 검토</li>
                <li>실사용 환경에서의 가스 최적화 확인</li>
            </ul>

            <h3>Hardhat</h3>
            <ul>
                <li>ethers.js를 기본적으로 지원하며 트랜잭션 및 스마트 컨트랙트 테스트에 최적화되어 있다</li>
            </ul>

            <h3>Truffle</h3>
            <ul>
                <li>web3.js를 기본적으로 지원하며 Ganache 및 Truffle Suite와 함께 작동하도록 설계되었다</li>
            </ul>

            <h3>ethers.js</h3>
            <ul>
                <li>이더리움 블록체인과 상호작용할 수 있도록 도와주는 JS 라이브러리</li>
                <li><strong>이더리움 네트워크와 상호작용</strong>:
                    <ul>
                        <li>블록체인 데이터 읽기 (provider.getBalance())</li>
                        <li>트랜잭션 전송 (signer.sendTransaction())</li>
                        <li>스마트 컨트랙트 함수 호출 (contract.someFunction())</li>
                    </ul>
                </li>
                <li>다양한 이더리움 네트워크 지원</li>
                <li><strong>경량화 및 모듈화</strong>:
                    <ul>
                        <li>빠르고 가벼운 라이브러리 → 프론트엔드 & 백엔드에서 모두 사용 가능</li>
                        <li>필요한 기능만 선택적으로 사용할 수 있음</li>
                    </ul>
                </li>
                <li><strong>지갑 관리 기능 내장</strong>:
                    <ul>
                        <li>프라이빗 키 & Mnemonic 기반 계정 생성 (Wallet.createRandom())</li>
                        <li>트랜잭션 서명 및 전송 (wallet.signTransaction())</li>
                    </ul>
                </li>
                <li>TypeScript 지원:
                    <ul>
                        <li>강력한 타입 체크 기능 제공 (ethers.Contract, ethers.Wallet)</li>
                    </ul>
                </li>
                <li>Etherscan API 지원:
                    <ul>
                        <li>스마트 컨트랙트 검증 (etherscan.verifyContract())</li>
                    </ul>
                </li>
            </ul>

            <h3>기타</h3>
            <ul>
                <li>이더리움, 모나드 코어는 고랭과 관련이 크다</li>
                <li>컨트랙트나 서비스는 자바스크립트와 관련성이 크다</li>
                <li>최적화에 관심이 있다면 러스트를 배우는게 좋다</li>
                <li>유니스왑 깃허브 v2 contracts에서 코드를 보는게 도움이 된다</li>
                <li>오픈제플린에서 nft 코드를 작성해준다</li>
                <li>pinata에 파일 올리고 nft와 연결한다</li>
            </ul>
        </div>
    );
};

export default TIL20250402;
