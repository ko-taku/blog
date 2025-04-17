// src/utils/ethers.ts
import { ethers } from 'ethers';
import contractData from '../../../hardhat/artifacts/contracts/MyNFT.sol/MyNFT.json';

// 프로바이더 생성
const provider = new ethers.JsonRpcProvider('https://public-en-kairos.node.kaia.io');

// 프라이빗 키로 지갑을 연결하고 지갑 객체 반환
export const connectWallet = (privateKey: string): ethers.Wallet => {
    return new ethers.Wallet(privateKey, provider);
};

// 지갑 주소를 통해 잔액을 조회하고 반환
export const getBalance = async (wallet: ethers.Wallet): Promise<string> => {
    const balanceWei = await provider.getBalance(wallet.address);
    return ethers.formatEther(balanceWei);
};
