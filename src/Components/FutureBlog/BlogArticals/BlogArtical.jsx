import React, { useState } from 'react';
import './BlogArtical.css'; 
import AnimatedButton from "../../ButtonComp/AnimationButton"
import { message } from 'antd';
import axios from 'axios';
import sureshmathu from "../../../assets/hubpage/Blogpage/suresh-madhu.jpg"

const BlogArtical = () => {
  const [email, setEmail] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const validateEmail = async () => {
    if (isValid && email.length > 0) {
      try {
        const result = await axios.post('http://localhost:3111/api/validateEmail', { email });
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
        const result = await axios.post('http://localhost:3111/api/emailSubscription', { email });
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
        <p>If you need assistance with lens selection or integrating camera solutions into any of your medical or life sciences devices</p>
        <p>
          Please write to{' '}
          <a className="mail-color" href="mailto:camerasolutions@e-consystems.com">
            camerasolutions@e-consystems.com
          </a>
        </p>      </div>
      <div className="Artical-person">
        <div className="Articalleft-side">
          <img src={sureshmathu} alt="sureshmathu" className="Articalperson-photo" />
          <p>Suresh Madhu</p>
          <p style={{fontSize:"13px"}}>BU Head-Industrial cameras</p>
        </div>
        <div className="Articalright-side">
          <p>
          Suresh Madhu is the product marketing manager with 16+ years of experience in embedded product design, technical architecture, SOM product design, camera solutions, and product development. He has played an integral part in helping many customers build their products by integrating the right vision technology into them.
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
          <AnimatedButton className="Articalknow-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" onClick={handelSubscribtion}/>
          {!isValid && <p style={{ color: 'red', margin: '0px',textAlign:"center",width:"100%" }}>Invalid email address</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogArtical;
