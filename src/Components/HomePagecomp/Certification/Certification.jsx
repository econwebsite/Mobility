import React from 'react';
import certification1 from "../../../assets/homepage/certificates-01.png";
import certification2 from "../../../assets/homepage/certificates-02.png";
import certification3 from "../../../assets/homepage/certificates-03.png";
import certification4 from "../../../assets/homepage/certificates-04.png";
import './Certification.css';

const Certification = () => {
    return (
        <div className="certification-container">
            <h1 className="certification-title">CERTIFICATIONS</h1>
            <div className='mainContainer'>

            <div className="certification-grid">
                <div className="certification-box">
                    <img src={certification1} alt="Certification 1" className="certification-image" />
                </div>
                <div className="certification-box">
                    <img src={certification2} alt="Certification 2" className="certification-image" />
                </div>
                <div className="certification-box">
                    <img src={certification3} alt="Certification 3" className="certification-image" />
                </div>
                <div className="certification-box">
                    <img src={certification4} alt="Certification 4" className="certification-image" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Certification;
