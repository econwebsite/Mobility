import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ProductTableData from "../Platformsupport/ProductTableData";
import STURDeCAM88 from "../../../../assets/allcameras/sturdecam88_cuoagx.png";
import STURDeCAM84 from "../../../../assets/allcameras/sturdecam84.jpg";
import STURDeCAM31 from "../../../../assets/allcameras/sturdecam31.jpg"
import STURDeCAM34 from "../../../../assets/allcameras/sturdecam34.jpg"
import platform from "../../../../assets/Productpage/platformsupport/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import renesas from "../../../../assets/Productpage/platformsupport/renesas.jpg"
import texas from "../../../../assets/Productpage/platformsupport/texas.jpg"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};


const Forwardtab = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('All Cameras');
  const [selectedRightTab, setSelectedRightTab] = useState('STURDeCAM31');
  const [initialLeftTab, setInitialLeftTab] = useState(null);
  const [initialRightTab, setInitialRightTab] = useState(null);
  const location = useLocation();
  const windowSize = useWindowSize();

  const images = [
    { id: 1, src: [platform], alt: 'platform support' },
    { id: 2, src: [nvidia], alt: 'nvidia' },
    { id: 3, src: [npx], alt: "npx" },
    { id: 4, src: [renesas], alt: 'renasas' },
    { id: 5, src: [texas], alt: 'texas' }

  ];
  const rightTabs = {
    'Supported Cameras': {
      tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
      images: [],
      bgColor: '#f1f2f2',
      color: '#344ea1',
    },
    'All Cameras': {
      tabs: ['STURDeCAM31', 'STURDeCAM34', 'STURDeCAM88', 'STURDeCAM84'],
      content: {
        'STURDeCAM31': {
          tableData: [
            ['Sensor ', 'Sony&reg; ISX031'],
            ['Frame Rate ', '3MP @ 60 fps'],
            ['Output Format ', 'UYVY'],
            ['Interface ', 'GMSL2&trade;'],
            ['FOV ', '54.04°(H), 42.86°(V), 70.17°(D) '],
            ['Temperature ', '-40°C to 85°C'],
            ['No of Cameras Supported ', 'upto 8 cameras'],
            ['ISP ', 'On-board high performance ISP'],
            ['Form factor ', '25 x 25 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],
          ],
          highlights: [
            "HDR camera module based on Sony® ISX031 sensor incorporating sub-pixel technology",
            "Low-light 120dB HDR without Motion artifacts",
            "LED Flicker Mitigation (LFM)",
            "GMSL2 interface (Coaxial cable of upto 15m)",
            "Synchronized multi-camera solution",
            "IP69K-rated camera designed for autonomous mobility",
            "Ensures resilient camera streaming by monitoring sensor, MCU, and GMSL link health"
          ],
          title: "STURDeCAM31 - 3MP 120dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM31-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM31",
          siteUrl: "https://www.e-consystems.com/camera-modules/sony-isx031-ip69k-gmsl2-hdr-camera.asp",
          buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM31",
        },
        'STURDeCAM34': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0341AT'],
            ['Frame Rate', '3MP @ 60 fps'],
            ['Output Format', 'UYVY'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '64.62° (H), 51.28° (V), 83.5° (D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '25 x 25 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],
          ],
          highlights: [
            'Houses AR0341AT Image Sensor from onsemi&reg;',
            "Super-exposure pixel technology",
            "Camera provides upto 140dB High Dynamic Range (Supports upto 150dB HDR via raw data output)",
            "Exceptional LED Flicker Mitigation (LFM)",
            "Patented hot-pluggable GMSL support",
            "GMSL2™ interface to transmit power and data up to 15m",
            "IP69K-rated enclosure",
            "Ensures resilient camera streaming by monitoring sensor, ISP and GMSL link health"
          ],
          title: "STURDeCAM34 - 3MP 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM34-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM34",
          siteUrl:"https://www.e-consystems.com/automotive-cameras/3mp-ar0341at-ip69k-gmsl2-140db-hdr-camera.asp",
          buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM34_CUOAGX",
        },
        'STURDeCAM88': {
          tableData: [
            ['Sensor', "OmniVision's&reg; OX08B40"],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'Uncompressed UYVY format'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '68.23°(H), 38.83°(V), 80.22°(D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '42 x 42 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],
          ],
          highlights: [
            "8MP (4K) HDR camera module based on OX08B40, OmniVision's automotive grade image sensor.",
            "140dB High Dynamic Range (HDR) + LED Flicker Mitigation (LFM)",
            "GMSL2™ interface (Coaxial cable of upto 15m)",
            "On-board high performance ISP",
            "Multi camera synchronization support (up to 8 cameras)",
            "Dust and waterproof IP67-rated enclosure",
            "GMSL2 Health Monitoring (Patent Pending)"
          ],
          title: "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM88-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM88",
          siteUrl:"https://www.e-consystems.com/gmsl-cameras/8mp-ox08b40-ip67-gmsl2-140db-hdr-camera.asp",
          buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM88_CUOAGX",
        },
        'STURDeCAM84': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0823AT'],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'RAW 12-bit'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '140.1° (D) x 121.2°(H) x 67.2° (V)'],
            ['Temperature', '-40°C to 85°C'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '20.8mm x 20.8mm'],
          ],
          highlights: [
            "Houses AR0823AT Image Sensor from onsemi",
            "Super-exposure pixel technology",
            "150dB High Dynamic Range (HDR) + LFM",
            "GMSL2 interface to transmit power and data up to 15m",
            "Automotive grade IP69K-rated enclosure",
            "Compliant with Road vehicles and Automotive standards"
          ],
          title: "STURDeCAM84 - World's Tiniest 8MP Automotive Camera",
          documentname: "e-con-STURDeCAM84-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM84",
          siteUrl:"https://www.e-consystems.com/automotive-cameras/4k-ar0823at-ip69k-gmsl2-150db-hdr-camera.asp",
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31, STURDeCAM34, STURDeCAM88,STURDeCAM84]
    },
    '4K GMSL2': {
      tabs: ['STURDeCAM88', 'STURDeCAM84'],
      content: {
        'STURDeCAM88': {
          tableData: [
            ['Sensor', "OmniVision's&reg; OX08B40"],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'Uncompressed UYVY format'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '68.23°(H), 38.83°(V), 80.22°(D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '42 x 42 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],
          ],
          highlights: [
            "8MP (4K) HDR camera module based on OX08B40, OmniVision's automotive grade image sensor.",
            "140dB High Dynamic Range (HDR) + LED Flicker Mitigation (LFM)",
            "GMSL2™ interface (Coaxial cable of upto 15m)",
            "On-board high performance ISP",
            "Multi camera synchronization support (up to 8 cameras)",
            "Dust and waterproof IP67-rated enclosure",
            "GMSL2 Health Monitoring (Patent Pending)"
          ],
          title: "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM88-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM88",
          buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM88_CUOAGX",
          siteUrl:"https://www.e-consystems.com/gmsl-cameras/8mp-ox08b40-ip67-gmsl2-140db-hdr-camera.asp",
        },
        'STURDeCAM84': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0823AT'],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'RAW 12-bit'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '140.1° (D) x 121.2°(H) x 67.2° (V)'],
            ['Temperature', '-40°C to 85°C'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '20.8mm x 20.8mm'],
          ],
          highlights: [
            "Houses AR0823AT Image Sensor from onsemi",
            "Super-exposure pixel technology",
            "150dB High Dynamic Range (HDR) + LFM",
            "GMSL2 interface to transmit power and data up to 15m",
            "Automotive grade IP69K-rated enclosure",
            "Compliant with Road vehicles and Automotive standards"
          ],
          title: "STURDeCAM84 - World's Tiniest 8MP Automotive Camera",
          documentname: "e-con-STURDeCAM84-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM84",
          siteUrl:"https://www.e-consystems.com/automotive-cameras/4k-ar0823at-ip69k-gmsl2-150db-hdr-camera.asp",
        },

      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM88, STURDeCAM84],
    },

    '3MP GMSL2': {
      tabs: ['STURDeCAM31', 'STURDeCAM34'],
      content: {
        'STURDeCAM31': {
          tableData: [
            ['Sensor ', 'Sony&reg; ISX031'],
            ['Frame Rate ', '3MP @ 60 fps'],
            ['Output Format ', 'UYVY'],
            ['Interface ', 'GMSL2&trade;'],
            ['FOV ', '54.04°(H), 42.86°(V), 70.17°(D) '],
            ['Temperature ', '-40°C to 85°C'],
            ['No of Cameras Supported ', 'upto 8 cameras'],
            ['ISP ', 'On-board high performance ISP'],
            ['Form factor ', '25 x 25 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],
          ],
          highlights: [
            "HDR camera module based on Sony® ISX031 sensor incorporating sub-pixel technology",
            "Low-light 120dB HDR without Motion artifacts",
            "LED Flicker Mitigation (LFM)",
            "GMSL2 interface (Coaxial cable of upto 15m)",
            "Synchronized multi-camera solution",
            "IP69K-rated camera designed for autonomous mobility",
            "Ensures resilient camera streaming by monitoring sensor, MCU, and GMSL link health"
          ],
          title: "STURDeCAM31 - 3MP 120dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM31-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM31",
          buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM31",
          siteUrl: "https://www.e-consystems.com/camera-modules/sony-isx031-ip69k-gmsl2-hdr-camera.asp",
        },
        'STURDeCAM34': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0341AT'],
            ['Frame Rate', '3MP @ 60 fps'],
            ['Output Format', 'UYVY'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '64.62° (H), 51.28° (V), 83.5° (D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '25 x 25 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],
          ],
          highlights: [
            'Houses AR0341AT Image Sensor from onsemi&reg;',
            "Super-exposure pixel technology",
            "Camera provides upto 140dB High Dynamic Range (Supports upto 150dB HDR via raw data output)",
            "Exceptional LED Flicker Mitigation (LFM)",
            "Patented hot-pluggable GMSL support",
            "GMSL2™ interface to transmit power and data up to 15m",
            "IP69K-rated enclosure",
            "Ensures resilient camera streaming by monitoring sensor, ISP and GMSL link health"
          ],
          title: "STURDeCAM34 - 3MP 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM34-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM34",
          siteUrl:"https://www.e-consystems.com/automotive-cameras/3mp-ar0341at-ip69k-gmsl2-140db-hdr-camera.asp",
          buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM34_CUOAGX",
        },

      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31, STURDeCAM34],
    },

  };


useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      const [rawLeft, right] = hash.split("/");
      const left = rawLeft?.replace(/-/g, " "); 

      if (rightTabs[left]) {
        setSelectedLeftTab(left);
        if (rightTabs[left].tabs.includes(right)) {
          setSelectedRightTab(right);
          setTimeout(() => {
            const element = document.getElementById(right);
            if (element) {
              // Add offset scrolling here
              const offset = 100; // Adjust as needed
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - offset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 200); 
        } else {
          const defaultRight = rightTabs[left].tabs[0];
          setSelectedRightTab(defaultRight);
        }
      } else {
        for (const leftTab in rightTabs) {
          if (rightTabs[leftTab].tabs.includes(hash)) {
            setSelectedLeftTab(leftTab);
            setSelectedRightTab(hash);
            setTimeout(() => {
              const element = document.getElementById(hash);
              if (element) {
                // Add offset scrolling here
                const offset = 100; // Adjust as needed
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 200);
            break;
          }
        }
      }
    }
  }, []);


  
    useEffect(() => {
      const leftTab = location.state?.leftTab;
      const rightTab = location.state?.rightTab;
  
      if (leftTab && rightTabs[leftTab]) {
        setSelectedLeftTab(leftTab);
        if (rightTab && rightTabs[leftTab].tabs.includes(rightTab)) {
          setSelectedRightTab(rightTab);
        } else {
          setSelectedRightTab(rightTabs[leftTab].tabs[0]);
        }
      }
    }, [location.state]);
  
     useEffect(() => {
    if (windowSize.width <= 1110 && selectedLeftTab === "All Cameras") {
      const fallbackTab = Object.keys(rightTabs).find(
        (tab) => tab !== "All Cameras" && tab !== "Supported Cameras"
      );
      if (fallbackTab) {
        setSelectedLeftTab(fallbackTab);
        setSelectedRightTab(rightTabs[fallbackTab].tabs[0]);
      }
    }
  }, [windowSize.width, selectedLeftTab]);
  
const handleLeftTabClick = (tab) => {
    if (tab === "Supported Cameras") return;
    const defaultRightTab = rightTabs[tab].tabs[0];
    setSelectedLeftTab(tab);
    setSelectedRightTab(defaultRightTab);
        window.history.pushState(
      null, 
      '', 
      `#${tab.replace(/\s+/g, "-")}/${defaultRightTab}`
    );
  };

  const handleRightTabClick = (tab) => {
    setSelectedRightTab(tab);
        window.history.pushState(
      null, 
      '', 
      `#${selectedLeftTab.replace(/\s+/g, "-")}/${tab}`
    );
  };

    const currentContent =
      rightTabs[selectedLeftTab]?.content?.[selectedRightTab] || null;
  
    const currentImage =
      rightTabs[selectedLeftTab]?.images?.[
        rightTabs[selectedLeftTab].tabs.indexOf(selectedRightTab)
      ] || null;

  return (
    <div className="ProductTabs-Total">
      <h1>e-con's Cameras for Forward Facing</h1>
      <div className='mainContainer'>
        <div className="ProductTabs-newcontainpro">
          <div className="ProductTabs-Container">
            <div className="ProductTabs-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`ProductTabs-LeftHeading ${heading === 'All Cameras' ? 'all-tab' : ''} ${heading === 'Camera' ? 'camera' : ''
                    } ${selectedLeftTab === heading ? 'active' : ''}`}
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
                <div className="ProductTabs-ContentBox" id={selectedRightTab}>
                  <ProductTableData siteUrl={currentContent.siteUrl} tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title} highlights={currentContent.highlights} documentname={currentContent.documentname} doctitle={currentContent.doctitle} buynow={currentContent.buynow} />

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

