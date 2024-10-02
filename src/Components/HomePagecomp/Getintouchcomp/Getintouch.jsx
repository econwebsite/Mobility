import React, { useState } from 'react';
import './GetInTouch.css'; // CSS file for styling
import AnimationButton from "../../ButtonComp/AnimationButton"
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Future backend integration will go here
  };

  return (
    <div className="GetInTouch-container">
      <h2 className="GetInTouch-title">GET IN TOUCH</h2>
      <div className='mainContainer'>
      <form onSubmit={handleSubmit} className="GetInTouch-form">
        <div className="GetInTouch-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="GetInTouch-input"
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="GetInTouch-input"
          />
        </div>
        <div className="GetInTouch-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete='off' onPaste={(e) => {
              e.preventDefault()
              return false;
            }} 
            value={formData.email}
            onChange={handleChange}
            className="GetInTouch-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="GetInTouch-input"
          />
        </div>
        <div className="GetInTouch-submit">
          <AnimationButton text="Submit" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" className="GetInTouch-submit-btn"/>

        </div>
      </form>
      </div>
    </div>
  );
};

export default GetInTouch;
