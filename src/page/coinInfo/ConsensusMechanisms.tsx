import React from 'react';
import './css/ResearchCoin.css';

const ConsensusMechanisms: React.FC = () => {

    return (
        <div className="p-6 max-w-7xl mx-auto text-gray-800">
            <h1 className="text-3xl font-bold mb-4 custom-heading2">📘 A Systematic Literature Review on Blockchain Consensus Mechanisms</h1>
            <p className="mb-2"><strong>저자:</strong> Muhammad Rehman 외</p>
            <p className="mb-2"><strong>출판:</strong> 2021, Computers & Electrical Engineering (Elsevier)</p>

            {/* 1. 목적 */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 custom-heading">🔍 연구 목적 및 질문</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>64편 논문을 PRISMA 절차 기반으로 분석</li>
                    <li>주요 질문:
                        <ul className="list-disc pl-6">
                            <li>주요 합의 메커니즘은 무엇인가?</li>
                            <li>각 메커니즘의 장단점은?</li>
                            <li>기술적 과제 및 발전 방향은?</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* 2. 개요 */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 custom-heading">🔗 합의 메커니즘 개요</h2>
                <ul className="list-disc pl-6">
                    <li>속도, 보안성, 에너지 소비, 확장성, 신뢰 모델 등으로 평가</li>
                    <li>Permissioned vs. Permissionless 구조 구분</li>
                </ul>
            </section>

            {/* 3. 분류 */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 custom-heading">🧱 합의 알고리즘 분류</h2>
                <div className="space-y-2">
                    <p><strong>PoW:</strong> Bitcoin. 높은 보안성, 낮은 확장성, 에너지 소비 ↑</p>
                    <p><strong>PoS:</strong> Ethereum 2.0. 친환경, Nothing-at-Stake 문제</p>
                    <p><strong>DPoS:</strong> EOS. 빠르지만 노드 집중화 위험</p>
                    <p><strong>PBFT:</strong> Hyperledger. 결정론적 합의, 통신 복잡도 ↑</p>

                    {/* DAG 심화 추가 */}
                    <div className="border rounded p-4 bg-gray-50">
                        <p><strong>🧬 DAG 기반 합의 메커니즘 심화</strong></p>
                        <p><strong>DAG (Directed Acyclic Graph)</strong>는 블록체인처럼 ‘블록’을 연결하지 않고, 트랜잭션 간 직접 참조 관계로 합의를 형성합니다.</p>
                        <ul className="list-disc pl-6 my-2 space-y-1">
                            <li>✅ 병렬 처리 가능 → TPS 수천 이상</li>
                            <li>✅ 마이닝 없음, 수수료 거의 0</li>
                            <li>✅ 경량 디바이스 친화적 (IoT 등)</li>
                            <li>⚠️ 보안성 미성숙 → 악의적 트랜잭션 구조 조작 가능성 존재</li>
                            <li>⚠️ 합의 불확실성 → 결정론적 합의가 아님 (확률 기반 확정)</li>
                        </ul>
                        <table className="w-full text-sm border-collapse border mt-4">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border p-2">항목</th>
                                    <th className="border p-2">DAG 특징 요약</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="border p-2 font-semibold">구조</td>
                                    <td className="border p-2">트랜잭션들이 서로를 참조하는 그래프 형태</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="border p-2 font-semibold">대표 모델</td>
                                    <td className="border p-2">IOTA (Tangle), Nano (Block Lattice), Hashgraph 등</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="border p-2 font-semibold">합의 방식</td>
                                    <td className="border p-2">트랜잭션이 이전 2~3개의 트랜잭션을 검증하며 확장</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="border p-2 font-semibold">보안 대책</td>
                                    <td className="border p-2">Coordinator (IOTA), Voting, Reputation 등 실험 중</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="border p-2 font-semibold">적용 분야</td>
                                    <td className="border p-2">IoT, 미세 결제, 초경량 네트워크에 적합</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. 평가 비교 */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 custom-heading">🧪 평가 기준 및 비교 분석</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-2">합의 알고리즘</th>
                                <th className="border p-2">신뢰 모델</th>
                                <th className="border p-2">대표 사례</th>
                                <th className="border p-2">TPS</th>
                                <th className="border p-2">에너지 소비</th>
                                <th className="border p-2">공격 저항성</th>
                                <th className="border p-2">확장성</th>
                                <th className="border p-2">보안성</th>
                                <th className="border p-2">중앙화 위험</th>
                                <th className="border p-2">장점</th>
                                <th className="border p-2">단점</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['PoW', 'Permissionless', 'Bitcoin', '낮음', '매우 높음', '51% 공격 가능', '낮음', '높음', '낮음', '신뢰성 ↑', '속도↓, 에너지浪費'],
                                ['PoS', 'Permissionless', 'Ethereum 2.0', '중간', '낮음', 'Nothing-at-Stake', '중간', '높음', '중간', '친환경, 빠름', '지분 집중화'],
                                ['DPoS', 'Permissionless', 'EOS, Tron', '높음', '낮음', '투표 장악 위험', '높음', '중간', '높음', '합의 속도 ↑', '권력 집중 가능'],
                                ['PBFT', 'Permissioned', 'Hyperledger', '매우 높음', '낮음', 'Byzantine Tolerance', '낮음', '매우 높음', '중간', '결정론적, 빠름', '노드↑ 시 비효율'],
                                ['DAG', 'Permissionless', 'IOTA 등', '매우 높음', '낮음', '보안 불확실', '매우 높음', '미성숙', '낮음', '병렬 처리, 無수수료', '보안 표준화 부족']
                            ].map((row, i) => (
                                <tr key={i} className="border-t">
                                    {row.map((cell, j) => (
                                        <td key={j} className="border p-2">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5. 기술적 과제 */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 custom-heading">⚠️ 기술적 과제 및 오픈 이슈</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>블록체인 트릴레마:</strong> 확장성 vs. 보안 vs. 탈중앙화 균형 어려움</li>
                    <li><strong>에너지 소비:</strong> PoW → 높은 환경 비용, 친환경 합의 요구 증가</li>
                    <li><strong>보안 취약점:</strong> 51% 공격, Nothing-at-Stake, DAG의 스팸 등</li>
                    <li><strong>노드 통신 복잡성:</strong> PBFT는 O(n²) 통신 필요, DAG는 동기화 문제</li>
                    <li><strong>최종성:</strong> PoW·DAG는 확률적, 금융 분야엔 결정론적 필요</li>
                    <li><strong>중앙화 우려:</strong> DPoS 및 위임 모델에서 노드 집중화 경향</li>
                </ul>
            </section>

            {/* 6. 미래 방향 */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 custom-heading">🔮 향후 연구 방향</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>하이브리드 합의:</strong> PoW+PoS, BFT+DAG 등 조합 메커니즘 (예: Avalanche)</li>
                    <li><strong>DAG 보안 강화:</strong> Tip Selection 개선, Coordinator 제거 연구</li>
                    <li><strong>AI 기반 동적 합의:</strong> 악성 노드 탐지 및 네트워크 예측 최적화</li>
                    <li><strong>크로스체인 합의:</strong> Polkadot, Cosmos 기반 상호운용 구조</li>
                    <li><strong>Green Consensus:</strong> 저전력·경량 환경을 위한 설계 필요</li>
                    <li><strong>공식 검증:</strong> 합의 알고리즘의 수학적 검증 및 신뢰성 확보</li>
                </ul>
            </section>

            {/* 7. 결론 */}
            <section>
                <h2 className="text-2xl font-semibold mb-2 custom-heading">📝 결론</h2>
                <p>
                    블록체인 합의 알고리즘은 시스템의 핵심 기반 기술이며,
                    단일 메커니즘으로 완벽한 해결은 어려움. 사용 목적, 트레이드오프에 따라 최적의 선택 필요.
                    미래는 확장성, 보안성, 지속 가능성 간 균형을 이루는 새로운 패러다임으로 나아갈 것.
                </p>
            </section>
        </div>
    );
};

export default ConsensusMechanisms;