import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // BrowserRouter 임포트
import Sidebar from './layout/Sidebar';
import Home from './page/Home';
import About from './page/About';
import Calender from './page/Calender';
import Wallet from './page/Wallet';
import CalenderPage from './page/CalenderPage';
import Cronos from './static/Cronos';
import ResearchCoin from './page/ResearchCoin';

function App() {
  return (
    <BrowserRouter> {/* Router를 BrowserRouter로 변경 */}
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/wallet" element={<Wallet />} /> {/* W -> Wallet로 수정 */}
            <Route path='/calender/:date' element={<CalenderPage />} />
            <Route path='/cronos' element={<Cronos />} />
            <Route path='/ResearchCoin' element={<ResearchCoin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
