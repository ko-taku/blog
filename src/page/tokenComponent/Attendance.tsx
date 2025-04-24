import React, { useState } from 'react';
import { ethers } from 'ethers';
import * as ethersUtils from '../utils/ethers'; // ethers.ts에서 import

interface AttendanceProps {
    wallet: ethers.Wallet;
}

const Attendance: React.FC<AttendanceProps> = ({ wallet }) => {
    let nowDate = Math.floor(Date.now() / 1000);
    let possibleDate = Math.floor(Date.now() / 1000);
    const attendanceCoin = async () => {
        if (nowDate >= possibleDate) {

            try {

                alert("버튼 누르기 성공");

            } catch {

            }
        } else {
            alert("하루에 한 번 출석 가능합니다");
        }
    }




    return (
        <div>
            <button onClick={attendanceCoin}>출석하기</button>
        </div>
    );
};
export default Attendance;