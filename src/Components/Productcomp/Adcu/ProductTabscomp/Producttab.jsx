import React, { useState, useEffect, useRef } from "react";
import './ProductTab.css';
import ProductTableData from "../Platformsupport/ProductTableData";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import { useLocation } from 'react-router-dom';

// --- Camera Images ---
import STURDeCAM31 from "../../../../assets/allcameras/sturdecam31.jpg"
import STURDeCAM88 from "../../../../assets/allcameras/sturdecam88_cuoagx.png"
import STURDeCAM57 from "../../../../assets/allcameras/sturdecam57.png"

// --- Platform Images (Assuming these are for the bottom section) ---
import platform from "../../../../assets/Productpage/platformsupport/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import renesas from "../../../../assets/Productpage/platformsupport/renesas.jpg"

// Reusable hook to get window size
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
                // height is not needed for your current logic but kept for completeness
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

const cameraData = {
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
        image: STURDeCAM31, // Added image directly to data
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
        siteUrl: "https://www.e-consystems.com/gmsl-cameras/8mp-ox08b40-ip67-gmsl2-140db-hdr-camera.asp",
        buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM88_CUOAGX",
        image: STURDeCAM88, // Added image directly to data
    },
     'STURDeCAM57': {
                    tableData: [
                        ['Sensor', 'OMNIVISION’s OX05B1S'],
                        ['Frame Rate', ' 5MP @ 50 fps '],
                        ['Output Format', 'UYVY RGB and IR'],
                        ['Interface', 'GMSL2&trade;'],
                        ['FOV', 'TBD'],
                        ['Temperature', '-40°C to 85°C'],
                        ['No of Cameras Supported', 'Single camera'],
                        ['ISP', 'On-board high performance ISP'],
                        ['Pixel Size', '2.2μm x 2.2μm'],
                        
                    ],
                    highlights: [
                        'Houses OMNIVISION OX05B1S Image Sensor',
                        "Global shutter",
                        "Streams RGB and IR frames simultaneously",
                        "On-board Automotive grade ISP",
                        "GMSL2 interface to transmit power and data up to 15m",
                        "Automotive grade IP67-rated enclosure"
                    ],
                    title: "STURDeCAM57 - 5MP RGB-IR Global shutter Camera",
                    image: STURDeCAM57, // Added image directly to data
                    siteUrl: "https://www.e-consystems.com/gmsl-cameras/5mp-ox05b1s-rgb-ir-global-shutter-gmsl2-camera.asp"
                },
};


const tabStructure = {
    'Supported Cameras': {
        tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'], 
        bgColor: '#f1f2f2',
        color: '#344ea1',
    },
    'All Cameras': {
        tabs: ['STURDeCAM31', 'STURDeCAM88', 'STURDeCAM57'],
        bgColor: 'white',
        color: '#344ea1',
    },
    '3MP GMSL2': {
        tabs: ['STURDeCAM31'],
        bgColor: 'white',
        color: '#344ea1',
    },
    '4K GMSL2': {
        tabs: ['STURDeCAM88'],
        bgColor: 'white',
        color: '#344ea1',
    },
    '5MP GMSL2': {
        tabs: ['STURDeCAM57'],
        bgColor: 'white',
        color: '#344ea1',
    }
   
};

const Producttab = () => {
    const [selectedLeftTab, setSelectedLeftTab] = useState('All Cameras');
    const [selectedRightTab, setSelectedRightTab] = useState('STURDeCAM31');
    const location = useLocation();
    const windowSize = useWindowSize();
    const isUserInitiated = useRef(true); // Retained but not explicitly used in the final version

    const platformImages = [
        { id: 1, src: [platform], alt: 'platform support' },
        { id: 2, src: [nvidia], alt: 'nvidia' },
        { id: 3, src: [npx], alt: "npx" },
        { id: 4, src: [renesas], alt: 'renasas' }
    ];

    // Initial load effect (using hash in URL)
    useEffect(() => {
        const hash = window.location.hash?.replace("#", "");
        if (hash) {
            const [rawLeft, right] = hash.split("/");
            const left = rawLeft?.replace(/-/g, " ");

            // Check if left tab exists
            if (tabStructure[left]) {
                setSelectedLeftTab(left);
                // Check if right tab exists in the selected left tab's group
                if (tabStructure[left].tabs.includes(right)) {
                    setSelectedRightTab(right);
                    // Scroll logic (unchanged)
                    setTimeout(() => {
                        const element = document.getElementById(right);
                        if (element) {
                            const offset = 100;
                            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                            const offsetPosition = elementPosition - offset;

                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }, 200);
                } else {
                    // Fallback to the first right tab
                    const defaultRight = tabStructure[left].tabs[0];
                    setSelectedRightTab(defaultRight);
                }
            } else {
                // Check if hash is a right tab name (e.g., #STURDeCAM31)
                for (const leftTab in tabStructure) {
                    if (tabStructure[leftTab].tabs.includes(hash)) {
                        setSelectedLeftTab(leftTab);
                        setSelectedRightTab(hash);
                        // Scroll logic (unchanged)
                        setTimeout(() => {
                            const element = document.getElementById(hash);
                            if (element) {
                                const offset = 100;
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


    // Location state effect (for programmatic navigation)
    useEffect(() => {
        const leftTab = location.state?.leftTab;
        const rightTab = location.state?.rightTab;

        if (leftTab && tabStructure[leftTab]) {
            setSelectedLeftTab(leftTab);
            if (rightTab && tabStructure[leftTab].tabs.includes(rightTab)) {
                setSelectedRightTab(rightTab);
            } else {
                setSelectedRightTab(tabStructure[leftTab].tabs[0]);
            }
        }
    }, [location.state]);

    // Responsive behavior for 'All Cameras' tab
    useEffect(() => {
        if (windowSize.width <= 1110 && selectedLeftTab === "All Cameras") {
            const fallbackTab = Object.keys(tabStructure).find(
                (tab) => tab !== "All Cameras" && tab !== "Supported Cameras"
            );
            if (fallbackTab) {
                setSelectedLeftTab(fallbackTab);
                setSelectedRightTab(tabStructure[fallbackTab].tabs[0]);
            }
        }
    }, [windowSize.width, selectedLeftTab]);


    const handleLeftTabClick = (tab) => {
        if (tab === "Supported Cameras") return;
        const defaultRightTab = tabStructure[tab].tabs[0];
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


    const currentContent = cameraData[selectedRightTab] || null;
    const currentImage = currentContent?.image || null;

    return (
        <div className="ProductTabs-Total">
            <h1>e-con's Cameras for ADCU</h1>
            <div className='mainContainer'>
                <div className="ProductTabs-newcontainpro">
                    <div className="ProductTabs-Container">
                        <div className="ProductTabs-LeftSide">
                            {Object.keys(tabStructure).map((heading, index) => (
                                <div
                                    key={index}
                                    className={`ProductTabs-LeftHeading ${heading === 'All Cameras' ? 'all-tab' : ''} ${heading === 'Camera' ? 'camera' : ''
                                        } ${selectedLeftTab === heading ? 'active' : ''}`}
                                    onClick={() => handleLeftTabClick(heading)}
                                    style={{
                                        // Use tabStructure for styles
                                        backgroundColor: tabStructure[heading].bgColor,
                                        color: tabStructure[heading].color,
                                        borderColor: selectedLeftTab === heading ? '#003873' : '#344ea1',
                                        cursor: heading === 'Supported Cameras' ? 'default' : 'pointer',
                                    }}
                                >
                                    {heading}
                                </div>

                            ))}
                             
                        </div>


                        <div className="ProductTabs-RightSide">
                            {tabStructure[selectedLeftTab].tabs && (
                                <div className="ProductTabs-RightTabBox">
                                    {tabStructure[selectedLeftTab].tabs.map((rightTab, index) => (
                                        <div
                                            key={index}
                                            className={`ProductTabs-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                                            onClick={() => handleRightTabClick(rightTab)}
                                        >
                                            {rightTab}
                                        </div>
                                    ))}
                                    <div
                                   
                                   style={{backgroundColor:'#00aeef',color:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'5px',cursor:'pointer'}}
                                 
                                >
                                   <a href="https://www.e-consystems.com/gmsl-camera.asp" style={{color:'white',padding:'.5em 1em',textDecoration:'none'}}>Other Supported Cameras</a>
                                </div>
                                </div>
                            )}

                            {selectedRightTab && currentContent && (
                                <div className="ProductTabs-ContentBox" id={selectedRightTab}>
                                    {/* Pass the retrieved data to the child component */}
                                    <ProductTableData
                                        tableData={currentContent.tableData}
                                        imageSrc={currentImage} // Now directly available
                                        productName={selectedRightTab}
                                        title={currentContent.title}
                                        highlights={currentContent.highlights}
                                        documentname={currentContent.documentname}
                                        doctitle={currentContent.doctitle}
                                        buynow={currentContent.buynow}
                                        siteUrl={currentContent.siteUrl}
                                    />

                                    <div className="Productinsidetab-container">
                                        <div className="Productinsidetab-image-row">
                                            {platformImages.map((image, index) => (
                                                <React.Fragment key={image.id}>
                                                    <div className="Productinsidetab-image-box">
                                                        <div className="Productinsidetab-image-wrapper">
                                                            <img src={image.src} alt={image.alt} />
                                                        </div>
                                                    </div>
                                                    {index < platformImages.length - 1 && <div className="Productinsidetab-divider"></div>}
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

export default Producttab;