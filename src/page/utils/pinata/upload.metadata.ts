import { jwt } from './pinata.config';
import axios from 'axios';

export const uploadMetaData = async (
  fileUrl: string,
  name: string,
  description: string,
  attributes: { trait_type: string, value: string }[]
) => {
  //const imageUrl = await uploadFileToIPFS();

  const metadata = {
    name: name, // Todo: 원하는 이름을 넣습니다.
    description: description, // Todo: 원하는 이름을 넣습니다.
    image: fileUrl,
    attributes: attributes,
  };
  console.log('Metadata : ', metadata);

  const data = JSON.stringify({
    pinataMetadata: {
      name: metadata.name,
    },
    pinataContent: metadata,
  });

  try {
    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      data,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const tokenUri = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    console.log('\n메타데이터를 IPFS에 업로드합니다.');
    console.log('Metadata CID:', response.data.IpfsHash);
    console.log('Token URI:', tokenUri);
    return tokenUri;
  } catch (error: any) {
    console.error(error);
  }
};
