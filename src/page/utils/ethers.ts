// src/utils/ethers.ts
import { ethers } from 'ethers';
import contractData from '../../page/nftComponent/nftJson/MyNFT.json';
import { Wallet } from 'web3';

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

export const mintNFT = async (
    wallet: ethers.Wallet,
    recipient: string,
    tokenURI: string
): Promise<{ tokenId: number; contractAddress: string }> => {
    const contract = new ethers.Contract(contractData.address, contractData.abi, wallet);
    //현재에는 배포된 스마트 컨트랙트가 onlyOwner 처리되어있어서 생성자만 nft 발행 가능

    const tx = await contract.mint(recipient, tokenURI);
    const receipt = await tx.wait();

    const event = receipt.logs.find((log: any) =>
        log.topics[0] === ethers.id('Transfer(address,address,uint256)')
    );

    if (!event) throw new Error('Transfer 이벤트를 찾을 수 없습니다.');

    const tokenIdHex = event.topics[3];
    const tokenId = parseInt(tokenIdHex, 16);

    return {
        tokenId,
        contractAddress: contract.target.toString()
    };

}
