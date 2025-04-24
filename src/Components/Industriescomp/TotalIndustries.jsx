import React from 'react';
import Marketcomp from "../Industriescomp/Vehicalcomp/Marketcomp"
import { Helmet } from 'react-helmet-async';

const TotalIndustries = () => {
    return (
        <div>
              <Helmet>
      <title>Industries We Serve: Rugged Cameras for Autonomous Vehicles & Automation</title>
      <meta name='description' content='Discover industrial-grade camera solutions built for autonomous vehicles, delivery robots, agriculture, mining, and construction—engineered to perform in tough environments.' />
      </Helmet>
            <Marketcomp/>
        </div>
    );
}

export default TotalIndustries;
