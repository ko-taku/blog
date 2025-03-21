import React from 'react';

const TIL20250321: React.FC = () => {
    return (
        <div>
            <h3>스마트 컨트랙트 배포 과정</h3>
            <ul>
                <li><strong>컴파일</strong>: Solidity 코드를 EVM이 이해할 수 있는 바이트코드로 변환</li>
                <li><strong>배포</strong>: 변환된 바이트코드를 트랜잭션을 통해 블록체인에 배포</li>
            </ul>

            <h3>컴파일</h3>
            <ul>
                <li>Solidity 코드를 EVM이 이해할 수 있도록 변환하는 과정</li>
                <li>실행 명령어
                    <ul>
                        <li>truffle compile</li>
                        <li>npx hardhat compile</li>
                    </ul>
                </li>
                <li>컴파일 중 .sol 파일이 .bin 파일로 변환</li>
                <li>ABI (Application Binary Interface) 생성 (.json 파일)</li>
                <li>컴파일된 JSON 파일 저장</li>
            </ul>

            <h3>배포</h3>
            <ul>
                <li>변환된 바이트코드를 블록체인에 올리는 과정</li>
                <li>스마트 컨트랙트 배포 트랜잭션 생성 및 블록체인에 전송</li>
                <li>배포된 컨트랙트 주소 반환</li>
            </ul>

            <h3>Truffle</h3>
            <p>
                Truffle은 EVM 스마트 컨트랙트 개발을 쉽게 할 수 있도록 도와주는 프레임워크입니다.
                Truffle을 사용하면 스마트 컨트랙트의 개발, 테스트, 배포 및 네트워크 관리를 효율적으로 수행할 수 있습니다.
                이 프레임워크는 Node.js에서 동작을 하며, npm으로 설치할 수 있습니다.
            </p>

            <h3>요구사항</h3>
            <ul>
                <li>NodeJS 14.0 이상</li>
                <li>윈도우, 리눅스, Mac OS</li>
                <li>JSON RPC API를 지원하는 이더리움(EVM) 클라이언트</li>
                <li>npm install -g truffle</li>
                <li>설치 후 truffle을 실행하면 명령어를 확인할 수 있음</li>
                <li><a href="https://trufflesuite.com/docs/truffle/overview" target="_blank" rel="noopener noreferrer">Truffle 공식문서</a></li>
            </ul>

            <h3>Truffle 프로젝트 생성</h3>
            <ul>
                <li>생성을 원하는 폴더 경로에서 <code>truffle init</code> 명령어로 생성</li>
                <li><code>contracts</code>: Solidity로 개발된 스마트 컨트랙트 소스 파일 폴더</li>
                <li><code>migrations</code>: 스크립트 가능한 파일을 위한 폴더</li>
                <li><code>test</code>: 개발된 컨트랙트를 테스트하기 위한 폴더</li>
                <li><code>truffle-config.js</code>: Truffle 설정 파일</li>
            </ul>

            <h3>Truffle Develop</h3>
            <ul>
                <li>Truffle에서 기본으로 제공하는 이더리움 클라이언트</li>
                <li>프로젝트 루트 폴더에서 <code>truffle develop</code> 명령어를 실행</li>
                <li>10개의 Account와 Private Keys가 리스트업되며 <code>truffle(develop)&gt;</code> 프롬프트가 나타남</li>
                <li>JSON-RPC용 (http://127.0.0.1:9545/) 서비스 제공</li>
                <li>MetaMask에 RPC URL을 연동하여 사용 가능</li>
                <li>콘솔을 종료하려면 <code>.exit</code> 입력</li>
            </ul>

            <h3>스마트 컨트랙트 코드 작성</h3>
            <p>
                <code>/contracts</code> 폴더에 스마트 컨트랙트의 .sol 파일을 생성한 후 코드를 작성합니다.
            </p>

            <h3>스마트 컨트랙트 컴파일</h3>
            <ul>
                <li><code>truffle(develop)&gt;</code> <code>compile</code> 명령어 실행</li>
                <li>위 명령어 실행 시 프로젝트 폴더에 <code>/build</code> 폴더가 생성되고, <code>contracts</code> 폴더 아래의 Solidity 파일이 JSON 형태로 변경되어 생성됨</li>
            </ul>

            <h3>스마트 컨트랙트 배포</h3>
            <ul>
                <li><code>/migrations</code> 폴더에 <code>1_deploy_contracts.js</code> 파일을 만들어준다</li>
                <li>다음 코드를 <code>1_deploy_contracts.js</code>에 넣어준다:
                    <pre>
                        {`const SimpleContract = artifacts.require('SimpleContract');

module.exports = function (deployer) {
  deployer.deploy(SimpleContract);
};`}
                    </pre>
                </li>
                <li>Truffle 프롬프트에서 <code>migrate</code> 명령어 실행</li>
                <li><code>truffle(develop)&gt; migrate</code> 실행 시 로컬 블록체인에 컨트랙트가 배포됨</li>
            </ul>

            <h3>스마트 컨트랙트 테스트</h3>
            <ul>
                <li><code>/test</code> 폴더에 <code>SimpleContract.test.js</code> 파일을 만들어서 코드를 넣는다</li>
                <li>다시 Truffle 프롬프트로 돌아가서 <code>test</code> 명령어를 실행</li>
                <li><code>truffle(develop)&gt; test</code> 실행</li>
            </ul>

            <h3>truffle-config.js 주요 요소</h3>
            <ul>
                <li><strong>networks</strong> (네트워크 설정): 다양한 네트워크(Ganache, Ethereal, Mainnet, Testnet 등)에 스마트 컨트랙트를 배포할 수 있음</li>
                <li>Truffle의 <code>truffle-config.js</code> 파일을 통해 프로젝트의 네트워크, 컴파일러, 배포 설정 등을 정의할 수 있음</li>
            </ul>

            <h3>truffle-config.js 주요 요소</h3>

            <h3>네트워크 설정 (networks)</h3>
            <ul>
                <li>
                    <strong>Truffle</strong>은 다양한 네트워크(Ganache, Ethereal, Mainnet, Testnet 등)에 스마트 컨트랙트를 배포할 수 있습니다.
                </li>
                <li>
                    네트워크 설정을 통해 어떤 블록체인에 연결할지를 정의합니다.
                </li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>속성</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>host</code></td>
                        <td>블록체인 노드의 주소 (로컬에서는 <code>127.0.0.1</code>)</td>
                    </tr>
                    <tr>
                        <td><code>port</code></td>
                        <td>RPC 서버가 실행되는 포트 (<code>8545</code>는 Ganache, <code>7545</code>는 GUI Ganache)</td>
                    </tr>
                    <tr>
                        <td><code>network_id</code></td>
                        <td>특정 네트워크 ID를 지정 (<code>*</code>는 모든 네트워크 허용)</td>
                    </tr>
                    <tr>
                        <td><code>provider</code></td>
                        <td>외부 RPC(예: Infura)와 연결할 때 사용</td>
                    </tr>
                    <tr>
                        <td><code>confirmations</code></td>
                        <td>배포가 확정되기까지 기다릴 블록 수</td>
                    </tr>
                    <tr>
                        <td><code>timeoutBlocks</code></td>
                        <td>배포 시 몇 개의 블록 동안 응답이 없으면 타임아웃할지 설정</td>
                    </tr>
                    <tr>
                        <td><code>skipDryRun</code></td>
                        <td>실제 배포 전에 Dry Run(모의 배포) 실행 여부</td>
                    </tr>
                </tbody>
            </table>

            <h3>컴파일러 설정</h3>
            <ul>
                <li>어떤 Solidity 컴파일러 버전을 사용할지 정의합니다.</li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>속성</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>version</code></td>
                        <td>Solidity 컴파일러 버전 (예: <code>"0.8.21"</code>)</td>
                    </tr>
                    <tr>
                        <td><code>optimizer.enabled</code></td>
                        <td>코드 최적화 활성화 여부 (<code>true</code> 추천)</td>
                    </tr>
                    <tr>
                        <td><code>optimizer.runs</code></td>
                        <td>최적화 실행 횟수 (<code>200</code>이 일반적)</td>
                    </tr>
                    <tr>
                        <td><code>evmVersion</code></td>
                        <td>특정 EVM 버전 사용 가능 (예: <code>"byzantium"</code>, <code>"istanbul"</code>)</td>
                    </tr>
                </tbody>
            </table>

            <h3>테스터 설정 (mocha)</h3>
            <ul>
                <li>
                    <strong>Truffle</strong>은 Mocha 테스트 프레임워크를 사용하며, 여기서 기본 설정을 변경할 수 있습니다.
                </li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>속성</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>timeout</code></td>
                        <td>테스트 실행 제한 시간 (밀리초 단위)</td>
                    </tr>
                </tbody>
            </table>

            <h2>Truffle DB 설정 (db)</h2>
            <ul>
                <li>
                    <strong>Truffle DB</strong>는 배포된 스마트 컨트랙트의 정보를 저장하는 Truffle DB 기능을 제공합니다.
                </li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>속성</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>enabled</code></td>
                        <td>Truffle DB 활성화 여부 (<code>true</code>로 설정 시 사용 가능)</td>
                    </tr>
                    <tr>
                        <td><code>host</code></td>
                        <td>Truffle DB를 저장할 서버 주소</td>
                    </tr>
                    <tr>
                        <td><code>adapter.name</code></td>
                        <td>사용할 데이터베이스 (<code>indexeddb</code> 추천)</td>
                    </tr>
                    <tr>
                        <td><code>adapter.settings.directory</code></td>
                        <td>데이터 저장 경로</td>
                    </tr>
                </tbody>
            </table>
            <h3>Hardhat</h3>
            <ul>
                <li>
                    <strong>Hardhat</strong>은 EVM 스마트 컨트랙트 개발을 쉽게 할 수 있도록 도와주는 프레임워크입니다. 이 프레임워크를 사용하면 스마트 컨트랙트의 개발, 테스트, 배포 및 네트워크 관리를 효율적으로 수행할 수 있습니다.
                </li>
            </ul>

            <h3>Hardhat 프로젝트 생성</h3>
            <ul>
                <li>
                    원하는 폴더 경로를 선택 후 <code>npx hardhat init</code> 명령어로 프로젝트를 생성합니다.
                </li>
                <li>그 후 선택지에서 "Create a TypeScript project"를 선택합니다.</li>
                <li>나머지는 Enter를 눌러서 진행합니다.</li>
                <li>
                    <strong>폴더 구조:</strong>
                    <ul>
                        <li><code>contracts</code>: Solidity로 개발된 스마트 컨트랙트 소스 파일 폴더</li>
                        <li><code>ignition</code>: 배포 모듈을 관리하는 폴더</li>
                        <li><code>scripts</code>: 배포 관련 스크립트를 관리하는 폴더 (이전 버전)</li>
                        <li><code>test</code>: 개발된 컨트랙트를 테스트하기 위한 폴더</li>
                        <li><code>hardhat.config.js</code>: Hardhat 설정 파일</li>
                    </ul>
                </li>
            </ul>

            <h3>로컬 블록체인 네트워크 실행</h3>
            <ul>
                <li>
                    <code>npx hardhat node</code> 명령어로 로컬 네트워크를 실행합니다.
                </li>
                <li>새로운 터미널을 열고 명령어를 실행하세요.</li>
            </ul>

            <h3>스마트 컨트랙트 코드 작성</h3>
            <ul>
                <li>
                    <code>/contracts</code> 폴더에 <code>SimpleContract.sol</code> 파일을 만들어 Solidity 코드를 작성합니다.
                </li>
            </ul>

            <h3>스마트 컨트랙트 컴파일</h3>
            <ul>
                <li><code>npx hardhat compile</code> 명령어로 스마트 컨트랙트를 컴파일합니다.</li>
                <li>컴파일 후 <code>artifacts</code>와 <code>cache</code> 폴더가 생성됩니다.</li>
                <li><strong>artifacts</strong>: Solidity 스마트 컨트랙트를 컴파일한 후 생성된 아티팩트(배포 정보)가 저장됩니다.</li>
                <li><strong>cache</strong>: Hardhat이 컴파일된 파일을 캐싱하여 변경되지 않은 파일은 다시 컴파일하지 않도록 합니다.</li>
            </ul>

            <h3>스마트 컨트랙트 배포</h3>
            <ul>
                <li>
                    <code>ignition/modules</code> 폴더에 <code>SimpleContract.ts</code> 파일을 만들어 배포 코드를 작성합니다.
                </li>
                <li>
                    배포 명령어: <code>npx hardhat ignition deploy ignition/modules/SimpleContract.ts --network localhost</code>
                </li>
                <li>위 명령어 실행 시 로컬 블록체인에 컨트랙트가 배포됩니다.</li>
            </ul>

            <h3>스마트 컨트랙트 테스트</h3>
            <ul>
                <li><code>/test</code> 폴더에 <code>SimpleContract.test.ts</code>라는 파일을 만들어 테스트 코드를 작성합니다.</li>
                <li><code>npx hardhat test</code> 명령어로 테스트를 실행합니다.</li>
            </ul>

            <h2>hardhat.config.js 주요 설정 값</h2>
            <table>
                <thead>
                    <tr>
                        <th>설정 키</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>defaultNetwork</code></td>
                        <td>기본 실행 네트워크 지정 (예: <code>hardhat</code>, <code>sepolia</code>)</td>
                    </tr>
                    <tr>
                        <td><code>networks</code></td>
                        <td>JSON-RPC 기반 네트워크 설정 (Alchemy, Infura, Hardhat, Localhost 등)</td>
                    </tr>
                    <tr>
                        <td><code>solidity</code></td>
                        <td>Solidity 컴파일러 버전 및 최적화 설정 (optimizer)</td>
                    </tr>
                    <tr>
                        <td><code>paths</code></td>
                        <td>Hardhat 프로젝트에서 사용할 폴더 경로 설정</td>
                    </tr>
                    <tr>
                        <td><code>mocha</code></td>
                        <td>테스트 실행 시 Mocha의 실행 제한 시간 (<code>timeout</code>)</td>
                    </tr>
                    <tr>
                        <td><code>gasReporter</code></td>
                        <td>트랜잭션 가스 비용을 측정하고 표시하는 옵션</td>
                    </tr>
                    <tr>
                        <td><code>etherscan</code></td>
                        <td>Etherscan에 컨트랙트를 검증할 때 사용하는 API 키 설정</td>
                    </tr>
                </tbody>
            </table>

            <h3>기본 네트워크 (defaultNetwork)</h3>
            <ul>
                <li>
                    <code>defaultNetwork: "sepolia"</code>: Hardhat 실행 시 기본으로 사용할 네트워크 지정 (예: <code>hardhat</code>, <code>localhost</code>, <code>sepolia</code> 등)
                </li>
                <li>
                    <code>npx hardhat test</code> 또는 <code>npx hardhat deploy</code> 실행 시 이 네트워크를 사용합니다.
                </li>
            </ul>

            <h3>네트워크 설정 (networks)</h3>
            <ul>
                <li>로컬 및 테스트넷, 메인넷을 지원합니다.</li>
                <li>환경 변수(dotenv)를 활용하여 보안을 강화할 수 있습니다.</li>
                <li><code>.env</code> 파일에 <code>PRIVATE_KEY</code>를 저장하고 <code>process.env.PRIVATE_KEY</code>로 가져옵니다.</li>
            </ul>

            <h3>컴파일러 설정 (solidity)</h3>
            <ul>
                <li>
                    Solidity 최적화 설정:
                    <ul>
                        <li><code>optimizer.enabled: true</code>: 가스 비용 절감을 위해 최적화 활성화</li>
                        <li><code>optimizer.runs: 200</code>: 200번 실행을 기준으로 최적화</li>
                    </ul>
                </li>
                <li>
                    EVM 버전 지정:
                    <ul>
                        <li><code>"paris"</code>: 이더리움 Merge 이후의 환경을 따른다.</li>
                    </ul>
                </li>
            </ul>

            <h3>폴더 경로 설정 (paths)</h3>
            <ul>
                <li>Solidity 파일, 테스트 코드, 캐시, 아티팩트 저장 경로를 설정합니다.</li>
            </ul>

            <h3>테스트 설정 (mocha)</h3>
            <ul>
                <li>테스트 실행 제한 시간을 40초로 설정합니다.</li>
            </ul>

            <h3>가스 리포트 활성화 (gasReporter)</h3>
            <ul>
                <li>
                    Hardhat에서 실행되는 트랜잭션의 가스 비용을 분석하여 리포트를 작성합니다.
                </li>
                <li>환경 변수 <code>REPORT_GAS</code>가 <code>true</code>일 때만 활성화됩니다.</li>
                <li>
                    <code>CoinMarketCap</code> API를 활용하여 실시간 가스비 변환이 가능합니다.
                </li>
                <li>
                    <code>npm install hardhat-gas-reporter --save-dev</code>를 설치해야 합니다.
                </li>
            </ul>

            <h3>컨트랙트 검증 (etherscan)</h3>
            <ul>
                <li>
                    Etherscan에서 스마트 컨트랙트를 검증할 때 사용하는 API 키 설정
                </li>
                <li>
                    <code>npx hardhat verify --network sepolia &lt;DEPLOYED_CONTRACT_ADDRESS&gt;</code> 명령어로 컨트랙트 검증을 실행합니다.
                </li>
                <li><code>npm install @nomicfoundation/hardhat-etherscan --save-dev</code>를 설치해야 합니다.</li>
            </ul>
        </div>
    );
};

export default TIL20250321;
