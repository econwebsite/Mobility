import React from 'react';
import incabinfov from "../../../../assets/Productpage/what-needed/incabin-fov.jpg"
import globalshutter from "../../../../assets/Productpage/what-needed/global-shutter.jpg"
import nirsensitivity from "../../../../assets/Productpage/what-needed/nir-sensitivity.jpg"


const cardData = [

  {
    title: 'Wide field of view (FOV)',
    description: 'Driver monitoring requires full cabin visibility, from facial cues to hand movements. Our cameras feature a wide FoV to track the driver’s posture, gaze, and behavior without blind spots. So, mobility systems can interpret engagement levels and trigger safety responses in real time, across passenger vehicles, trucks, or autonomous platforms.',
    image: incabinfov,
  },
  {
    title: 'Global shutter',
    description: 'In-cabin vibrations or rapid head movements can blur images with rolling shutter sensors. Our cameras use global shutter technology to capture frames without distortion, even during sudden motion. It is critical for high-speed monitoring of micro-expressions, eye blinks, or gestures, delivering clean input for in-cabin analytics and behavioral AI models.',
    image:globalshutter,
  },
  {
    title: 'Near-Infrared (NIR) sensitivity',
    description: 'Our cameras are tuned for high NIR sensitivity, enabling them to operate alongside IR illumination with minimal noise and high contrast. They provide crisp imaging in dark or enclosed environments. It helps mobility systems identify fatigue, distraction, or unauthorized access, regardless of ambient light inside the vehicle.',
    image: nirsensitivity,
  },
  {
    type: 'features',
    title: 'What is needed?',
    features: [
      { image: incabinfov, label: 'Wide field of view (FOV)' },
      { image:globalshutter, label: 'Global shutter' },
      { image: nirsensitivity, label: 'Near-Infrared (NIR) sensitivity' },
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
                                
                                className="feature-icon1"
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