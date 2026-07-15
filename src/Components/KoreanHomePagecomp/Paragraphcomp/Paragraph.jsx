import React from 'react';
import './Paragraph.css';

const Paragraph = () => {
  return (
    <div className="containerparagraph">
      <div className="mainContainer">
        <p className="paragraphtext">
        e-con Systems의 산업용 ADAS 카메라는 어려운 야외 환경에서도 뛰어난 화질과 신뢰성을 위해 설계되었습니다. 첨단 HDR, LFM 기능, 원활한 다중 카메라 동기화 및 고성능 ISP를 갖춘 이 카메라는 배송 로봇, 자율 주행 차량, 오프로드 차량 등 다양한 모빌리티 애플리케이션에 이상적이며, 농업용 차량, 광산용 차량, 전 지형 차량(ATV)을 포함합니다.</p>
        <p className="paragraphtext"> 혹독한 환경에서도 견딜 수 있도록 제작된 저희의 견고한 카메라는 먼지, 물, 극한 온도, 고압, 진동 및 충격으로부터 보호하기 위한 IP69K 표준을 충족하며, ISO 표준을 준수하여 모빌리티 애플리케이션에서 신뢰할 수 있는 성능을 보장합니다.
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
