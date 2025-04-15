import React from 'react';
import Marketcomp from "../Industriescomp/Vehicalcomp/Marketcomp"
import { Helmet } from 'react-helmet-async';

const TotalIndustries = () => {
    return (
        <div>
              <Helmet>
      <title>e-con Systems: ODM Solutions for Mobility Cameras</title>
      <meta name='description' content='e-con Systems Mobility offers ODM solutions for' />
      </Helmet>
            <Marketcomp/>
        </div>
    );
}

export default TotalIndustries;
