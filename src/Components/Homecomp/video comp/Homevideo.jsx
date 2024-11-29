import React, { useState } from 'react';
import './Homevideo.css';
import Vediothumbnail from "../../../assets/homepage/homevideothump.jpg"; 

import FsLightbox from "fslightbox-react";

function Homevideo() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="tot-denvedio">
      <div className='mainContainer'>
        <h2>Video</h2>
        <div className="video-title-container">
          <div className="home-thumbnail">
            <img
              src={Vediothumbnail}
              alt="Left Thumbnail"
              className="homeside-img"
              onClick={() => setToggler(!toggler)}
            />
          </div>

          <FsLightbox
            toggler={toggler}
            sources={[
              "https://www.youtube.com/embed/Bpg4bHDLZsY?autoplay=1" 
            ]}
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default Homevideo;
