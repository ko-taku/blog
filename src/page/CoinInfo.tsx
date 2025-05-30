import React from 'react';
import { Link } from 'react-router-dom';

const CoinInfo: React.FC = () => {
    return (
        <div>
            <div><Link to="/coinInfo/researchCoin">ResearchCoin</Link></div>
            <div><Link to="/coinInfo/cronos">Cronos</Link></div>
            <div><Link to="/coinInfo/consensusPage">A Systematic Literature Review on Blockchain Consensus Mechanisms</Link></div>
        </div>
    );
};

export default CoinInfo;
