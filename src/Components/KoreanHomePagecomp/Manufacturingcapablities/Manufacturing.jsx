import React from "react";
import "./Manufacturing.css";

const Manufacturing = () => {
  const facilities = [
    "이미징 랩",
    "기계 설계 연구소",
    // "Vibration Shaker",
    // "Environmental Chamber",
    "복합 진동 및 환경 챔버",
    "EMC 챔버",
    "ESD 연구소",
    "신뢰성 연구소"
  ];

  return (
    <section className="manufacturing-comp-section">
      <div className="manufacturing-comp-glow"></div>

      <div className="manufacturing-comp-wrapper">
        <h2 className="manufacturing-comp-heading">
          <span className="manufacturing-comp-heading-gradient">제조 및 시험 시설</span>
        </h2>

        <p className="manufacturing-comp-description">
          ADAS 카메라 생산 및 테스트를 위한 최고 품질 기준을 보장하는 업계 선도적인 프로세스입니다.
        </p>

        <div className="manufacturing-comp-grid">
          {facilities.map((facility, index) => (
            <div
              className="manufacturing-comp-card"
              key={index}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="manufacturing-comp-card-inner">
                <div className="manufacturing-comp-hover-gradient"></div>
                <div className="manufacturing-comp-content">
                  <h3 className="manufacturing-comp-title">{facility}</h3>
                  <div className="manufacturing-comp-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
