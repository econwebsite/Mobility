import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Market.css";

import Marketescamera from "../Industrycam/MarketCameras"
import agricover from "../../../assets/homepage/Industries/agriculture-cover-img.png"
import miningcover from "../../../assets/homepage/Industries/mining-cover-img.png"
import deliveryrobocover from "../../../assets/homepage/Industries/delivery-robo-cover-img.png"
import construcover from "../../../assets/homepage/Industries/construction-cover-img.png"
import garbage from "../../../assets/homepage/Industries/garbage-cover-img.png"
import autonomouscover from "../../../assets/homepage/Industries/autonomous-cover-img.png"
import deliverytruckcover from "../../../assets/homepage/Industries/delivery-truck-cover-img.png"
import lawncover from "../../../assets/homepage/Industries/lawn-mower-cover.png"

const marketData = {
 "Agricultural Vehicles": {
    title: "Agricultural Vehicles",
    beforeImage: "Agricultural vehicles, including tractors, harvesters, and more, are increasingly looking towards automation to enhance productivity and accuracy in large-scale farms. So, they need vision systems to navigate fields, detect obstacles, and monitor crop health, even in harsh outdoor conditions with high dust exposure or strong sunlight. Equipped with the right imaging solution, it becomes easy to improve critical processes like planting, spraying, and harvesting.",
    afterImage: "e-con Systems offers high-performance cameras that drive agricultural automation. Our HDR-enabled cameras provide excellent visibility in changing light conditions, as their IP69K-rated designs help withstand dust, moisture, and high-pressure wash-downs. Moreover, multi-camera synchronization supports 360-degree monitoring and creates full environmental awareness for automated farming equipment. Our ISP tuning and lens calibration expertise also plays a key role in supporting data-driven agricultural decision-making.",
    singleimg: agricover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
      { label: "4. Driver Monitoring", link: "/driver-monitoring-cameras#driverTab" },

    ]
  },
  "Mining Vehicles": {
    title: "Mining Vehicles",
    beforeImage: "Mining trucks and excavators operate in some of the harshest environments, where visibility may be compromised due to dust, darkness, and extreme temperatures. That’s why reliable vision systems are required for hazard detection, collision avoidance, and operational safety in mines. It is crucial for cameras to endure vibrations, heavy shocks, and unpredictable lighting conditions while delivering high-resolution images.",
    afterImage: "e-con Systems develops rugged ADAS cameras perfect for mining applications. They are equipped with features like HDR and LFM to handle extreme lighting variations. Our cameras meet IP69K standards, ensuring protection against dust, water ingress, etc. With high-performance ISP processing, image clarity can be enhanced in low-light conditions, while multi-camera synchronization enables complete situational awareness. We also offer precise lens alignment and robust sealing as part of our manufacturing process to help perform in the toughest mining environments.",
    singleimg: miningcover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
      { label: "4. Driver Monitoring", link: "/driver-monitoring-cameras#driverTab" },
    ]
  },
  "Delivery Robots": {
    title: "Delivery Robots",
    beforeImage: "Autonomous delivery robots require vision systems to navigate crowded urban areas, avoid obstacles, and recognize pathways. Since they operate on sidewalks, in warehouses, or across last-mile delivery routes, the robots depend on cameras for object detection, depth perception, and situational awareness. They must function reliably in varying conditions, from bright daylight to dimly lit indoor spaces.",
    afterImage:"e-con Systems provides high-performance imaging solutions for delivery robotics, integrating HDR and low-light optimization for consistent visibility. Our rugged cameras withstand dust, moisture, and temperature fluctuations, making them ideal for indoor and outdoor deployments. With seamless multi-camera synchronization and finely tuned ISP processing, our solutions support smooth autonomous navigation. Our commitment to quality manufacturing also ensures precise lens alignment and durable construction.",
    singleimg: deliveryrobocover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
    ]
  },
  "Construction Vehicles": {
    title: "Construction Vehicles",
    beforeImage: "Construction equipment like excavators or bulldozers operate in dynamic, high-risk environments where visibility is hindered by dust, debris, and extreme weather. These vehicles are integrated with imaging solutions to assist operators in maneuvering through confined spaces, detecting obstacles, and ensuring worksite safety. The reality is that clear vision is a critical need for reducing accidents, improving efficiency, and enabling semi-autonomous or remote-controlled operations.",
    afterImage:"e-con Systems delivers rugged ADAS cameras that withstand the harsh conditions of construction sites. Our imaging solutions feature HDR and LFM capabilities for superior image clarity in bright sunlight or low-light conditions. With IP69K-rated durability, our cameras resist dust, water, and mechanical vibrations, ensuring uninterrupted performance. Our expertise in multi-camera synchronization and precise lens alignment also supports full situational awareness, making construction vehicles safer.",
    singleimg: construcover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
      { label: "4. Driver Monitoring", link: "/driver-monitoring-cameras#driverTab" },
    ]
  },
  "Garbage Trucks": {
    title: "Garbage Trucks",
    beforeImage: "Garbage trucks operate in crowded urban spaces, narrow alleys, and busy residential zones where spatial awareness is limited. So, they need vision systems to assist with reversing, side-loading operations, and obstacle detection in dynamic environments. However, frequent stops, early morning routes, and inconsistent lighting make it challenging to achieve image clarity and consistency.",
    afterImage:"e-con Systems offers high-performance camera solutions that support automated or semi-automated waste collection tasks. They can perform under continuous vibration, dust exposure, and weather fluctuations. Our cameras come with features like HDR for low-light visibility and LFM to eliminate flickering from street lighting or vehicle headlamps. Their IP69K-rated enclosures also safeguard the imaging units during regular wash-downs and debris exposure.",
    singleimg: garbage,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
      { label: "4. Driver Monitoring", link: "/driver-monitoring-cameras#driverTab" },
    ]
  },
   "Autonomous Vehicles": {
    title: "Autonomous Vehicles",
    beforeImage: "Autonomous vehicles depend on continuous, real-time data from vision systems to make safe and smart driving decisions. These vehicles must detect pedestrians, recognize traffic signs, and adapt to varying lighting conditions in urban environments, highways, etc. Hence, they need to deal with environmental factors such as glare and extreme weather while ensuring precise perception and obstacle detection.",
    afterImage:"e-con Systems provides ADAS cameras that cater to the rigorous demands of autonomous navigation. Our solutions feature HDR, LFM capabilities, and seamless multi-camera synchronization, ensuring seamless imaging in all conditions. With rugged designs that meet IP69K standards, our cameras deliver exceptional performance despite exposure to dust, water, and temperature extremes. Our manufacturing processes, including precise lens alignment and ISP tuning, help optimize image quality in real-world autonomous driving scenarios.",
    singleimg: autonomouscover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
    ]
  },
   "Delivery Trucks": {
    title: "Delivery Trucks",
    beforeImage: "Delivery trucks are transforming last-mile logistics by operating with minimal human intervention across highways and urban routes. These vehicles require consistent imaging input to navigate complex environments that include pedestrians, traffic signals, parked vehicles, and variable lighting conditions. Mounted externally or integrated within, these cameras support continuous monitoring for lane-keeping, sign recognition, and obstacle detection.",
    afterImage:"e-con Systems’ camera solutions bring HDR, global shutter, and multi-camera synchronization capabilities to support wide-area perception. HDR enables visibility in scenes with strong sunlight and deep shadows. The global shutter feature eliminates motion blur during fast travel, preserving clarity in frame captures even at higher speeds. Our cameras can be flexibly deployed to cover front, side, and rear views, thereby enhancing situational awareness.",
    singleimg: deliverytruckcover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
      { label: "4. Driver Monitoring", link: "/driver-monitoring-cameras#driverTab" },
    ]

  }, 
  "Lawn Mowers": {
    title: "Lawn Mowers",
    beforeImage: "Autonomous and remote-operated lawn mowers have seen widespread adoption in commercial landscaping, sports fields, etc. These machines require the right vision input to detect boundaries, avoid obstacles, and assess terrain features such as slopes, wet patches, or surface debris. Since they tend to operate outdoors for long durations, the camera systems must also adapt to changing daylight and unpredictable weather.",
    afterImage:"e-con Systems has developed world-class camera solutions for intelligent mowing applications. We also help implement multi-camera setups to give a wider field of view for enhanced coverage. With HDR support, high frame rate, and optimized ISP tuning, our cameras handle rapid shifts in lighting, from bright sun to shadowed corners under trees. They can be seamlessly integrated with edge AI platforms for object detection, path planning, and zone-based mowing.",
    singleimg: lawncover,
    buttons: [
      { label: "1. Surround View", link: "/surround-view-cameras#surroundTab" },
      { label: "2. Forward Facing", link: "/forward-facing-cameras#forwardTab" },
      { label: "3. Rear View", link: "/rear-view-cameras#rearviewTab" },
    ]

  }, 
  
};

const MarketWe = () => {
  const { marketName } = useParams();
  const navigate = useNavigate();
  const [selectedMarket, setSelectedMarket] = useState(Object.keys(marketData)[0]);

  const urlToMarketKey = (urlName) => {
    if (!urlName) return '';
    return urlName
      .toLowerCase() 
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase()); 
  };

  const marketKeyToUrl = (key) => {
    return key
      .toLowerCase() 
      .replace(/ /g, '-'); 
  };

  useEffect(() => {
    if (marketName) {
      const marketKey = urlToMarketKey(marketName);
      if (marketData[marketKey]) {
        setSelectedMarket(marketKey);
      }
    }
  }, [marketName]);

  const handleMarketChange = (market) => {
    const urlchanging = marketKeyToUrl(market);
    navigate(`/industries/${urlchanging}`);
  };

  return (
    <div className="marketwe-container">
      <h2 className="marketwe-title">MARKETS WE SERVE</h2>
      <div className="marketwe-layout">
        <div className="marketwe-tabs">
          {Object.keys(marketData).map((market) => (
          <button
          key={market}
          className={`marketwe-tab ${selectedMarket === market ? "active" : ""}`}
          onClick={() => handleMarketChange(market)}
        >
          {market}
        </button>
          ))}
        </div>

        <div className="marketwe-content">
  <div className="marketwe-text">
    <h3 className="marketwe-heading">{marketData[selectedMarket].title}</h3>

    <p className="marketwe-description">{marketData[selectedMarket].beforeImage}</p>

    {/* <div className="marketwe-image-wrapper">
      <img 
        src={marketData[selectedMarket].image} 
        alt={marketData[selectedMarket].title} 
        className="marketwe-image" 
      />
    </div> */}
    <br></br>
    <Marketescamera
  singleimg={marketData[selectedMarket]?.singleimg}
  buttons={marketData[selectedMarket]?.buttons || []}
/>

    <br></br>

    <p className="marketwe-description">{marketData[selectedMarket].afterImage}</p>
    {/* <Releatedcam key={selectedMarket} cameras={marketData[selectedMarket]?.cameras || []} /> */}
  </div>

</div>

      </div>
    </div>
  );
};

export default MarketWe;
