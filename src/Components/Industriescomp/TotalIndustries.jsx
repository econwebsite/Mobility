import React, { useEffect, useState } from 'react';
import Marketcomp from "../Industriescomp/Vehicalcomp/Marketcomp";
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';

const industryMeta = {
  'agricultural-vehicle-camera-systems': {
    title: 'Cameras for Agricultural Vehicles | Surround & Rear View',
    description: 'Enhance automation in agricultural vehicles with IP69K cameras offering HDR, multi-camera sync, and precision imaging for planting, spraying, and harvesting.',
  },
  'mining-vehicle-camera-systems': {
    title: 'Rugged Cameras for Mining Vehicles | HDR & IP69K Rated',
    description: 'Ensure safety and efficiency in mining vehicles using rugged cameras built to withstand shocks, dust, and lighting extremes with HDR and LFM support.',
  },
  'autonomous-delivery-robot-cameras': {
    title: 'Autonomous Vision Cameras for Delivery Robots',
    description: 'Boost delivery robot performance with cameras optimized for low-light and HDR daylight conditions, ensuring seamless autonomous operation and reliable obstacle detection.',
  },
  'rugged-cameras-for-construction-vehicles': {
    title: 'Rugged Cameras for Construction Vehicles | ADAS & Safety Solutions',
    description: 'Enhance safety and efficiency with e-con Systems rugged ADAS cameras for construction vehicles. HDR, LFM, and IP69K-rated for tough environments.',
  },
  'garbage-truck-vision-systems': {
    title: 'High-Performance Vision Systems for Garbage Trucks',
    description: 'Boost safety and efficiency in waste collection with e-con Systems’ rugged cameras for garbage trucks. HDR, LFM, and IP69K-rated for tough environments.',
  },
  'autonomous-vehicle-vision-systems': {
    title: 'Advanced Vision Systems for Autonomous Vehicles',
    description: 'Enhance autonomous navigation with e-con Systems’ rugged ADAS cameras. HDR, LFM, and IP69K-rated for all weather, offering seamless multi-camera synchronization.',
  },
  'delivery-truck-vision-systems': {
    title: 'Reliable Vision Systems for Delivery Trucks',
    description: 'Optimize last-mile delivery with e-con Systems’ cameras featuring HDR, global shutter, and multi-camera sync for enhanced perception in diverse environments.',
  },
  'autonomous-lawn-mower-vision-systems': {
    title: 'Advanced Camera Solutions for Autonomous Lawn Mowers',
    description: 'Enhance autonomous lawn mowing with e-con Systems’ cameras featuring HDR, high frame rate, and multi-camera setups for obstacle detection and path planning.',
  }
};

const TotalIndustries = () => {
  const { marketName } = useParams();
  const location = useLocation();
  const [meta, setMeta] = useState({
    title: 'Industries We Serve: Rugged Cameras for Autonomous Vehicles & Automation',
    description: 'Discover industrial-grade camera solutions built for autonomous vehicles, delivery robots, agriculture, mining, and construction—engineered to perform in tough environments.'
  });

  useEffect(() => {
    if (location.pathname === '/industries' || location.pathname === '/industries/') {
      setMeta({
        title: 'Industries We Serve: Rugged Cameras for Autonomous Vehicles & Automation',
        description: 'Discover industrial-grade camera solutions built for autonomous vehicles, delivery robots, agriculture, mining, and construction—engineered to perform in tough environments.'
      });
    } else if (marketName && industryMeta[marketName]) {
      setMeta(industryMeta[marketName]);
    }
  }, [location.pathname, marketName]);

  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Marketcomp />
    </div>
  );
};

export default TotalIndustries;
