import React, { useState, useEffect } from "react";
import './Forwardtab.css';
import ProductTableData from "../Platformsupport/ProductTableData";
import STURDeCAM88 from "../../../../assets/Productpage/forwardfacing/studycam88.png";
import STURDeCAM84 from "../../../../assets/Productpage/forwardfacing/studycam84.jpg";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import STURDeCAM31 from "../../../../assets/Productpage/forwardfacing/studycam31.jpg"
import STURDeCAM34 from "../../../../assets/Productpage/forwardfacing/studycam34.jpg"
import platform from "../../../../assets/Productpage/forwardfacing/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/forwardfacing/nividia.jpg";
import qualcum from "../../../../assets/Productpage/forwardfacing/qualcom.jpg";
import ambrella from "../../../../assets/Productpage/forwardfacing/ambarella.jpg";

const Forwardtab = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('3MP GMSL2');
  const [selectedRightTab, setSelectedRightTab] = useState('LOWLIGHT');

  const images = [
    { id: 1, src: [platform], alt: 'platform support' },
    { id: 2, src: [nvidia], alt: 'nvidia' },
    { id: 3, src: [ambrella], alt: "qualcum" },
    { id: 4, src: [qualcum], alt: 'ambrella' }
  ];
  const rightTabs = {   
 'Supported Cameras': {
      tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
      images: [],
      bgColor: '#f1f2f2',
      color: '#344ea1',
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
          ],
          title:"STURDeCAM31 - 3MP Sony® ISX031 120dB HDR Camera for Autonomous Mobility",

        },
        'STRUDeCAM34': {
          tableData: [
            [' onsemi&reg AR0341AT', '3MP @ 30 fps'],
            ['In-Built ISP', '150dB HDR'],
            ['GMSL2 Interface', 'Output format :UYVY'],
            ['Form factor:25 x 25 mm', 'Lens (HFOV): 60°/120°'],
            ['IP69K', 'Operating Temperature: -40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards :<br>ISO 11450'],
          ],
          title:"STURDeCAM34 - 3MP AR0341AT 140dB HDR Camera Module",

        }
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31, STURDeCAM34],
    },
    '8MP GMSL2': {
      tabs: ['STURDeCAM84', 'STURDeCAM88'],
      content: {
        'STURDeCAM84': {
          tableData: [
            [' onsemi&reg AR0823AT', '8MP @ 30 fps'],
            ['Without ISP', '150dB HDR'],
            ['GMSL2 Interface', 'RAW-12 Output format'],
            ['Form factor: 20.8 x 20.8 mm ', 'Lens (HFOV): 60°/120°'],
            ['IP69K', 'Operating Temperature :-40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 16750'],
          ],
          title:"STURDeCAM84 - World's Tiniest 8MP Automotive Camera",

        },
        'STURDeCAM88': {
          tableData: [
            ['OMNIVISION&trade; OX08B40', '8MP @ 30 fps'],
            ['In-Built ISP', '140dB HDR'],
            ['GMSL2 Interface', 'Output format:UYVY'],
            ['Form factor:42 x 42 mm', 'Lens (HFOV): 60°/120°'],
            ['IP67', 'Operating Temperature: -40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 13766'],
          ],
          title:"STURDeCAM88 - 4K 140dB HDR GMSL2 camera Module",

        }
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM84, STURDeCAM88],
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
    <div className="ForwardTabs-Total">
      <div className='mainContainer'>
        <div className="ForwardTabs-newcontainpro">
          <div className="ForwardTabs-Container">
            <div className="ForwardTabs-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`ForwardTabs-LeftHeading ${heading === 'Supported Cameras' ? 'camera' : ''} ${selectedLeftTab === heading ? 'active' : ''}`}
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

            <div className="ForwardTabs-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="ForwardTabs-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`ForwardTabs-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="ForwardTabs-ContentBox">
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title} />
                  <div className="Forwardinsidetab-container">
                    <div className="Forwardinsidetab-image-row">
                      {images.map((image, index) => (
                        <React.Fragment key={image.id}>
                          <div className="Forwardinsidetab-image-box">
                            <div className="Forwardinsidetab-image-wrapper">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                          {index < images.length - 1 && <div className="Forwardinsidetab-divider"></div>}
                        </React.Fragment>
                      ))}
                      <div className="Forwardinsidetab-divider"></div>
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

export default Forwardtab;

