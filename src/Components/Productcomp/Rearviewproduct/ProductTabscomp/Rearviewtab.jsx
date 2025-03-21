import React, { useState, useEffect } from "react";
import './rearview.css';
import ProductTableData from "../Driversupports/ProductTableData";
import STURDeCAM34 from "../../../../assets/Productpage/rearview/studycam34.jpg";
import STURDeCAM31 from "../../../../assets/Productpage/rearview/studycam31.jpg";
import routecam22 from "../../../../assets/Productpage/drivermonitoring/routecam25.jpg";
import ambrella from "../../../../assets/Productpage/drivermonitoring/ambarella.jpg";
import renasas from '../../../../assets/Productpage/drivermonitoring/renesas.jpg';
import qualcum from "../../../../assets/Productpage/drivermonitoring/qualcom.jpg";
import npx from "../../../../assets/Productpage/drivermonitoring/npx.jpg";

const Rearview = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('3MP GMSL2');
  const [selectedRightTab, setSelectedRightTab] = useState('LOWLIGHT');

  const images = [
    { id: 1, src: [ambrella], alt: 'platform support' },
    { id: 2, src: [renasas], alt: 'nvidia' },
    { id: 3, src: [qualcum], alt: "qualcum" },
    { id: 4, src: [npx], alt: 'ambrella' }
  ];
 
  const rightTabs = {
    'Supported Cameras': {
      bgColor: 'transparent',
      color: '#344ea1',
      images: [],
    },
     '3MP GMSL2': {
          tabs: ['STURDeCAM31', 'STRUDeCAM34'],
          content: {
            'STURDeCAM31': {
              tableData: [
                ['Sony&reg ISX031', '3MP @ 60 fps'],
                ['In-Built ISP', '120dB HDR'],
                ['GMSL2 Interface', 'Output format: UYVY'],
                ['Form factor: 25 x 25 mm ', 'Lens (HFOV): 54°/128°'],
                ['IP69K', 'Operating Temperature : -40°C to 85°C'],
                ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 11452'],
              ]
            },
            'STRUDeCAM34': {
              tableData: [
                [' onsemi&reg AR0341AT', '3MP @ 30 fps'],
                ['In-Built ISP', '150dB HDR'],
                ['GMSL2 Interface', 'Output format :UYVY'],
                ['Form factor:25 x 25 mm', 'Lens (HFOV): 60°/120°'],
                ['IP69K', 'Operating Temperature: -40°C to 85°C'],
                ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards :<br>ISO 11450'],
              ]
            }
          },
          bgColor: 'white',
          color: '#344ea1',
          images: [STURDeCAM31, STURDeCAM34],
        },
        'POE': {
          tabs: ['RouteCAM_CU22',],
          content: {
            'RouteCAM_CU22': {
              tableData: [
                [' Sony® STARVIS™  2 IMX662', 'Full HD @ 60 fps'],
                ['In-Built ISP', '88dB HDR'],
                ['GigE Interface', ' MJPEG, H.265 &  H.264 <br> Output format'],
                ['Form factor:46 x 46 mm', 'Lens (HFOV): 120°'],
                ['IP67', 'Operating Temperature: -30°C to 70°C'],
                ['Compliance & Standards: ISO 13766'],
              ]
            },
          },
          bgColor: 'white',
          color: '#344ea1',
          images: [routecam22],
        }
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
    <div className="rearview-Total">
      <div className='mainContainer'>
        <div className="rearview-newcontainpro">
          <div className="rearview-Container">
            <div className="rearview-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`rearview-LeftHeading ${heading === 'Supported Cameras' ? 'Supported Cameras' : ''} ${selectedLeftTab === heading ? 'active' : ''}`}
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

            <div className="rearview-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="rearview-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`rearview-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="rearview-ContentBox">
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rearview;