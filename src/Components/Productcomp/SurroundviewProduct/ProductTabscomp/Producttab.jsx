import React, { useState, useEffect } from "react";
import './ProductTab.css';
import ProductTableData from "../Platformsupport/ProductTableData";
// 
import STURDeCAM31 from "../../../../assets/Productpage/surroundview/studycam31.jpg"
import STURDeCAM34 from "../../../../assets/Productpage/surroundview/studycam34.jpg"
import STURDeCAM84 from "../../../../assets/Productpage/surroundview/studycam84.jpg"
import STURDeCAM88 from "../../../../assets/Productpage/surroundview/studycam88.png"
import routecam22 from "../../../../assets/Productpage/surroundview/routeecamcu22.jpg"

// 
import Modelbutton from "../../../ButtonComp/Modelbutton";
import platform from "../../../../assets/Productpage/surroundview/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/surroundview/nividia.jpg";
import qualcum from "../../../../assets/Productpage/surroundview/qualcom.jpg";
import ambrella from "../../../../assets/Productpage/surroundview/ambarella.jpg"

const Producttab = () => {
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
    '4K GMSL2': {
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
          ]
        },
        'STURDeCAM88': {
          tableData: [
            ['OMNIVISION&trade; OX08B40', '8MP @ 30 fps'],
            ['In-Built ISP', '140dB HDR'],
            ['GMSL2 Interface', 'Output format:UYVY'],
            ['Form factor:42 x 42 mm', 'Lens (HFOV): 60°/120°'],
            ['IP67', 'Operating Temperature: -40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 13766'],
          ]
        }
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM84, STURDeCAM88],
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
    <div className="ProductTabs-Total">
      <div className='mainContainer'>
        <div className="ProductTabs-newcontainpro">
          <div className="ProductTabs-Container">
            <div className="ProductTabs-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`ProductTabs-LeftHeading ${heading === 'Camera' ? 'camera' : ''} ${selectedLeftTab === heading ? 'active' : ''}`}
                  onClick={() => handleLeftTabClick(heading)}
                  style={{
                    backgroundColor: rightTabs[heading].bgColor,
                    color: rightTabs[heading].color,
                    borderColor: selectedLeftTab === heading ? '#003873' : '#344ea1',
                    cursor: heading === 'Supported Cameras' ? 'default' : 'pointer',
                  }}
                >
                  {heading}
                </div>
              ))}
            </div>


            <div className="ProductTabs-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="ProductTabs-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`ProductTabs-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="ProductTabs-ContentBox">
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab}/>
                  {/*            //////////////// */}

                  <div className="Productinsidetab-container">
                    <div className="Productinsidetab-image-row">
                      {images.map((image, index) => (
                        <React.Fragment key={image.id}>
                          <div className="Productinsidetab-image-box">
                            <div className="Productinsidetab-image-wrapper">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                          {index < images.length - 1 && <div className="Productinsidetab-divider"></div>}
                        </React.Fragment>
                      ))}
                      {/* Divider and Button at the end of the row */}
                      <div className="Productinsidetab-divider"></div>
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

export default Producttab;
