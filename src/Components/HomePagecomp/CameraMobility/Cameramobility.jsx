import React, { useState } from 'react';
import './Cameramobility.css';
import truckcam from '../../../assets/homepage/Cameramobility-img.jpg'; // Replace with your image path
import AnimationButton from '../../ButtonComp/AnimationButton';

const Cameramobility = () => {
    const [activeContent, setActiveContent] = useState(1);
    const [isAnimated, setIsAnimated] = useState(false);

    const contentData = {
        1: {
            title: "1. Surround View Camera",
            description: "360-degree perception for enhanced safety and parking assistance.",
            buttonText: "Know more",
            to: "/surroundview",
            backgroundColor: "#344ea1"
        },
        2: {
            title: "2. Forward Facing Cameras",
            description: "Long-range object detection and narrow-angle visibility for enhanced lane detection and collision avoidance",
            buttonText: "Know more",
            to: "/forwardfacing",
            backgroundColor: "#00aeef"
        },
        3: {
            title: "3. Driver Monitoring Cameras",
            description: "Real-time driver behavior analysis to detect fatigue or distraction for improved safety.",
            buttonText: "Know more",
            to: "/drivermonitoring",
            backgroundColor: "#344ea1"
        },
    };

    // Handle button click to change content and trigger animation
    const handleClick = (contentIndex) => {
        setActiveContent(contentIndex);
        setIsAnimated(true);

        // Reset animation after it completes
        setTimeout(() => setIsAnimated(false), 400); 
    };

    return (
        <div className="Cameramobility-container">
            <h2 className="Cameramobility-title">CAMERAS FOR MOBILITY</h2>
            <div className="mainContainer">
                <div className="Cameramobility-content-container">
                    <div className="Cameramobility-left-column">
                        <div className="Cameramobility-image-container">
                            <img
                                src={truckcam}
                                alt="Camera for Mobility"
                                className="Cameramobility-camera-image"
                            />
                            <div className="Cameramobility-buttons-div">
                                <button
                                    className="Cameramobility-product1"
                                    onClick={() => handleClick(1)}
                                >
                                    1
                                </button>
                                <button
                                    className="Cameramobility-product2"
                                    onClick={() => handleClick(2)}
                                >
                                    2
                                </button>
                                <button
                                    className="Cameramobility-product3"
                                    onClick={() => handleClick(3)}
                                >
                                    3
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Add conditional class for animation */}
                    <div className={`Cameramobility-right-column ${isAnimated ? 'animated-box' : ''}`}>
                        <div className="Cameramobility-info-box">
                            <div className="Cameramobility-box-header">
                                <h3>{contentData[activeContent].title}</h3>
                            </div>
                            <div className="Cameramobility-full-underline"></div>
                            <p className="Cameramobility-description">
                                {contentData[activeContent].description}
                            </p>
                            <div className="Cameramobi-divbut">
                                <AnimationButton
                                    text={contentData[activeContent].buttonText}
                                    backgroundColor={contentData[activeContent].backgroundColor}
                                    hoverColor="white"
                                    animationColor="#69ba2f"
                                    to={contentData[activeContent].to}
                                    className="Cameramobility-know-more-btn"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cameramobility;
