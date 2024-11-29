import React from 'react';
import './Whychoose.css'; 
import twenty from "../../../assets/homepage/20years.svg";
import perfect from "../../../assets/homepage/perfectcomp.svg";
import deep from "../../../assets/homepage/deepexpertice.svg";
import proven from "../../../assets/homepage/proventrack.svg";

const KeyFeatures = () => {
  const cards = [
    { id: 1, title: 'Extensive experience of 20+ years in tuning ISPs to deliver top-notch image quality.', icon: twenty },
    { id: 2, title: 'Trusted provider of tailored retail solutions for leading global retailers.', icon: perfect },
    { id: 3, title: 'Dedicated support with rapid response times, ensuring continuous operational efficiency for our retail clients', icon: deep },
    { id: 4, title: 'Proven track record in customization, adapting to unique retail monitoring requirements.', icon: proven }
  ];

  return (
    <div className="why-choose-container">
      <h1 className="why-choose-title">Why choose e-con Systems ?</h1>
      <div className="mainContainer">
        <div className="why-choose-grid">
          {cards.map(card => (
            <div className="why-choose-card" key={card.id}>
              <div className="why-choose-icon-container">
                <img src={card.icon} alt="icon" className="why-choose-icon" />
              </div>
              <p className="why-choose-text">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
