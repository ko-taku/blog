import React from 'react';
import CreateWallet from './CreateWallet';

interface WalletInfoProps {
    wallet: any;
}

const WalletInfo: React.FC<WalletInfoProps> = ({ wallet }) => {
    return (
        <div>
            <h3 className="completeText">Create Complete!</h3>
            <p><strong className='addressTitle'>Address </strong> {wallet.address}</p>
            {/* 새 지갑 생성에서는 privateKey도 보여줄 수 있음 */}

        </div>
    );
};

export default WalletInfo;
