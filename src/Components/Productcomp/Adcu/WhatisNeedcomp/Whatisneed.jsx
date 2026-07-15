import React from 'react';
import './Whatisneed.css';
import highPerformanceSoC from "../../../../assets/Productpage/adcu/high-performance-soc.jpg"
import flexiblesensor from "../../../../assets/Productpage/adcu/flexible-sensor.jpg"
import functionalSafety from "../../../../assets/Productpage/adcu/functional-safety.jpg"
import softwareEcosystem from "../../../../assets/Productpage/adcu/software-ecosystem.jpg"
import cuberSecurity from "../../../../assets/Productpage/adcu/cyber-security.jpg"
import ruggedAutomotiveGradeDesign from "../../../../assets/Productpage/adcu/rugged-automotive-grade-design.jpg"


const cardData = [
  {
    title: 'High Performance SoC',
    description:"Up to 100 TOPS gives the compute headroom to run multi-camera perception, SLAM, and obstacle detection simultaneously. This ensures the robot reacts in real time, even in busy outdoor environments",
    image: highPerformanceSoC,
  },
  {
    title: 'Flexible Sensor Connectivity',
    description: 'Eight GMSL2 camera ports, LiDAR/RADAR over Ethernet, CAN-FD for motor control, and IMU sync create a unified perception stack. The ADCU keeps all sensors time-aligned so the robot sees the world consistently.',
    image: flexiblesensor,
  },
  {
    title: 'Functional Safety',
    description: 'A dedicated safety MCU monitors system health and handles watchdog, emergency stop, and controlled fallback behavior. This prevents unsafe motion if the main SoC hangs or software crashes.',
    image:functionalSafety,
  },
   {
    title: 'Cyber Security & OTA Updates',
    description: 'Secure boot and encrypted firmware protect the robot from tampered software. Reliable OTA with rollback keeps the fleet updated without downtime or risk',
    image: cuberSecurity,
  },
   {
    title: 'Software Ecosystem & Scalability',
    description: 'ROS2, TensorRT, and Docker let teams deploy perception, planning, and fleet logic quickly. The same platform can scale from single robots to large fleets without rewriting core software',
    image: softwareEcosystem,
  },
  {
    title: 'Rugged Automotive-Grade Design',
    description: 'IP66/67 enclosure, wide temperature tolerance, and shock/vibration resistance keep the ADCU reliable outdoors. The system survives rain, dust, heat, and rough terrain common in delivery operations.',
    image: ruggedAutomotiveGradeDesign,
  },
  {
  type: 'features',
  title: 'What makes it essential?',
  features: [
    { image: highPerformanceSoC, label: 'High Performance SoC' },
    { image: flexiblesensor, label: 'Flexible Sensor Connectivity' },
    { image: functionalSafety, label: 'Functional Safety' },
    { image: cuberSecurity, label: 'Cyber Security & OTA Updates' },
    { image: softwareEcosystem, label: 'Software  Ecosystem & Scalability' },
    { image: ruggedAutomotiveGradeDesign, label: 'Rugged Automotive-Grade Design' }
  ]
}
];
const Whatisneed = () => {
  return (
    <div style={{backgroundColor:"#5F77B1"}}>
      <div className="whatisneed-container">
        <header className="whatisneed-header">
          <div>
            <h1>Why Choose e-con's Compute Box?</h1>
          </div>
        </header>

        <main>
          <ul className="whatisneed-cards" style={{ '--numcards': cardData.length }}>
            {cardData.map((card, index) => (
              <li
                className={`whatisneed-card ${index % 2 !== 0 ? 'reverse' : ''} ${card.type === 'features' ? 'features-card' : ''}`}
                key={index}
                style={{ '--index': index + 1 }}
              >
                {card.type === 'features' ? (
                  <div className="whatisneed-cardcontent">
                    <div className="features-content">
                      <h2>{card.title}</h2>
                      <div className="feature-items">
                        {card.features.map((feature, idx) => (
                          <div className="feature-item" key={idx}>
                            <div className="icon-wrapper">
                              <img 
                                src={feature.image} 
                                alt={feature.label} 
                                className="feature-icon"
                              />
                            </div>
                            <span>{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="whatisneed-cardcontent">
                    <div>
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                    </div>
                    <figure>
                      <img src={card.image} alt={card.title} />
                    </figure>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Whatisneed;