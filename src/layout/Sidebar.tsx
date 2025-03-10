import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>taku's Blog</h2>
            <ul>
                <li><Link to="/"><HomeRoundedIcon fontSize="large" /></Link>main</li>
                <li><Link to="/about"><PersonSharpIcon fontSize='large' /></Link>introduce</li>
                <li><Link to="/calender"><EditCalendarRoundedIcon fontSize='large' /></Link>til</li>
                <li><Link to="/wallet"><WalletRoundedIcon fontSize='large' /></Link>wallet</li>
            </ul>
        </div>
    );
};

export default Sidebar;
