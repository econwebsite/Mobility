import React, { useState } from "react";
import "./LocationTabs.css";

const locations = {
  "North America (West)": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2310570037503!2d-121.97854540000002!3d37.5496197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc0911d68af8f%3A0xffc103fca963b372!2s3340%20Walnut%20Ave%20%23280%2C%20Fremont%2C%20CA%2094538%2C%20USA!5e0!3m2!1sen!2sin!4v1752646550183!5m2!1sen!2sin",     
    contact: {
      heading: "North America (West)",
      address: `3340 Walnut Avenue, Suite #280,
Fremont, CA 94538`,
      phone: "+1-408-766-7503",
      email: "salesNA@e-consystems.com",
      mapUrl: "https://share.google/qpKNUBpCU7NCkHBhK", 
    },
  },
  "North America (Central)": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.6316014501754!2d-90.424234!3d38.6803338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df32ef1d400ce3%3A0x3a9c8d6e23909e33!2s11027%20Sandistan%20Manor%20Ct%2C%20St.%20Louis%2C%20MO%2063146%2C%20USA!5e0!3m2!1sen!2sin!4v1752646708333!5m2!1sen!2sin",
    contact: {
      heading: "North America (Central)",
      address: `11027 Sandistan Manor Ct,
St Louis, MO 63146, USA`,
      phone: "+1-408-766-7503",
      email: "salesNA@e-consystems.com",
      mapUrl: "https://share.google/wGklF6W0G5RgUE04g",
    },
  },
  "North America (East)": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.528063583875!2d-71.4574255!3d42.713712699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3ba0d887a4d71%3A0xcd8528f785fa27a4!2s200%20Innovative%20Way%20%231380%2C%20Nashua%2C%20NH%2003062%2C%20USA!5e0!3m2!1sen!2sin!4v1752646851829!5m2!1sen!2sin",
    contact: {
      heading: "North America (East)",
      address: `200, Innovative Way, Suite 1380,
Nashua, NH 03062, USA`,
      phone: " +1-408-766-7503",
      email: "salesNA@e-consystems.com",
      mapUrl: "https://share.google/2Dojg0pTPNHAwfISH",
    },
  },
};

export default function LocationsTabs() {
  const [selected, setSelected] = useState("North America (West)");
  const location = locations[selected];

  return (
    <div className="location-wrapper">
          {/* <h1 className='Contact-us'>Locations</h1> */}
<br></br>
      {/* <span className='Spam-questions'>Do You Have Any Questions?</span> */}
      <div className="location-tabs">
        {Object.keys(locations).map((loc) => (
          <button
            key={loc}
            onClick={() => setSelected(loc)}
            className={`location-tab ${
              selected === loc ? "location-tab-active" : ""
            }`}
          >
            {loc}
          </button>
        ))}
      </div>
      <div className="location-grid">

        <div className="location-card location-map-card">
          <iframe
            src={location.map}
            allowFullScreen=""
            loading="lazy"
            className="location-map"
          ></iframe>
          <a
            href={location.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-link"
          >
            View on Google Maps
          </a>
        </div>
        <div className="location-card location-contact-card">
          <h2 className="location-title">Contact Details</h2>
          <p className="location-subtitle">{location.contact.heading}</p>
          <pre className="location-address">{location.contact.address}</pre>
         <p>
  <a href={`tel:${location.contact.phone.replace(/\s+/g, '')}`} className="location-contact-link">
    {location.contact.phone}
  </a>
</p>
<p>
  <a href={`mailto:${location.contact.email}`} className="location-contact-link">
    {location.contact.email}
  </a>
</p>

          <div className="location-socials">
  <a href="https://www.facebook.com/econSystems" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
   <a href="https://www.youtube.com/user/econsystems" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://twitter.com/econsystems" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://in.linkedin.com/company/e-con-systems" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>
  
</div>

        </div>
      </div>
    </div>
  );
}
