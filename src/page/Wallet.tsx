import React from 'react';
import { Link } from 'react-router-dom';

const Wallet: React.FC = () => {
    return (
        <div>
            <div><Link to="/CreateWallet">createWallet</Link></div>
            <div><Link to="/WalletUse">WalletUse</Link>월렛유즈</div>

        </div>
    );
};

export default Wallet;
