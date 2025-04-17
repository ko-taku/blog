// src/page/nftComponent/Upload.tsx
import React, { useState } from 'react';

interface Attribute {
    trait_type: string;
    value: string;
}

interface UploadProps {
    onFormDataReady: (data: {
        file: File;
        name: string;
        symbol: string;
        description: string;
        attributes: Attribute[];
    }) => void;
}

const Upload: React.FC<UploadProps> = ({ onFormDataReady }) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState('');
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [description, setDescription] = useState('');
    const [attributes, setAttributes] = useState<Attribute[]>([
        { trait_type: '', value: '' }
    ]);

    const handleAttributeChange = (index: number, field: keyof Attribute, value: string) => {
        const updated = [...attributes];
        updated[index][field] = value;
        setAttributes(updated);
    };

    const addAttributeField = () => {
        setAttributes([...attributes, { trait_type: '', value: '' }]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handlePrepare = () => {
        if (file && name && symbol && description) {

            console.log('민팅 준비 완료 ✅');
            console.log('파일:', file);
            console.log('이름:', name);
            console.log('심볼:', symbol);
            console.log('설명:', description);
            console.log('어트:', attributes);

            onFormDataReady({ file, name, symbol, description, attributes });
        } else {
            alert('모든 정보를 입력해주세요.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {preview && <img src={preview} alt="미리보기" style={{ width: '200px' }} />}

            {file && (
                <div>
                    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
                    <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <h4>🧬 Attributes</h4>
                    {attributes.map((attr, index) => (
                        <div key={index} style={{ marginBottom: '8px' }}>
                            <input
                                placeholder="trait_type"
                                value={attr.trait_type}
                                onChange={(e) => handleAttributeChange(index, 'trait_type', e.target.value)}
                            />
                            <input
                                placeholder="value"
                                value={attr.value}
                                onChange={(e) => handleAttributeChange(index, 'value', e.target.value)}
                            />
                        </div>
                    ))}
                    <button onClick={addAttributeField}>+ 속성 추가</button>

                    <br />

                    <button onClick={handlePrepare}>민팅 정보 준비</button>
                </div>
            )}
        </div>
    );
};

export default Upload;
