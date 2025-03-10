import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동


    // 날짜 클릭 시 호출되는 함수
    const handleDayClick = (value: Date) => {
        setSelectedDate(value);

        // 날짜를 'YYYY-MM-DD' 형식으로 변환
        const formattedDate = value.toLocaleDateString('en-CA').replace(/-/g, '');
        // 해당 날짜로 이동 (예: '/events/20250310')
        navigate(`/calender/${formattedDate}`);
    };



    return (
        <div>
            <h1>My Calendar</h1>
            <Calendar
                onClickDay={handleDayClick} // 날짜 클릭 시 handleDayClick 호출
                value={selectedDate} // 선택된 날짜
                locale='en-US'
            />
            <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p>
        </div>
    );
};

export default MyCalendar;
