// src/components/Nft.tsx
import React, { useState } from 'react';
import * as ethersUtils from './utils/ethers'; // ethers.ts에서 import
import { ethers } from 'ethers';
import { useEffect } from 'react';
import Attendance from './tokenComponent/Attendance';

const Token: React.FC = () => {
    const [userPrivateKey, setUserPrivateKey] = useState('');
    const [wallet, setWallet] = useState<ethers.Wallet | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<number>(1); // 1 = 기본, 2 = 탭2, 3 = 탭3

    const handlePrivateKeyValidation = async () => {
        try {
            const walletInstance = ethersUtils.connectWallet(userPrivateKey);

            const hostPrivateKey = process.env.REACT_APP_PRIVATE_KEY;
            if (!hostPrivateKey) {
                console.error('REACT_APP_PRIVATE_KEY is not defined');
                return;
            }
            const hostWallet = ethersUtils.connectWallet(hostPrivateKey)

            const balanceEth = await ethersUtils.getBalance(walletInstance);
            const balanceOwnerEth = await ethersUtils.getBalance(hostWallet);

            setWallet(walletInstance);
            setBalance(balanceEth);

            setActiveTab(2);
            console.log('지갑 주소: ', walletInstance.address);
            console.log('오너 지갑 주소: ', hostWallet.address);
            console.log('잔액: ', balanceEth);
            console.log('오너 잔액: ', balanceOwnerEth);
        } catch (error) {
            console.log('프라이빗 키 유효성 검사 실패', error);
        }

    }

    return (
        <div className="container">
            <h2 className="title">TOKEN</h2>

            {/* 탭 메뉴 */}
            <div className="tabs">
                <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>
                    1. 지갑 연결
                </button>
                {/* 지갑이 연결되었을 때만 나머지 탭 보이기 */}
                {wallet && (
                    <>
                        <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>
                            2. NFT 정보
                        </button>
                        <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'active' : ''}>
                            3. 민팅하기
                        </button>
                    </>
                )}
            </div>

            {/* 탭 1 - 지갑 연결 */}
            {activeTab === 1 && (
                <div className="tab-content">
                    {wallet ? (
                        <>
                            <h3>지갑 정보</h3>
                            <p><strong>주소:</strong> {wallet.address}</p>
                            <p><strong>잔액:</strong> {balance} KAIA</p>
                            {wallet && (< Attendance
                                wallet={wallet} />)}
                        </>
                    ) : (
                        <>
                            <label className="label">Private Key</label>
                            <div className="input-section">
                                <input
                                    type="password"
                                    className="inputPriviteKey"
                                    value={userPrivateKey}
                                    onChange={(e) => setUserPrivateKey(e.target.value)}
                                    placeholder="프라이빗 키 입력"
                                />
                                <button className="Privatebutton" onClick={handlePrivateKeyValidation}>지갑 연결</button>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* 탭 2 - NFT 정보 */}
            {activeTab === 2 && (
                <div className="tab-content">
                    {wallet ? (
                        <>
                            <h3>Attendance</h3>
                            <p><strong>주소:</strong> {wallet.address}</p>
                            <p><strong>잔액:</strong> {balance} KAIA</p>
                        </>
                    ) : (
                        <p className="info">❗ 지갑을 먼저 연결해주세요.</p>
                    )}
                </div>
            )}

            {/* 탭 3 - 민팅 */}
            {activeTab === 3 && (
                <div className="tab-content">
                    {wallet ? (
                        <>
                            {/* <Upload
                                onFormDataReady={({ file, name, symbol, description, attributes }) => {
                                    setFile(file);
                                    setName(name);
                                    setSymbol(symbol);
                                    setDescription(description);
                                    setAttributes(attributes);


                                }}
                            /> */}
                            {/* 민팅 탭에 Mint 컴포넌트 추가 수정 필요*/}
                            {/* {file && name && symbol && description && (
                                <Mint
                                    file={file}
                                    name={name}
                                    symbol={symbol}
                                    description={description}
                                    attributes={attributes}
                                    wallet={wallet}
                                />
                            )} */}
                        </>
                    ) : (
                        <p className="info">❗ 지갑을 먼저 연결해야 민팅할 수 있습니다.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Token;
