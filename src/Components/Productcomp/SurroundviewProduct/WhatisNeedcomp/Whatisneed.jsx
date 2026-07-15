import React from 'react';
import './Whatisneed.css';
import hdr from "../../../../assets/Productpage/what-needed/high-dynamic-range.jpg"
import highsensitivity from "../../../../assets/Productpage/what-needed/high-sensitivity.jpg"
import longrange from "../../../../assets/Productpage/what-needed/long-range-interface.jpg"
import synchronization from "../../../../assets/Productpage/what-needed/camera-synchronization.jpg"
import hightperfisp from "../../../../assets/Productpage/what-needed/high-performance-isp.jpg"
import ip69k from "../../../../assets/Productpage/what-needed/ip69k.jpg"


const cardData = [
  {
    title: 'High dynamic range (HDR)',
    description:"HDR helps capture balanced images even in scenes with extreme contrast between bright and dark areas. It reduces motion blur and distortion by adjusting exposure across the frame. For mobility systems, our cameras provide clear visuals during quick lighting transitions like entering tunnels or facing oncoming headlights.",
    image: hdr,
  },
  {
    title: 'High sensitivity',
    description: 'High sensitivity enables the camera to perform well in daylight and low-light conditions. It captures more light per frame by using larger pixel sizes, which reduces noise and improves image clarity. That way, our cameras ensure the system is equipped for nighttime operations, shadow-heavy environments, or sudden lighting shifts.',
    image: highsensitivity,
  },
  {
    title: 'Long range interface',
    description: 'Surround-view cameras may be placed far from the central processor, so long-range data transmission is important. Our cameras come with interfaces like GMSL or FPD-Link III to send high-resolution video, power, and control signals over a single cable. This minimizes signal degradation, keeps latency low, and simplifies the wiring.',
    image:longrange,
  },
   {
    title: 'Multi-camera synchronization',
    description: 'Accurate 360-degree views depend on synchronized image capture from multiple cameras. This prevents mismatches in frame timing and improves stitching quality. Our cameras are equipped with synchronization capabilities to help make real-time decisions from stitched images. It reduces post-processing load and delivers faster, more stable outputs in safety-critical missions.',
    image: synchronization,
  },
   {
    title: 'High performance ISP',
    description: 'A powerful ISP improves the image quality of mobility systems by handling tasks like noise reduction, color correction, and tone mapping. Our cameras’ inbuilt ISP ensures that raw sensor data is converted into clean, usable images without external processing. It results in consistent performance across all lighting conditions.',
    image: hightperfisp,
  },
  {
    title: 'Rugged enclosure',
    description: 'Surround-view cameras tend to be mounted low or exposed. Our IP69K-rated housing withstands pressure washes, rain, mud, and off-road debris, keeping the system reliable in harsh, all-weather conditions',
    image: ip69k,
  },
  {
  type: 'features',
  title: 'What is needed?',
  features: [
    { image: hdr, label: 'High dynamic range (HDR)' },
    { image: highsensitivity, label: 'High sensitivity' },
    { image:longrange, label: 'Long range interface' },
    { image: synchronization, label: 'Multi-camera synchronization' },
    { image: hightperfisp, label: 'High performance ISP' },
    { image: ip69k, label: 'Rugged enclosure' }
  ]
}
];
const Whatisneed = () => {
  return (
    <div style={{backgroundColor:"#5F77B1"}}>
      <div className="whatisneed-container">
        <header className="whatisneed-header">
          <div>
            <h1>What is needed?</h1>
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