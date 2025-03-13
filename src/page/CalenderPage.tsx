import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CalenderPage: React.FC = () => {
    const { date } = useParams<{ date: string }>();  // URL에서 날짜 값을 가져옴
    const [TilComponent, setTilComponent] = useState<React.LazyExoticComponent<React.ComponentType<any>> | null>(null);

    useEffect(() => {
        if (date) {
            const loadComponent = async () => {
                try {
                    // 동적 임포트를 사용하여 컴포넌트 불러오기
                    const component = await import(`../static/til/til_${date}.tsx`);
                    setTilComponent(() => component.default);  // 기본 내보내기를 사용하여 컴포넌트 설정
                } catch (error) {
                    console.error(`TIL 컴포넌트를 찾을 수 없습니다: ${date}`, error);
                    setTilComponent(null);  // 파일이 없으면 null 처리
                }
            };

            loadComponent();  // 컴포넌트 비동기 로딩
        }
    }, [date]);  // 날짜가 변경될 때마다 다시 실행

    return (
        <div>
            <h1>TIL for {date}</h1>
            <Suspense fallback={<p>로딩 중...</p>}>
                {TilComponent ? (
                    <TilComponent />  // 동적으로 로드된 TIL 컴포넌트를 렌더링
                ) : (
                    <p>해당 날짜의 TIL 콘텐츠를 찾을 수 없습니다.</p>  // 파일이 없을 때 표시할 메시지
                )}
            </Suspense>
        </div>
    );
};

export default CalenderPage;
