import React, { useState,useEffect  } from 'react';
import axios from 'axios';
import { message, Dropdown, Menu } from 'antd';
import { RiPhoneFill, RiMailFill, RiMapPin2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import econlogo from "../../assets/homepage/footerlogo-1.svg";
import './Footerpage.css';

const Footerpage = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubscribedOnce, setIsSubscribedOnce] = useState(false);

  const validateEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    try {
      const response = await axios.post('https://api.dental.e-consystems.com/api/validateEmail', { email });
      return (
  (['valid', 'catch-all', 'role-basic'].includes(response.data.status) && !response.data.free_email) ||
  response.data.isValid === true
);

    } catch (error) {
      console.error('Email validation error:', error);
      return false;
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
     if (isSubscribedOnce) {
      message.warning('You have already subscribed.');
      return;
    }
    setIsProcessing(true);
    setIsComplete(false);
    setIsValid(true);

    if (!email) {
      setIsValid(false);
      setIsProcessing(false);
      return;
    }

    const isValidEmail = await validateEmail();
    if (!isValidEmail) {
      setIsValid(false);
      setIsProcessing(false);
      return;
    }

    try {
      await axios.post('https://api.dental.e-consystems.com/api/emailSubscription', { email, site: "Mobility" });
      message.success('Thank you for subscribing!');
      setEmail('');
      setIsComplete(true);
       setIsSubscribedOnce(true);
    } catch (error) {
      console.error('Subscription error:', error);
      message.error('Subscription failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (isComplete  || !isValid) {
      const timer = setTimeout(() => {
        setIsComplete(false);
        setIsValid(true);
      }, 5000);

      return () => clearTimeout(timer); // cleanup timer on unmount
    }
  }, [isComplete, isValid]);
  const menu = (
    <Menu >
      <Menu.Item key="1">
        <Link to="/surround-view-cameras" className='Footer-menuLinks'>Surround View Cameras</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/forward-facing-cameras" className='Footer-menuLinks'>Forward Facing Cameras</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/rear-view-cameras" className='Footer-menuLinks'>Rear View Cameras</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/driver-monitoring-cameras" className='Footer-menuLinks'>In-Cabin Monitoring Cameras</Link>
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
              <Dropdown
                overlay={menu}
                placement="bottom"
                trigger={['click', 'hover']}
                overlayClassName="footer-dropdown-menu"
              >
                <button className="Footer-dropdownToggle">Products</button>
              </Dropdown>
              <Link to="/industries" className="Footer-link">Industries</Link>
              <Link to="/blog" className="Footer-link">Blog</Link>
              <Link to="/contact-us" className="Footer-link">Contact</Link>
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
              {/* <div className="Footer-contactItem location">
                <RiMapPin2Fill className="custom-icon" />
                <div className="Footer-locationDetails">
                  <p>North America (West)</p>
                  <span className="Footer-contactLink">
                    3340 Walnut Avenue, Suite #280,<br />
                    Fremont, CA 94538
                  </span>
                  <p>North America (Central)</p>
                  <span className="Footer-contactLink">
                    11027 Sandistan Manor Ct,<br />
                    St Louis, MO 63146, USA
                  </span>
                  <p>North America (East)</p>
                  <span className="Footer-contactLink">
                    200, Innovative Way, Suite 1380,<br />
                    Nashua, NH 03062, USA
                  </span>
                </div>
              </div> */}

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
                   disabled={isSubscribedOnce}
                  required
                />
                <button id="submit" type="submit" className="Footer-subscribeBtn"   disabled={isProcessing || isSubscribedOnce}>{isProcessing ? 'Please Wait...' : 'Subscribe'}</button>
              </div>
             {!isValid && <p className="Footer-errorMessage">Please enter a valid email address</p>}
      {isComplete && <p className="Footer-successMessage">Thank you for subscribing!</p>}
            </form>
            <div className="Footer-brandLogo">
              <a href='https://www.e-consystems.com/'>
                <img src={econlogo} alt="e-con Systems" className="Footer-logoImage" />
              </a>
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
