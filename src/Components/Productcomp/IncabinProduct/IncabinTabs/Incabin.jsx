import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ProductTableData from "../Driversupports/ProductTableData"; 

// --- Camera Images ---
import STURDeCAM27 from "../../../../assets/allcameras/sturdecam29.jpg"; // Renamed to reflect eDACAM27/29 usage
import STURDeCAM29 from "../../../../assets/allcameras/sturdecam29-product-image.png"; 
import STURDeCAM57 from "../../../../assets/allcameras/sturdecam57-product-image.png";

// --- Platform Images (for the bottom section) ---
import ambrella from "../../../../assets/Productpage/platformsupport/ambarella.jpg";
import renasas from '../../../../assets/Productpage/platformsupport/renesas.jpg';
import qualcum from "../../../../assets/Productpage/platformsupport/qualcom.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg"

// Reusable hook to get window size (unchanged)
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

const cameraData = {
    'eDACAM27': {
        tableData: [
            ['Sensor', 'OmniVision&trade; OV2312'],
            ['Frame Rate', '2MP @ 36 fps'],
            ['Output Format', 'RGB - UYVY & IR - UYVY'],
            ['Interface', 'GMSL2'],
            ['FOV', ' 87.89° (D) x 80.86° (H) x 50.72° (V)'],
            ['Temperature', ' -40°C to +80°C'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '30 x 30 mm'],
        ],
        highlights: [
            "Automotive-grade image sensor with a well-tuned ISP",
            "Supports both day and night monitoring",
            "940nm IR illumination LED ",
            "Available in multiple FOV options",
        ],
        title: "eDACAM27 - 2MP OV2312 Global Shutter RGB-IR Camera",
        documentname: null, // Not present in original content
        doctitle: "Technical documents for STURDeCAM27",
        buynow: null, // Not present in original content
        image: STURDeCAM29,
    },
    'eDACAM29': {
        tableData: [
            ['Sensor', 'OmniVision&trade; OV2311 '],
            ['Frame Rate', '2MP (1600 × 1300) @ 60 FPS'],
            ['Output Format', 'Y10'],
            ['Interface', 'GMSL2'],
            ['DFOV', 'DxHxV – 131° × 93° × 74°'],
            ['Temperature', '-40°C to 85°C'],
            ['ISP', 'NVIDIA Jetson ISP (AE & AG)'],
            ['Form factor', '59.02 mm × 52.52 mm × 42.75 mm'],
        ],
        highlights: [
            "Monochrome global shutter camera optimized for 940 nm IR imaging.",
            "Supports both day and night monitoring",
            "940nm IR illumination LED ",
        ],
        title: "eDACAM29 - 2MP OV2311 Global Shutter Monochrome Camera",
        documentname: null, // Not present in original content
        doctitle: "Technical documents for STURDeCAM29",
        buynow: null, // Not present in original content
        image: STURDeCAM29,
    },
     'STURDeCAM57': {
                tableData: [
                    ['Sensor', '5MP Sensor'],
                    ['Frame Rate', ' 5MP @ 50 fps '],
                    ['Output Format', 'UYVY RGB and IR'],
                    ['Interface', 'GMSL2&trade;'],
                    ['FOV', '114.76°H x 85.92°V x 148.32°D'],
                    ['Temperature', '-40°C to 85°C'],
                    ['No of Cameras Supported', 'Single camera'],
                    ['ISP', 'On-board high performance ISP'],
                    ['Pixel Size', '2.2μm x 2.2μm'],
                    
                ],
                highlights: [
                    'Houses 5MP Automotive grade Image Sensor',
                    "Global shutter",
                    "Streams RGB and IR frames simultaneously",
                    "On-board Automotive grade ISP",
                    "GMSL2 interface to transmit power and data up to 15m",
                    "Automotive grade IP67-rated enclosure"
                ],
                title: "STURDeCAM57 - 5MP RGB-IR Global shutter Camera",
                documentname: "e-con-STURDeCAM57-technical-documents.zip",
                doctitle: "Technical documents for STURDeCAM57",
                image: STURDeCAM57, // Added image directly to data
                 buynow: "https://www.e-consystems.com/webstore.asp#STURDeCAM57",
                siteUrl: "https://www.e-consystems.com/gmsl-cameras/5mp-ox05b1s-rgb-ir-global-shutter-gmsl2-camera.asp"
            },
};

const tabStructure = {
    'Supported Cameras': {
        tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
        bgColor: '#f1f2f2',
        color: '#344ea1',
    },
    'All cameras': { // Case matches your original 'All cameras' key
        tabs: ['STURDeCAM57','eDACAM27', 'eDACAM29'],
        bgColor: 'white',
        color: '#344ea1',
    }
};


const Incabin = () => {
    const [selectedLeftTab, setSelectedLeftTab] = useState('All cameras');
    const [selectedRightTab, setSelectedRightTab] = useState('STURDeCAM57');

    const location = useLocation();
    const windowSize = useWindowSize();

    const platformImages = [
        { id: 1, src: [ambrella], alt: 'ambrella' },
        { id: 2, src: [renasas], alt: 'renasas' },
        { id: 3, src: [qualcum], alt: "qualcum" },
        { id: 4, src: [npx], alt: 'nxp' },
        { id: 5, src: [nvidia], alt: 'nvidia' }
    ];

    // --- Hook Logic (Standard tab/URL/responsive management - referencing tabStructure) ---

    useEffect(() => {
        const hash = window.location.hash?.replace("#", "");
        if (hash) {
            const [rawLeft, right] = hash.split("/");
            const left = rawLeft?.replace(/-/g, " ");

            if (tabStructure[left]) {
                setSelectedLeftTab(left);
                if (tabStructure[left].tabs.includes(right)) {
                    setSelectedRightTab(right);
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
                    const defaultRight = tabStructure[left].tabs[0];
                    setSelectedRightTab(defaultRight);
                }
            } else {
                for (const leftTab in tabStructure) {
                    if (tabStructure[leftTab].tabs.includes(hash)) {
                        setSelectedLeftTab(leftTab);
                        setSelectedRightTab(hash);
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

    useEffect(() => {
       
        if (windowSize.width <= 1110 && selectedLeftTab === "All cameras") {
            const fallbackTab = Object.keys(tabStructure).find(
                (tab) => tab !== "All cameras" && tab !== "Supported Cameras"
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
            <h1>e-con's Cameras for In-Cabin Monitoring Cameras</h1>
            <div className='mainContainer'>
                <div className="ProductTabs-newcontainpro">
                    <div className="ProductTabs-Container">
                        <div className="ProductTabs-LeftSide">
                            {/* Use tabStructure instead of rightTabs */}
                            {Object.keys(tabStructure).map((heading, index) => (
                                <div
                                    key={index}
                                    className={`ProductTabs-LeftHeading ${heading === 'All cameras' ? 'all-tab' : ''} ${heading === 'Camera' ? 'camera' : ''
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
                            {/* Use tabStructure instead of rightTabs */}
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
                                </div>
                            )}

                            {selectedRightTab && currentContent && (
                                <div className="ProductTabs-ContentBox" id={selectedRightTab}>
                                    {/* Pass the retrieved data to the child component */}
                                    <ProductTableData
                                        tableData={currentContent.tableData}
                                        imageSrc={currentImage}
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

export default Incabin;