import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <section className="home-content">
                <h2 className="home-title">블록체인</h2>
                <p>
                    블록체인은 단순한 기술을 넘어, 세상 모든 거래를 더 투명하고 안전하게 만드는 혁신적인 시스템입니다
                </p>
                <div className="home-cards">
                    <div className="card">
                        <h3 className="card-title">비전</h3>
                        <p className="visionP">
                            블록체인 기술을 통해 투명하고 안전한 디지털 세상을 만드는 것을 목표
                        </p>
                        <p className="visionP">
                            분산형 네트워크와 탈중앙화 원칙을 바탕으로, 모든 거래와 데이터가 신뢰를 기반으로 이루어지는 혁신적인 환경을 제공
                        </p>
                        <p className="visionP">
                            스마트 계약과 자동화된 시스템을 통해 비용 절감과 업무 처리 속도 향상
                        </p>
                    </div>
                    <div className="card">
                        <h3 className="card-title">기술 스택</h3>
                        <table className="tech-stack-table">
                            <thead>
                                <tr>
                                    <th>카테고리</th>
                                    <th>기술</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>스마트 계약</td>
                                    <td>Solidity, Rust</td>
                                </tr>
                                <tr>
                                    <td>데이터베이스</td>
                                    <td>IPFS, BigchainDB</td>
                                </tr>
                                <tr>
                                    <td>프론트엔드</td>
                                    <td>React, Vue.js</td>
                                </tr>
                                <tr>
                                    <td>백엔드</td>
                                    <td>Node.js, Express, Python</td>
                                </tr>
                                <tr>
                                    <td>보안</td>
                                    <td>AES, RSA 암호화 기술</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
