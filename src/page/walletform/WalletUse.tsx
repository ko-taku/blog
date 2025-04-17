import React, { useState } from 'react';
import Web3 from 'web3';
import '../css/WalletUse.css';  // CSS 파일 import

const web3 = new Web3('https://public-en-kairos.node.kaia.io');

const WalletUse: React.FC = () => {
    const [privateKey, setPrivateKey] = useState<string>('');
    const [balance, setBalance] = useState<string | null>(null);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState<string | null>(null);
    const [gasPrice, setGasPrice] = useState<string>('0');
    const [finalAmount, setFinalAmount] = useState<string>('0');
    const [txHash, setTxHash] = useState<string | null>(null);
    const [sentAmount, setSentAmount] = useState<string>('0');
    const [sentRecipient, setSentRecipient] = useState<string>('');
    const [gasFee, setGasFee] = useState<string>('0');
    const [sentFrom, setSentFrom] = useState<string>('');  // 송금한 사람 주소
    const [sentTime, setSentTime] = useState<string>('');  // 송금 시간
    const [isSending, setIsSending] = useState(false);
    const [showTransactionHistory, setShowTransactionHistory] = useState(false);

    const handlePrivateKeyValidation = async () => {
        try {
            const account = web3.eth.accounts.privateKeyToAccount(privateKey);
            const balanceWei = await web3.eth.getBalance(account.address);
            setBalance(web3.utils.fromWei(balanceWei, 'ether'));
            setAddress(account.address);
        } catch (error) {
            console.error('프라이빗 키 유효성 검사 실패:', error);
        }
    };

    const calculateGasFee = async (amount: string) => {
        if (!address || !amount) return;

        const gasPriceWei = await web3.eth.getGasPrice();
        const gasPriceEther = web3.utils.fromWei(gasPriceWei, 'ether');
        console.log('gasPriceEther:', gasPriceEther);
        setGasPrice(gasPriceEther);

        const gasLimit = 21000;

        const gasFeeInEther = (parseFloat(gasPriceEther) * gasLimit).toFixed(18);
        console.log('gasFeeInEther:', gasFeeInEther);
        setGasFee(gasFeeInEther);

        const finalAmountInEther = (parseFloat(amount) - parseFloat(gasFeeInEther)).toFixed(18);
        console.log('finalAmountInEther:', finalAmountInEther);
        setFinalAmount(finalAmountInEther);
    };

    const sendTransactionFromPrivateKey = async () => {
        if (!address || !recipient || !amount) return;

        setIsSending(true);
        try {
            const value = web3.utils.toWei(amount, 'ether');
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 21000;

            const tx = {
                from: address,
                to: recipient,
                value,
                gas: gasLimit,
                gasPrice,
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
            const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            const txHashHex = web3.utils.toHex(sentTx.transactionHash);
            setTxHash(txHashHex);

            const newBalanceWei = await web3.eth.getBalance(address);
            const newBalance = web3.utils.fromWei(newBalanceWei, 'ether');
            setBalance(newBalance);

            // 송금 후 정보 상태 설정
            setSentAmount(amount);
            setSentRecipient(recipient);
            setGasFee(gasFee);
            setSentFrom(address);  // 송금한 사람 (from) 주소 저장

            // 보내진 시간: 트랜잭션의 블록 타임스탬프 가져오기
            const block = await web3.eth.getBlock(sentTx.blockNumber);
            const timestamp = new Date(Number(block.timestamp) * 1000).toLocaleString(); // 시간을 읽을 수 있는 형식으로 변환
            setSentTime(timestamp);

            console.log('송금 성공, 트랜잭션 해시:', sentTx.transactionHash);
        } catch (error) {
            console.error('송금 실패:', error);
        } finally {
            setIsSending(false);
        }
    };

    const handleShowTransactionHistory = () => {
        setShowTransactionHistory(!showTransactionHistory);
    };

    return (
        <div className="container">
            <h2 className="title">WALLET</h2>

            <label className="label">Private Key</label>
            <div className="input-section">
                <input
                    type="password"
                    className="inputPriviteKey"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                    placeholder="프라이빗 키 입력"
                />
                <button className="Privatebutton" onClick={handlePrivateKeyValidation}>확인</button>
            </div>

            {balance && (
                <div className="balance-section">
                    <div className="balance-info">
                        <p><strong>잔액</strong> {balance} KAIA</p>
                    </div>

                    <div className="transaction-section">
                        <div className="input-container">
                            <input
                                type="text"
                                className="input"
                                placeholder="받는 주소"
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                            />
                        </div>

                        <div className="input-container">
                            <input
                                type="text"
                                className="input"
                                placeholder="보낼 금액 (KAIA)"
                                value={amount}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setAmount(value);
                                    calculateGasFee(value);
                                }}
                            />
                        </div>

                    </div>

                    <div className="gas-info">
                        <p><strong>가스비</strong> {gasPrice} ETH</p>
                        <p><strong>실제 송금액</strong> {parseFloat(finalAmount).toFixed(5)}  KAIA</p>
                    </div>
                    <div>
                        <button className="button" onClick={sendTransactionFromPrivateKey} disabled={isSending}>
                            {isSending ? '송금 중...' : '송금'}
                        </button>
                    </div>
                </div>
            )}


            {/* 송금 성공 후 트랜잭션 해시 표시 */}
            {txHash && (
                <p className="transaction-hash">
                    ✅ <strong>트랜잭션 해시</strong>{' '}
                    <a
                        href={`https://kairos.kaiascan.io/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {txHash}
                    </a>
                </p>
            )}

            {/* 송금 후 트랜잭션 정보 표시 */}
            {txHash && (
                <div className="transaction-info">
                    <h3>송금 정보</h3>
                    <p><strong>From</strong> {sentFrom}</p>
                    <p><strong>To</strong> {sentRecipient}</p>
                    <p><strong>Price</strong> {sentAmount} KAIA</p>
                    <p><strong>Gas</strong> {parseFloat(gasFee).toString().replace(/\.?0+$/, '')} Ether</p>
                    <p><strong>Time</strong> {sentTime}</p>
                </div>
            )}

            {/* 이전 거래 내역 보기 버튼 */}
            {address && (
                <div className="transaction-history">
                    <button className="button" onClick={handleShowTransactionHistory}>
                        {showTransactionHistory ? '거래 내역 숨기기' : '이전 거래 내역 보기'}
                    </button>

                    {showTransactionHistory && (
                        <div>
                            <h3>이전 거래내역</h3>
                            <iframe
                                src={`https://kairos.kaiascan.io/address/${address}?tabId=txList&page=1`}
                                className="transaction-history-frame"
                                title="트랜잭션 내역"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default WalletUse;
