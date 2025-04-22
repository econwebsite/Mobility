import React, { useState } from 'react';
import axios from 'axios';
import { message, Dropdown, Menu } from 'antd';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import econlogo from "../../assets/homepage/footerlogo-1.svg";
import './Footerpage.css';

const Footerpage = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    try {
      const response = await axios.post('http://localhost:4002/api/validateEmail', { email });
      return ['valid', 'catch-all', 'role-basic'].includes(response.data.status) && !response.data.free_email;
    } catch (error) {
      console.error('Email validation error:', error);
      return false;
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setIsValid(false);
      return;
    }
    const isValidEmail = await validateEmail();
    if (!isValidEmail) {
      setIsValid(false);
      return;
    }
    try {
      await axios.post('http://localhost:4002/api/emailSubscription', { email });
      message.success('Thank you for subscribing!');
      setEmail('');
      setIsValid(true);
    } catch (error) {
      console.error('Subscription error:', error);
      message.error('Subscription failed. Please try again.');
    }
  };

  const menu = (
    <Menu > 
      <Menu.Item key="1">
        <Link to="/surround-view-camera" className='Footer-menuLinks'>Surround View Cameras</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/forward-facing-camera" className='Footer-menuLinks'>Forward Facing Cameras</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/rear-view-camera" className='Footer-menuLinks'>Rear View Cameras</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/driver-monitoring-camera" className='Footer-menuLinks'>In-Cabin Monitoring Cameras</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <footer className="Footer-container">
      <div className="Footer-content">
        <div className="Footer-grid">
          <div className="Footer-section">
            <h3 className="Footer-heading">Quick Links</h3>
            <nav className="Footer-nav">
              <Link to="/" className="Footer-link">Home</Link>
              <Dropdown overlay={menu} placement="bottomLeft">
                <button className="Footer-dropdownToggle">Products</button>
              </Dropdown>
              <Link to="/industries" className="Footer-link">Industries</Link>
              <Link to="/blog" className="Footer-link">Blog</Link>
              <Link to="/company/contact-us" className="Footer-link">Contact</Link>
            </nav>
          </div>

          <div className="Footer-section">
            <h3 className="Footer-heading">Contact Us</h3>
            <div className="Footer-contactInfo">
              <div className="Footer-contactItem">
                <RiPhoneFill className="custom-icon" />
                <a href="tel:+14087667503" className="Footer-contactLink">+1 408 766 7503</a>
              </div>
              <div className="Footer-contactItem">
                <RiMailFill className="custom-icon" />
                <a href="mailto:camerasolutions@e-consystems.com" className="Footer-contactLink">camerasolutions@e-consystems.com</a>
              </div>
            </div>
          </div>

          <div className="Footer-section">
            <h3 className="Footer-heading">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="Footer-newsletterForm">
              <div className="Footer-inputGroup">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`Footer-emailInput ${!isValid ? 'Footer-inputError' : ''}`}
                  required
                />
                <button type="submit" className="Footer-subscribeBtn">Subscribe</button>
              </div>
              {!isValid && <p className="Footer-errorMessage">Please enter a valid email address</p>}
            </form>
            <div className="Footer-brandLogo">
              <img src={econlogo} alt="e-con Systems" className="Footer-logoImage" />
            </div>
          </div>
        </div>
        <br />
        <div className='Footer-divider'></div>
        <div className="Footer-bottom">
          <div className="Footer-copyrightText">
            e-con Systems  © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpage;
