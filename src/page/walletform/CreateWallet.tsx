import React, { useState } from 'react';
import Web3 from 'web3';
import WalletInfo from './WalletInfo';
import { Link } from 'react-router-dom';  // Link 컴포넌트 임포트
import './CreateWallet.css';  // CSS 파일 import

const CreateWallet: React.FC = () => {
    const web3 = new Web3('https://holesky.infura.io/v3/b4aecef1425645f7ac7cfb92acc55bcd');
    const [wallet, setWallet] = useState<any | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [copySuccess, setCopySuccess] = useState<boolean>(false);  // Copy success state

    const createWallet = () => {
        const newWallet = web3.eth.accounts.create();
        setWallet(newWallet);
        setBalance(null);
        setTxHash(null);
    };

    const getBalance = async () => {
        if (!wallet) return;
        const balanceWei = await web3.eth.getBalance(wallet.address);
        setBalance(web3.utils.fromWei(balanceWei, 'ether'));
    };

    const copyPrivateKey = async () => {
        if (wallet) {
            try {
                await navigator.clipboard.writeText(wallet.privateKey);
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            } catch (err) {
                console.error('복사 실패:', err);
            }
        }
    };

    return (
        <div className="create-wallet-container">
            <h2 className="title">CREATE WALLET</h2>

            {!wallet ? (
                <button onClick={createWallet} className="create-wallet-btn">Create Wallet</button>
            ) : (
                <>
                    <WalletInfo wallet={wallet} />
                    <div className="private-key-section">
                        <strong className="privateKeyText">Private Key</strong>
                        <div className="private-key-container">
                            <input
                                type="text"
                                className="private-key-input"
                                value="*********************************"  // 프라이빗 키를 숨기기 위해 표시를 "**********"로 설정
                                readOnly
                            />
                            <button onClick={copyPrivateKey} className="copy-btn">
                                copy
                            </button>
                        </div>
                        {copySuccess && <span className="copy-success">✔ copyed!</span>}
                    </div>
                    <div className="balance-section">
                        <button onClick={getBalance} className="balance-btn">잔액 조회</button>
                        {balance && <p className="balance-info">{balance} KAIA</p>}
                    </div>
                    {/* Link 컴포넌트를 사용하여 지갑 사용하기 버튼 클릭 시 이동 */}
                    <Link to="/walletuse"><button className="use-wallet-btn">지갑 사용하기</button>
                    </Link>

                </>
            )}

        </div>
    );
};

export default CreateWallet;
