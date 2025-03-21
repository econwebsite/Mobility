import React, { useState, useEffect } from "react";
import './DriverTab.css';
import ProductTableData from "../Driversupports/ProductTableData";
import STURDeCAM27 from "../../../../assets/Productpage/drivermonitoring/nilecam27.jpg";
import studycam29 from "../../../../assets/Productpage/drivermonitoring/studycam29.png";
import ambrella from "../../../../assets/Productpage/drivermonitoring/ambarella.jpg";
import renasas from '../../../../assets/Productpage/drivermonitoring/renesas.jpg';
import qualcum from "../../../../assets/Productpage/drivermonitoring/qualcom.jpg";
import npx from "../../../../assets/Productpage/drivermonitoring/npx.jpg";

const DriverTab = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('STURDeCAM27');
  const [selectedRightTab, setSelectedRightTab] = useState('LOWLIGHT');

  const images = [
    { id: 1, src: [ambrella], alt: 'platform support' },
    { id: 2, src: [renasas], alt: 'nvidia' },
    { id: 3, src: [qualcum], alt: "qualcum" },
    { id: 4, src: [npx], alt: 'ambrella' }
  ];
 
  const rightTabs = {
    'Supported Cameras': {
      tabs: ['STURDeCAM27', 'NileCAM29', 'RouteCAM_CU25'],
      bgColor: 'transparent',
      color: '#344ea1',
      images: [],
    },
    'STURDeCAM27': {
      tabs: ['STURDeCAM27'],
      content: {
        'STURDeCAM27': {
          tableData: [
            ['OMNIVISION™ OV2312', '2MP @ 60 fps'],
            ['In-Built ISP', 'Chroma: RGB-IR'],
            ['NIR Sensitivity: 940 nm / 850 nm ', 'Global Shutter'],
            ['GMSL2 Interface', 'Output Format: UYVY'],
            ['Form factor: 30mm x 30mm', 'FOV: 75°(H), 62°(V), 88°(D)'],
            ['IP Rating (Optional)', 'Compliance & Standards :<br>ISO 11452'],
          ]
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM27],
    },
    'STURDeCAM29': {
      tabs: ['STURDeCAM29'],
      content: {
        'STURDeCAM29': {
          tableData: [
            ['OMNIVISION™ OV2311', '2MP @ 60 fps'],
            ['Without ISP', 'Monochrome'],
            ['NIR Sensitivity: 940 nm / 850 nm ', 'Global Shutter'],
            ['GMSL2 Interface', 'Output Format: Y8'],
            ['Form factor:30mm x 30mm', 'FOV: 57°(H), 44°(V), 70°(D)'],
            ['IP Rating (Optional)', 'Compliance & Standards :<br>ISO 16750'],
          ]
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [studycam29],
    },
    
  };

  const handleLeftTabClick = (tab) => {
    if (tab !== 'Supported Cameras') {
      setSelectedLeftTab(tab);
      setSelectedRightTab(rightTabs[tab].tabs[0]);
    }
  };

  const handleRightTabClick = (tab) => {
    setSelectedRightTab(tab);
  };

  useEffect(() => {
    if (rightTabs[selectedLeftTab].tabs) {
      setSelectedRightTab(rightTabs[selectedLeftTab].tabs[0]);
    }
  }, [selectedLeftTab]);

  const currentContent = rightTabs[selectedLeftTab]?.content[selectedRightTab];
  const currentImage = rightTabs[selectedLeftTab]?.images?.[rightTabs[selectedLeftTab].tabs.indexOf(selectedRightTab)];

  return (
    <div className="DriverTab-Total">
      <div className='mainContainer'>
        <div className="DriverTab-newcontainpro">
          <div className="DriverTab-Container">
            <div className="DriverTab-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`DriverTab-LeftHeading ${heading === 'Supported Cameras' ? 'camera' : ''} ${selectedLeftTab === heading ? 'active' : ''}`}
                  onClick={() => handleLeftTabClick(heading)}
                  style={{
                    backgroundColor: rightTabs[heading].bgColor,
                    color: rightTabs[heading].color,
                    borderColor: selectedLeftTab === heading ? '#f1f2f2' : '#344ea1',
                    cursor: heading === 'Supported Cameras' ? 'default' : 'pointer',
                  }}
                >
                  {heading}
                </div>
              ))}
            </div>

            <div className="DriverTab-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="DriverTab-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`DriverTab-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="DriverTab-ContentBox">
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} />

                  <div className="DriverTab-insidetab-container">
                    <div className="DriverTab-insidetab-image-row">
                      {images.map((image, index) => (
                        <React.Fragment key={image.id}>
                          <div className="DriverTab-insidetab-image-box">
                            <div className="DriverTab-insidetab-image-wrapper">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                          {index < images.length - 1 && <div className="DriverTab-insidetab-divider"></div>}
                        </React.Fragment>
                      ))}
                      <div className="DriverTab-insidetab-divider"></div>
                      {/* <div style={{ padding: '10px' }}>
                    <Modelbutton className="DriverTab-insidetab-action-button" text="Contact Us" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"/>

                      </div> */}
                    </div>
                  </div>    
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverTab;
