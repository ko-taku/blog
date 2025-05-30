import React, { useEffect, useState } from 'react';
import TableOfContents from './components/TableOfContents';
import ConsensusMechanisms from './ConsensusMechanisms';
import './css/ConsensusPage.css';
const tocItems = [
    { id: 'title', label: '논문 제목' },
    { id: 'purpose', label: '1. 연구 목적 및 질문' },
    { id: 'overview', label: '2. 합의 메커니즘 개요' },
    { id: 'classification', label: '3. 합의 알고리즘 분류' },
    { id: 'evaluation', label: '4. 평가 기준 및 비교' },
    { id: 'issues', label: '5. 기술적 과제 및 오픈 이슈' },
    { id: 'future', label: '6. 향후 연구 방향' },
    { id: 'conclusion', label: '7. 결론' },
];

const ConsensusPage: React.FC = () => {
    const [activeId, setActiveId] = useState('title');

    useEffect(() => {
        const handleScroll = () => {
            // 섹션 위치를 기준으로 현재 활성 섹션 탐색
            const offsets = tocItems.map(({ id }) => {
                const el = document.getElementById(id);
                return el ? { id, top: el.getBoundingClientRect().top } : null;
            }).filter(Boolean) as { id: string; top: number }[];

            // 화면 상단 가까운 섹션 찾기 (top >= 0 중 가장 작은 top)
            const activeSection = offsets.reduce((closest, current) => {
                if (current.top >= 0 && current.top < closest.top) {
                    return current;
                }
                return closest;
            }, { id: activeId, top: window.innerHeight });

            setActiveId(activeSection.id);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeId]);

    return (
        <div>
            <TableOfContents activeId={activeId} items={tocItems} />
            <ConsensusMechanisms />
        </div>
    );
};

export default ConsensusPage;
