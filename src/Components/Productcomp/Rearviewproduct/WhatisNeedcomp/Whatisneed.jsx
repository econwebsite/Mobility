import React from 'react';
import hdr from "../../../../assets/Productpage/what-needed/high-dynamic-range.jpg"
import fov from "../../../../assets/Productpage/what-needed/wide-field-view.jpg"
import highsensitivity from "../../../../assets/Productpage/what-needed/high-sensitivity.jpg"
import ip69k from "../../../../assets/Productpage/what-needed/ip69k.jpg"

const cardData = [
  {
    title: 'High dynamic range (HDR)',
    description:"Rear-view conditions include direct sunlight, shaded areas, or harsh reflections. HDR ensures our cameras can adjust exposure dynamically to capture balanced images. It keeps critical elements like approaching vehicles, pedestrians, or loading docks clearly visible. In turn, this improves driver awareness and supports safe reversing or automated docking despite unpredictable lighting.",
    image: hdr,
  },
   {
    title: 'Wider field of view (FoV)',
    description: 'Rear visibility demands broader coverage to detect hazards, blind spots, or moving objects across wide angles. Our cameras support wide FoV lenses that enhance spatial awareness during parking, reversing, and docking maneuvers.',
    image: fov,
  },
  {
    title: 'High sensitivity',
    description: 'Low-light environments like warehouses, shaded alleys, or nighttime loading zones require reliable image capture. Our high-sensitivity cameras pick up more light with less noise, delivering sharper rear visuals even under minimal illumination.',
    image: highsensitivity,
  },
  {
    title: 'Rugged enclosure',
    description: 'Rear-mounted cameras are exposed to water, dust, mud, and pressure washdowns. Our cameras come housed in IP69K-rated enclosures that withstand harsh outdoor conditions. It ensures superior performance through rain, snow, high-pressure cleaning, and off-road grime. Rear-view functionality is kept intact across industrial, commercial, and all-weather mobility operations.',
    image:ip69k,
  },
  {
    type: 'features',
    title: 'What is needed?',
    features: [
      { image: hdr, label: 'High dynamic range (HDR)' },
      { image: fov, label: 'Wider field of view (FoV)' },
      { image:highsensitivity, label: 'High sensitivity' },
      { image: ip69k, label: 'Rugged enclosure' },
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