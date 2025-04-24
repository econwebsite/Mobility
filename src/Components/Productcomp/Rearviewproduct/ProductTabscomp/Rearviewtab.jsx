import React, { useState, useEffect } from "react";
import './rearview.css';
import ProductTableData from "../Driversupports/ProductTableData";
import STURDeCAM34 from "../../../../assets/allcameras/studycam34.jpg";
import STURDeCAM31 from "../../../../assets/allcameras/studycam31.jpg";
import routecam22 from "../../../../assets/allcameras/routeecamcu22.jpg";
import Modelbutton from "../../../ButtonComp/Modelbutton"
import platform from "../../../../assets/Productpage/platformsupport/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import renesas from "../../../../assets/Productpage/platformsupport/renesas.jpg"
import texas from "../../../../assets/Productpage/platformsupport/texas.jpg"

const Rearview = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('3MP GMSL2');
  const [selectedRightTab, setSelectedRightTab] = useState('LOWLIGHT');

  const images = [
    { id: 1, src: [platform], alt: 'platform support' },
    { id: 2, src: [nvidia], alt: 'nvidia' },
    { id: 3, src: [npx], alt: "npx" },
    { id: 4, src: [renesas], alt: 'renasas' },
    { id: 5, src: [texas], alt: 'texas' }
    
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
                ['Form factor: 25 x 25 mm ', '54.04°(H), 42.86°(V), 70.17°(D)'],
                ['IP69K', 'Operating Temperature : -40°C to 85°C'],
                ['Multi-Camera Sync (Upto 8 cameras)', 'Compliance & Standards:<br>ISO 11452'],
              ],
              title:"STURDeCAM31 - 3MP Sony® ISX031 120dB HDR Camera for Autonomous Mobility",
               documentname:"e-con-STURDeCAM31-technical-documents.zip",
          doctitle:"technical documents for STURDeCAM31"
            },
            'STRUDeCAM34': {
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
               doctitle:"technical documents for STURDeCAM34"

            }
          },
          bgColor: 'white',
          color: '#344ea1',
          images: [STURDeCAM31, STURDeCAM34],
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
          doctitle:"technical documents for RouteCAM_CU22_IP67"
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
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title} documentname={currentContent.documentname} doctitle={currentContent.doctitle}/>
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

export default Rearview;