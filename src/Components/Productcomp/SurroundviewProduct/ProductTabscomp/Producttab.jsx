import React, { useState, useEffect } from "react";
import './ProductTab.css';
import ProductTableData from "../Platformsupport/ProductTableData";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import { useLocation } from 'react-router-dom';

import STURDeCAM31 from "../../../../assets/allcameras/sturdecam31.jpg"
import STURDeCAM34 from "../../../../assets/allcameras/sturdecam34.jpg"
import STURDeCAM84 from "../../../../assets/allcameras/sturdecam84.jpg"
import STURDeCAM88 from "../../../../assets/allcameras/sturdecam88_cuoagx.png"
import routecam22 from "../../../../assets/allcameras/routeecamcu22.jpg"

import platform from "../../../../assets/Productpage/platformsupport/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import renesas from "../../../../assets/Productpage/platformsupport/renesas.jpg"

const Producttab = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('3MP GMSL2');
  const [selectedRightTab, setSelectedRightTab] = useState('STURDeCAM31');
  const [initialLeftTab, setInitialLeftTab] = useState(null);
  const [initialRightTab, setInitialRightTab] = useState(null);
  const location = useLocation();

  const images = [
    { id: 1, src: [platform], alt: 'platform support' },
    { id: 2, src: [nvidia], alt: 'nvidia' },
    { id: 3, src: [npx], alt: "npx" },
    { id: 4, src: [renesas], alt: 'renasas' }
  ];
  const rightTabs = {
    'Supported Cameras': {
      tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
      images: [],
      bgColor: '#f1f2f2',
      color: '#344ea1',
    },
    '3MP GMSL2': {
      tabs: ['STURDeCAM31', 'STURDeCAM34'],
      content: {
        'STURDeCAM31': {
          tableData: [
            ['Sony&reg ISX031', '3MP @ 60 fps'],
            ['In-Built ISP', '120dB HDR'],
            ['GMSL2 Interface', 'Output format: UYVY'],
            ['Form factor: 25 x 25 mm ', '54.04°(H), 42.86°(V), 70.17°(D)'],
            ['IP69K', 'Operating Temperature : -40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 11452'],
          ],
          title:"STURDeCAM31 - 3MP Sony® ISX031 120dB HDR Camera for Autonomous Mobility",
          documentname:"e-con-STURDeCAM31-technical-documents.zip",
          doctitle:"Technical documents for STURDeCAM31"
        },
        'STURDeCAM34': {
          tableData: [
            [' onsemi&reg AR0341AT', '3MP @ 30 fps'],
            ['In-Built ISP', '150dB HDR'],
            ['GMSL2 Interface', 'Output format :UYVY'],
            ['Form factor:25 x 25 mm', 'FOV: 64.62° (H), 51.28° (V), 83.5° (D)'],
            ['IP69K', 'Operating Temperature: -40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards :<br>ISO 11450'],
          ],
          title:"STURDeCAM34 - 3MP AR0341AT 140dB HDR Camera Module",
         documentname:"e-con-STURDeCAM34-technical-documents.zip",
          doctitle:"Technical documents for STURDeCAM34"
        }
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31, STURDeCAM34],
    },
    '4K GMSL2': {
      tabs: ['STURDeCAM88', 'STURDeCAM84'],
      content: {
       
        'STURDeCAM88': {
          tableData: [
            ['OMNIVISION&trade; OX08B40', '8MP @ 30 fps'],
            ['In-Built ISP', '140dB HDR'],
            ['GMSL2 Interface', 'Output format:UYVY'],
            ['Form factor:42 x 42 mm', 'FOV: 55.99° (D), 49.87° (H), 28.97° (V)'],
            ['IP67', 'Operating Temperature: -40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 13766'],
          ],
          title:"STURDeCAM88 - 4K 140dB HDR GMSL2 Camera Module",
 documentname:"e-con-STURDeCAM88-technical-documents.zip",
          doctitle:"Technical documents for STURDeCAM88"
        },
        'STURDeCAM84': {
          tableData: [
            [' onsemi&reg AR0823AT', '8MP @ 30 fps'],
            ['Without ISP', '150dB HDR'],
            ['GMSL2 Interface', 'RAW-12 Output format'],
            ['Form factor: 20.8 x 20.8 mm ', 'FOV: 140.1° (D) x 121.2°(H) x 67.2° (V)'],
            ['IP69K', 'Operating Temperature :-40°C to 85°C'],
            ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 16750'],
          ],
          title:"STURDeCAM84 - World's Tiniest 8MP Automotive Camera",
 documentname:"e-con-STURDeCAM84-technical-documents.zip",
          doctitle:"Technical documents for STURDeCAM84"
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [ STURDeCAM88,STURDeCAM84],
    },
    'POE/GigE': {
      tabs: ['RouteCAM_CU22',],
      content: {
        'RouteCAM_CU22': {
          tableData: [
            [' Sony® STARVIS™  2 IMX662', 'Full HD @ 60 fps'],
            ['In-Built ISP', '88dB HDR'],
            ['GigE Interface', ' MJPEG, H.265 &  H.264 <br> Output format'],
            ['Form factor:46 x 46 mm', 'FOV: 151.74°(D), 130°(H), 70.75°(V)'],
            ['IP67', 'Operating Temperature: -30°C to 70°C'],
            ['Compliance & Standards: ISO 13766'],
          ],
          title:"RouteCAM_CU22_IP67 - Outdoor Lowlight GigE HDR Camera",
          documentname:"e-con-RouteCAM_CU22_IP67-technical-documents.zip",
          doctitle:"Technical documents for RouteCAM_CU22"
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
    if (location.state?.leftTab) {
      setInitialLeftTab(location.state.leftTab);
    }
    if (location.state?.rightTab) {
      setInitialRightTab(location.state.rightTab);
    }
  }, [location.state]);

  useEffect(() => {
    if (initialLeftTab) {
      setSelectedLeftTab(initialLeftTab);
    }
  }, [initialLeftTab]);

  useEffect(() => {
    if (initialRightTab && rightTabs[selectedLeftTab]?.tabs.includes(initialRightTab)) {
      setSelectedRightTab(initialRightTab);
    } else if (rightTabs[selectedLeftTab]) {
      setSelectedRightTab(rightTabs[selectedLeftTab].tabs[0]);
    }
  }, [selectedLeftTab, initialRightTab]);



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
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title} />

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
                      <div className="Productinsidetab-divider"></div>
                    </div>
                  </div>
                  <div className="ProductTabs-total-Button">
                  <Modelbutton className="ProductTabs-Button"  backgroundColor="#00aeef"  type="Contact Us"  animationColor="#344ea1" hoverColor="#344ea1" />
                  <Modelbutton text="Download Tech document" backgroundColor="#00aeef" textColor="#131b2d"  hoverTextColor="#344ea1" className="ProductTabs-Button" to="" productName="ProductDocument" docName={currentContent.documentname} title={currentContent.doctitle}/>


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
