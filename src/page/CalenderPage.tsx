import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CalenderPage: React.FC = () => {
    const { date } = useParams();  // URL에서 날짜 값을 가져옴
    const [tilContent, setTilContent] = useState<string | null>(null);

    useEffect(() => {
        if (date) {
            // 날짜에 해당하는 TIL 파일을 fetch로 불러옴
            fetch(`/til/til_${date}.html`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('파일을 찾을 수 없습니다.');
                    }
                    return response.text();
                })
                .then((data) => {
                    if (!data || !data.trim()) {
                        setTilContent('휴식!');  // 비어있는 경우 "휴식!" 표시
                    } else {
                        setTilContent(data);  // 정상적인 내용이 있을 경우 TIL 설정
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setTilContent('휴식');  // 파일을 못 찾았을 때 처리
                });
        }
    }, [date]);  // 날짜가 변경될 때마다 다시 실행

    return (
        <div>
            <h1>TIL for {date}</h1>
            {tilContent ? (
                <div dangerouslySetInnerHTML={{ __html: tilContent }} />
            ) : (
                <p>No TIL content available for this date.</p>
            )}
        </div>
    );
};

export default CalenderPage;
