import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // BrowserRouter 임포트
import Sidebar from './layout/Sidebar';
import Home from './page/Home';
import About from './page/About';
import Calender from './page/Calender';
import Wallet from './page/Wallet';
import CalenderPage from './page/CalenderPage';
import Cronos from './page/coinInfo/Cronos';
import ResearchCoin from './page/coinInfo/ResearchCoin';
import CreateWallet from './page/walletform/CreateWallet';
import WalletUse from './page/walletform/WalletUse';
import Explorer from './page/Explorer';
import Nft from './page/Nft';
import Token from './page/Token';
import CoinInfo from './page/CoinInfo';
import ConsensusMechanisms from './page/coinInfo/ConsensusPage';
import ConsensusPage from './page/coinInfo/ConsensusPage';

function App() {
  return (
    <BrowserRouter basename="/blog"> {/* Router를 BrowserRouter로 변경 */}
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/wallet" element={<Wallet />} /> {/* W -> Wallet로 수정 */}
            <Route path='/calender/:date' element={<CalenderPage />} />
            <Route path='/coinInfo' element={<CoinInfo />} />
            <Route path='/coinInfo/researchCoin' element={<ResearchCoin />} />
            <Route path='/coinInfo/cronos' element={<Cronos />} />
            <Route path='/coinInfo/consensusPage' element={<ConsensusPage />} />
            <Route path='/CreateWallet' element={<CreateWallet />} />
            <Route path='/WalletUse' element={<WalletUse />} />
            <Route path='/Explorer' element={<Explorer />} />
            <Route path='/Nft' element={<Nft />} />
            <Route path='/Token' element={<Token />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
