// import React from 'react';
// import './Casestudy.css';
// import miningvehical from "../../../assets/homepage/mining-vehical-casestudy.jpg";
// import deliveryrobort from "../../../assets/homepage/delivery-robot-casestudy.jpg";
// import Modelbutton from "../../ButtonComp/Modelbutton";

// // Document configuration matching backend expectations
// const CASE_STUDIES = {
//   MINING_VEHICLE: {
//     productName: 'CaseStudy',
//     documentName: 'e-con_mining-vehicles-camera-solution',
//     title: 'How e-con Systems helped equip large mining vehicles with custom multi-camera solutions to monitor blind spots',
//     image: miningvehical,
//     description: "e-con Systems helped a leading industrial automation provider in the mining sector to implement a custom multi-camera solution for large vehicles operating in high-risk environments.",
//   },
//   DELIVERY_ROBOT: {
//     productName: 'CaseStudy', 
//     documentName: 'delivery-robot-solution.pdf',
//     title: 'Customized Autonomous Delivery Robot Solution for a Leading Automotive and Mobility Supplier',
//     image: deliveryrobort,
//     description: "e-con Systems worked closely with a leading automotive and mobility supplier to develop a rugged, real-time vision solution for their autonomous delivery robots.",
//   }
// };

// const Casestudy = () => {
//   return (
//     <div className="casestudy-container">
//       <h2 className="section-title">Case Studies</h2>
//       <div className="case-study-grid">
//         {Object.values(CASE_STUDIES).map((study, index) => (
//           <div className="case-card" key={index}>
//             <div className="case-image">
//               <img src={study.image} alt={study.title} />
//             </div>
//             <div className="case-content">
//               <h3>{study.title}</h3>
//               <p>{study.description}</p>
//               <Modelbutton 
//                 className="case-button"
//                 text="Read Case Study"
//                 backgroundColor="#344ea1"
//                 productName="case-study"
//                 docName={study.documentName}
//                 title={study.title}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Casestudy;
import React from 'react';
import './Casestudy.css';
import productcase from "../../../assets/hubpage/casestudy/mining-card-img.jpg"
import { Link } from 'react-router-dom';
import AnimationButton from '../../ButtonComp/AnimationButton';

const ProductCaseStudy = () => {
  return (
    <div className="productcase-container">
      <h1 className="productcase-title">사례 연구</h1>
      <div className="productcase-card">
        <div className="productcase-card-left">
        
          <img
            src={productcase}
            alt="Sample Image"
            className="productcase-card-image"
          />
        </div>
        <div className="productcase-card-right">
        
          <h3 className="productcase-card-title">대형 광산 차량의 사각지대 제거를 위한 맞춤형 멀티 카메라 솔루션 구축</h3>
          
          <br></br>
          <p className="productcase-card-paragraph">
          e-con Systems는 고품질 이미징, IP67 등급 인클로저, 대형 광산 차량의 360° 가시성을 갖춘 견고하고 맞춤형 멀티 카메라 솔루션을 제공하여 고객이 사각지대를 극복하고 저조도 먼지가 많은 환경에서도 안전하게 작동할 수 있도록 지원했습니다.</p>
          <AnimationButton className="casestudy-btn" text="더 알아보기" backgroundColor="#003873"  hoverColor="#69ba2f" to="/case-study/rugged-multi-camera-setup-for-off-road-mining-vehicles"></AnimationButton>


        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ProductCaseStudy;
