// src/components/Mint.tsx
import React from 'react';
import { uploadFileToIPFS } from '../utils/pinata/upload.file';
import { uploadMetaData } from '../utils/pinata/upload.metadata';

interface MintProps {
    file: File | null;
    name: string;
    symbol: string;
    description: string;
    attributes: { trait_type: string; value: string }[];
}

const Mint: React.FC<MintProps> = ({ file, name, symbol, description, attributes }) => {

    const handleMinting = async () => {
        if (!file || !name || !symbol || !description) {
            alert('모든 정보를 입력해주세요.');
            return;
        }

        try {

            // 👉 로컬스토리지 저장 (배포 전에!)
            localStorage.setItem('nftName', name);
            localStorage.setItem('nftSymbol', symbol);

            // 1. 파일 업로드
            const fileUrl = await uploadFileToIPFS(file);

            // 2. 메타데이터 업로드
            const tokenUri = await uploadMetaData(fileUrl, name, description, attributes);

            console.log('Token URI:', tokenUri);
            // 민팅 관련 로직 추가 (예: 스마트 컨트랙트 호출 등)
        } catch (error) {
            console.error('민팅 오류:', error);
        }
    };

    return (
        <div>
            <button onClick={handleMinting}>민팅하기</button>
        </div>
    );
};

export default Mint;
