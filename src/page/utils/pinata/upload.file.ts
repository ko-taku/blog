import { jwt } from './pinata.config';
import axios from 'axios';

export const uploadFileToIPFS = async (file: File) => {
  //const fileStream = await createReadStream();

  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', 'MyNFT_Image');
  formData.append('network', 'public');

  const response = await axios.post(
    'https://uploads.pinata.cloud/v3/files',
    formData,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  console.log('이미지를 IPFS에 업로드합니다');
  console.log(
    'Image :',
    `https://white-electoral-cat-947.mypinata.cloud/ipfs/${response.data.data.cid}`
  );

  return `https://white-electoral-cat-947.mypinata.cloud/ipfs/${response.data.data.cid}`;
};
