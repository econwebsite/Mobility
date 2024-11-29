import React, { useState } from 'react';
import './BlogArtical.css'; // Import the CSS file
import AnimatedButton from "../../ButtonComp/AnimationButton";
import ranjith from "../../../assets/futureblog/Ranjith Kumar.png"
import { message } from 'antd';
import axios from 'axios';
const BlogArtical = () => {
  const [email, setEmail] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const validateEmail = async () => {
    if (isValid && email.length > 0) {
      try {
        const result = await axios.post('https://api.dental.e-consystems.com/api/validateEmail', { email });
        if (result.data.status === 'valid' || result.data.status === 'catch-all' || result.data.status === 'role_based') {
          if (!result.data.free_email) {
            console.log(result);
            setIsValid(true);
            return true;
          } else {
            console.log(result);
            setIsValid(false);
            return false;
          }
        } else {
          console.log(result);
          setIsValid(false);
          return false;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
    return false; // Return false if isValid is not true
  };
  const validateEmailId = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };
  const handleChange = (e) => {
    const newEmail = e.target.value;
    console.log(newEmail);
    setEmail(newEmail);
    setIsValid(validateEmailId(newEmail));
  };
  const handelSubscribtion = async () => {
    if(email === null){
      setIsValid(false);
      return;
    }
    const valid = isValid? await validateEmail():false;
    if (valid) {
      try {
        const result = await axios.post('https://api.dental.e-consystems.com/api/emailSubscription', { email });
        if (result.status === 200)
          message.success('Thanks for subscription!');
        setEmail('');
        setIsValid(true);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (

    <div className="blogArtical-Total">

      <div className="Artical-paragraphs">
        <p>If you want help integrating a best-fit camera into your smart retail application</p>
        <p>
          Please write to{' '}
          <a className="mail-color" href="mailto:camerasolutions@e-consystems.com">
            camerasolutions@e-consystems.com
          </a>
        </p>      </div>
      <div className="Artical-person">
        <div className="Articalleft-side">
          <a href='https://www.linkedin.com/in/ranjithkumar-muthurajan-89a29817/' style={{textDecoration:"none",width:"100%"}}>
          <img src={ranjith} alt="Person" className="Articalperson-photo" />
          </a>
          <p>Ranjith Kumar</p>
          <p>Product Manager</p>
         
        </div>
        <div className="Articalright-side">
          <p>
          Ranjith is a camera solution architect with over 16 years of experience in embedded product development, electronics design, and product solutioning. In e-con Systems, he has been responsible for building 100+ vision solutions for customers spanning multiple areas within retail including self service kiosks, access control systems, smart checkouts and carts, retail monitoring systems, and much more.
          </p>
        </div>
      </div>
      <div className="Articalnotification-box">
        <h3>Get notified of new articles</h3>
        <br></br>
        <p>Subscribe to our blog to be noticed on new post & product release.</p>
        <div className="Articalsubscribe-row">
          <input type="email" autoComplete='off' onPaste={(e) => {
            e.preventDefault()
            return false;
          }} placeholder="Your email address" className="Artical-inputemail" value={email} onChange={handleChange} />
          <AnimatedButton className="Articalknow-button" text="Submit" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" onClick={handelSubscribtion}/>
          {!isValid && <p style={{ color: 'red', margin: '0px',textAlign:"center",width:"100%" }}>Invalid email address</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogArtical;
