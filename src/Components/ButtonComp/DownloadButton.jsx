import React from 'react';
import { Button } from 'antd';
const DownloadButton = (value) => {
const handleDownload = async () => {
    const response = await fetch(`https://api.dental.e-consystems.com/download`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ param: value.url }),
        });
        if(response.status === 200){
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${value.url}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
        else{
            alert(response.statusText);
        }
        
};

return (
<Button type="primary" key="console" onClick={handleDownload}>
Download
</Button>
);
};

export default DownloadButton;