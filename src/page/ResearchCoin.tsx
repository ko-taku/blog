import React from 'react';
import './ResearchCoin.css';

const ResearchCoin: React.FC = () => {

    const researchHubUrl = "https://firebasestorage.googleapis.com/v0/b/worldcommunity-ed8b9.appspot.com/o/images%2Fresearchhub.jpeg?alt=media&token=2e14df34-c057-4180-875b-c816a5dfa0fb"
    const rHBDisUrl = 'https://miro.medium.com/max/1400/1*8ZZ0XQdH9Bu344sA1tN39Q.png';
    return (
        <div>
            <img className='HubImg' src={researchHubUrl} width={350} height={250} />
            <ul className='list'>
                <li className='liList'>ResearchHub는 학술 연구의 공유, 협업, 및 보상 시스템을 제공하는 블록체인 기반 플랫폼</li>
                <li className='liList'>연구자들은 자신이 작성한 논문이나 데이터를 업로드하고, 이를 피드백하거나 수정하여 연구의 품질을 개선</li>
                <li className='liList'>ResearchHub는 오픈 액세스를 통해 연구 결과물을 누구나 열람하고, 자유롭게 공유</li>
            </ul>
            <h2 className='theme'>ResearchHub Coin이란?</h2>
            <ul className='list'>
                <li className='liList'>ERC-20 기반의 디지털 자산</li>
                <li className='liList'>ResearchCoin(RSC)은 ResearchHub 내에서 학술 과학을 공유, 큐레이팅, 논의함으로써 누구나 얻을 수 있는 보상 토큰</li>
                <li className='liList'>연구자가 자신의 연구를 공유하고, 이를 다른 연구자들이 평가하거나 사용하면 보상</li>
                <li className='liList'>블록체인 기술을 사용하여 연구의 기여도를 투명하게 기록하며 스마트 컨트랙트를 사용하여 보상을 자동으로 처리</li>
                <li className='liList'>토큰 경제는 연구자들이 더욱 적극적으로 연구를 공유하고, 평가에 참여하게끔 유도하는 중요한 요소</li>
                <li className='liList'>피드백 및 평가, 논문 개제 등에 토큰을 보상으로 연구의 퀄리티를 개선</li>
                <li className='liList'>사용자들은 가치 있는 콘텐츠에 팁을 주거나, 특정 과학적 작업(예: 동료들의 검토, 진단)의 완료를 장려하기 위해 바운티를 설정</li>
                <li className='liList'>연구자들의 기여도에 따라 토큰 보상 결정</li>
            </ul>

            <img className='HubDis' src={rHBDisUrl} width={380} height={300} />

            <h2 className='theme'>스테이킹과 거버넌스</h2>
            <ul className='list'>
                <li className='liList'>연구자들은 RSC 토큰을 스테이킹하여 ResearchHub의 거버넌스에 참여 가능</li>
                <li className='liList'>스테이킹된 토큰은 연구자가 플랫폼의 정책 결정이나 규칙 설정에 투표하는 데 사용</li>
                <li className='liList'>거버넌스에 참여하면 연구자들은 ResearchHub의 미래 발전 방향에 대한 결정권을 행사</li>
            </ul>
            <h2 className='theme'>최근 동향</h2>
            <ul className='list'>
                <li className='liList'>ResearchHub는 2024년 12월, 세계적인 학술 저널 Nature에 소개되며 주목</li>
                <li className='liList'>Nature는 리서치허브의 암호화폐를 통한 동료 검토 보상 모델에 대해 조명하며, 일부 연구자들이 이를 통해 재정적 기회를 얻고 있다고 평가</li>
            </ul>


        </div>
    );
};

export default ResearchCoin;
