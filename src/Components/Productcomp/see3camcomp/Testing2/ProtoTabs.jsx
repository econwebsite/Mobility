import React, { useState, useEffect } from "react";
import { Tabs, Typography, Button, Collapse } from "antd";
import { TiChevronRight } from "react-icons/ti";
import see3camthumb from "../../../../assets/Productpage/see3cam3.png";
import "./ProtoTabs.css";
import OverView from "../DocComp/OverView";
import Specfication from "../DocComp/Specification"
const { TabPane } = Tabs;
const { Panel } = Collapse;
export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState("1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const content = {
    "1": (
      <div>
        <Typography.Paragraph>
          <OverView/>
        </Typography.Paragraph>
      </div>
    ),
    "2": (
      <div>
        <Typography.Paragraph>
          <Specfication/>
        </Typography.Paragraph>
      </div>
    ),
    "3": (
      <div>
        <Typography.Title level={4}>Software Content</Typography.Title>
        <Typography.Paragraph>
          Here is the content for the Software tab.
        </Typography.Paragraph>
      </div>
    ),
    "4": (
      <div>
        <Typography.Title level={4}>
          Standards and Compliances Content
        </Typography.Title>
        <Typography.Paragraph>
          Here is the content for the Standards and Compliances tab.
        </Typography.Paragraph>
      </div>
    ),
    "5": (
      <div>
        <Typography.Title level={4}>Documents Content</Typography.Title>
        <Typography.Paragraph>
          Here is the content for the Documents tab.
        </Typography.Paragraph>
      </div>
    ),
    "6": (
      <div>
        <Typography.Title level={4}>Order Samples Content</Typography.Title>
        <Typography.Paragraph>
          Here is the content for the Order Samples tab.
        </Typography.Paragraph>
      </div>
    ),
    "7": (
      <div>
        <Typography.Title level={4}>Customization Content</Typography.Title>
        <Typography.Paragraph>
          Here is the content for the Customization tab.
        </Typography.Paragraph>
      </div>
    ),
  };

  return (
    <div className="ProtoTabs-container">
              <div className="mainContainer">

      {/* Desktop View */}
      {!isMobile && (
        <div className="ProtoTabs-desktop-view">
          {/* Tabs Section */}
          <div className="ProtoTabs-tabs-section">
            <Tabs
              tabPosition="left"
              activeKey={activeTab}
              onChange={handleTabChange}
              style={{ height: "100%", width: "100%" }}
            >
              <TabPane tab="Overview" key="1" />
              <TabPane tab="Specification" key="2" />
              <TabPane tab="Software" key="3" />
              <TabPane tab="Standards & Compliances" key="4" />
              <TabPane tab="Documents" key="5" />
              <TabPane tab="Order Samples" key="6" />
              <TabPane tab="Customization" key="7" />
            </Tabs>
          </div>

          {/* Content Section */}
          <div className="ProtoTabs-content-section">{content[activeTab]}</div>

          {/* Right Section */}
          <div className="ProtoTabs-right-section">
            <Typography.Title level={5} className="ProtoTabs-section-title">
              Related Videos
              <p className="ProtoTabs-underline"></p>
            </Typography.Title>
            <div className="ProtoTabs-related-video">
              <img
                src={see3camthumb}
                alt="See3CAM"
                className="ProtoTabs-related-video-img"
              />
              <Typography.Text className="ProtoTabs-related-video-text">
                3MP HDR USB Camera with 120dB Dynamic Range | Superior Low-Light
                Performance
              </Typography.Text>
            </div>
            <br />
            <Typography.Title level={5} className="ProtoTabs-section-title">
  Targeted Applications
  <p className="ProtoTabs-underline"></p>
</Typography.Title>
<div className="ProtoTabs-target-applications">
  <div className="ProtoTabs-application-item">
    <TiChevronRight className="ProtoTabs-check-icon" /> <span>Dashcams</span>
  </div>
  <div className="ProtoTabs-application-item">
    <TiChevronRight className="ProtoTabs-check-icon" /> <span>Delivery Robots</span>
  </div>
  <div className="ProtoTabs-application-item">
    <TiChevronRight className="ProtoTabs-check-icon" /> 
    <span>Intelligent Transportation Systems (ITS)</span>
  </div>
</div>

            <br />
            <Typography.Title level={5} className="ProtoTabs-section-title">
              FAQ
              <p className="ProtoTabs-underline"></p>
            </Typography.Title>
            <button className="Faq-but">More FAQs</button>
          </div>
        </div>
      )}

      {isMobile && (
        <>
            <Collapse accordion defaultActiveKey="1" className="ProtoTabs-mobile-accordion">
      {Object.keys(content).map((key) => {
        const tabNames = {
          "1": "Overview",
          "2": "Specification",
          "3": "Software",
          "4": "Standards & Compliances",
          "5": "Documents",
          "6": "Order Samples",
          "7": "Customization",
        };

        return (
          <Panel header={tabNames[key]} key={key}>
            {content[key]}
          </Panel>
        );
      })}
    </Collapse>
          <div className="ProtoTabs-mobile-right-content">
            <Typography.Title level={5} className="ProtoTabs-section-title">
              Related Videos
              <p className="ProtoTabs-underline"></p>
            </Typography.Title>
            <img src={see3camthumb} alt="See3CAM" className="ProtoTabs-related-video-img" />
            <Typography.Text className="ProtoTabs-related-video-text">
              3MP HDR USB Camera with 120dB Dynamic Range | Superior Low-Light
              Performance
            </Typography.Text>
            <br /><br />
            <Typography.Title level={5} className="ProtoTabs-section-title">
              Targeted Applications
              <p className="ProtoTabs-underline"></p>
            </Typography.Title>
            <div className="ProtoTabs-target-applications">
              <div>
                <TiChevronRight className="ProtoTabs-check-icon" /> Dashcams
              </div>
              <div>
                <TiChevronRight className="ProtoTabs-check-icon" /> Delivery Robots
              </div>
              <div>
                <TiChevronRight className="ProtoTabs-check-icon" /> Intelligent
                Transportation Systems (ITS)
              </div>
            </div>
            <br />
            <Typography.Title level={5} className="ProtoTabs-section-title">
              FAQ
              <p className="ProtoTabs-underline"></p>
            </Typography.Title>
            <Button type="primary">More FAQs</Button>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

