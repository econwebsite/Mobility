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
      <h1 className="productcase-title">Case Study</h1>
      <div className="productcase-card">
        <div className="productcase-card-left">
        
          <img
            src={productcase}
            alt="Sample Image"
            className="productcase-card-image"
          />
        </div>
        <div className="productcase-card-right">
        
          <h3 className="productcase-card-title">Building a Customized Multi-Camera Solution for Blind Spot Elimination in Large Mining Vehicles</h3>
          
          <br></br>
          <p className="productcase-card-paragraph">
          e-con Systems enabled a rugged, custom multi-camera solution with high-quality imaging, IP67-rated enclosure and 360° visibility for large mining vehicles—helping the customer to overcome blind spots and operate safely in low-light, dusty environments.</p>
          <AnimationButton className="casestudy-btn" text="Read more" backgroundColor="#003873"  hoverColor="#69ba2f" to="/case-study/rugged-multi-camera-setup-for-off-road-mining-vehicles"></AnimationButton>


        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ProductCaseStudy;
