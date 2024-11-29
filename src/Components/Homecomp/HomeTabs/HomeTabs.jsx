import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import Bannertwo from '../Bannnercomp/Bannertwo/Bannertwo';
import Bannerthree from '../Bannnercomp/Bannerthreecomp/Bannerthree';
import Bannerfour from '../Bannnercomp/Bannerfourcomp/Bannerfour';

import './Hometabs.css';

const HomeTabs = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="resource-container">
            <div className="mainContainer">
                {isMobile ? (
                    
                    <div className="banmobile-view">
                        <div className="banner-wrapper"><Bannertwo /></div>
                        <div className="banner-wrapper"><Bannerthree /></div>
                        <div className="banner-wrapper"><Bannerfour /></div>
                    </div>
                ) : (
                    <div className="tabs-container">
                        <Tabs defaultActiveKey="1" className="custom-tabs homePage">
                            <Tabs.TabPane tab="Reduced Out-of-Stock Issues" key="1">
                                <div className="banner-wrapper"><Bannertwo /></div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Ensure Planogram Compliance" key="2">
                                <div className="banner-wrapper"><Bannerthree /></div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Detect Pricing and Labeling Discrepancies" key="3">
                                <div className="banner-wrapper"><Bannerfour /></div>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeTabs;
