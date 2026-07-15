import React, { useState, useEffect } from 'react';
import { Table, Card, Tag, Typography, theme } from 'antd';
import { motion } from 'framer-motion';
import { Cpu, Maximize2, HardDrive, Wifi, Usb, Zap, HardDriveIcon } from 'lucide-react'; 

const { Title, Text } = Typography;
const { useToken } = theme;

// --- 1. STATIC DATA DEFINITION (JSON KEY-VALUE) ---

// Helper to categorize items for visual appeal
const categoryIcons = {
    'SoC': <Cpu size={16} />,
    'AI Performance': <Maximize2 size={16} />,
    'CPU': <Cpu size={16} />,
    'GPU': <Cpu size={16} />,
    'RAM': <HardDrive size={16} />,
    'Storage': <HardDrive size={16} />,
    'Camera Inputs': <Wifi size={16} />,
    'Networking': <Wifi size={16} />,
    'Wireless Connectivity': <Wifi size={16} />,
    'CAN': <Wifi size={16} />,
    'Serial': <Usb size={16} />,
    'Digital I/O': <Usb size={16} />,
    'Power Input': <Zap size={16} />,
    'Expansion Ports (5G)': <HardDriveIcon size={16} />,
    'Expansion Ports (Wi-Fi)': <HardDriveIcon size={16} />,
    'Expansion Ports (NVMe SSD)': <HardDriveIcon size={16} />,
    'Expansion Ports (microSD)': <HardDriveIcon size={16} />,
    'PCIe Slots': <HardDriveIcon size={16} />,
    'IP class': <Zap size={16} />,
    'Op. Temp. range': <Zap size={16} />,
    'Diagnostic/Debug Ports': <Usb size={16} />,
    'Display out': <Usb size={16} />,
    'USB': <Usb size={16} />,
};

// Raw source data in the cleaner JSON format
const RAW_SPEC_DATA = {
    'Processing Unit (CPU)': { description: 'Jetson Orin™ NX 16GB'},
    'CPU': { description: 'NVIDIA Ampere architecture with 1024 CUDA cores'},
    'AI Performance': { description: 'Up to 100 TOPS' },
    'Camera': { description: '8 x GMSL2 Cameras' },
    'Storage': { description: '256GB SSD preinstalled. *Expandable.' },
    'Ethernet': { description: '2 x 1GbE with PoE, 1 x non PoE' },
    'USB': { description: '2 x USB3.2 Gen 1 port' },
    'Operating Range': { description: '-20 °C to +65 °C / -40 °C to +85 °C *' },
    'BSP': { description: 'Jetpack 6 and higher' },
    'Storage Temperature': { description: '-40 °C to +85 °C' },
    'IP Rating': { description: 'IP67' },
    'Display': { description: 'HDMI' },
    'IMU': { description: '6-axis IMU' },
    'Input Voltage': { description: '8V – 36V' },
    'Power Management': { description: 'MCU' },
    'Sensor Fusion': { description: 'Synchronize different sensors on board (RADAR, LiDAR, Cameras, IMU etc.,)' },
    'CAN': { description: '2 x CAN isolated' },
    'Network': { description: 'WiFi, LTE, GNSS' }
};

// --- Conversion for Ant Design Table ---
// This is done once outside the component for efficiency.
const specificationData = Object.entries(RAW_SPEC_DATA).map(([category, data], index) => ({
    key: index.toString(),
    category,
    ...data,
}));


// --- 2. RESPONSIVE HOOK (To detect mobile for custom rendering) ---

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
};

// --- 3. ANT DESIGN COLUMN DEFINITIONS ---

const columns = [
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        width: '30%',
        render: (text) => {
            //const icon = categoryIcons[text] || null; 
            return (
                <div className="flex items-center space-x-2">
                    {/* {icon} */}
                    <Text strong>{text}</Text>
                </div>
            );
        },
    },
    {
        title: 'Specification',
        dataIndex: 'description',
        key: 'description',
        width: '50%',
        render: (text, record) => record.tag || <Text>{text}</Text>,
    }
];

// --- 4. MAIN COMPONENT ---

const TechnicalSpecsTable = () => {
    const isMobile = useIsMobile(640); 
    const { token } = useToken();

    // Custom Mobile Renderer (Stacked Card View)
    const MobileView = ({ data }) => (
        <div className="space-y-4 p-4">
            {data.map((item) => (
                <Card 
                    key={item.key} 
                    size="small"
                    className="shadow-lg border-2"
                    title={
                        <div className="flex items-center space-x-2">
                             {categoryIcons[item.category] || null}
                            <Title level={5} className="!mb-0">{item.category}</Title>
                        </div>
                    }
                >
                    <div className="flex justify-between items-center">
                         <Text className="text-gray-600">Value:</Text>
                         {item.tag || <Text strong>{item.description}</Text>}
                    </div>
                   
                </Card>
            ))}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 md:p-8"
        >
            <Card
                title={
                    <Title level={isMobile ? 3 : 2} className="!mb-0 text-gray-800 p-2">
                        <span style={{ color: token.colorPrimary}}>Technical Specifications</span>
                    </Title>
                }
                bordered={false}
                style={{ borderRadius: token.borderRadiusLG, boxShadow: token.boxShadowSecondary }}
                bodyStyle={{ padding: isMobile ? 0 : '24px' }}
            >
                {isMobile ? (
                    <MobileView data={specificationData} />
                ) : (
                    <div>
                    <Table
                        columns={columns}
                        dataSource={specificationData}
                        pagination={false}
                        scroll={{ x: 800 }} 
                        className="w-full"
                        size="large"
                    />
                    <p>
                        * - This is based on demand. Please contact <a href="mailto:camerasolutions@e-consystems.com" style={{ display: 'inline' }}>camerasolutions@e-consystems.com</a> for more details.
                    </p>
                    </div>
                )}
            </Card>
        </motion.div>
    );
};



export default TechnicalSpecsTable;