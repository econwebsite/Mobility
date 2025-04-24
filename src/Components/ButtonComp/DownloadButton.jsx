import React, { useCallback } from 'react';
import { Button } from 'antd';

const DownloadButton = ({ documentName }) => {
  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(`https://api.dental.e-consystems.com/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ param: documentName }),
      });

      if (response.status === 200) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${documentName}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); 
      } else {
        alert(`Download failed: ${response.statusText}`);
     }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  }, [documentName]);

  return (
    <div>
    <Button type="primary" onClick={handleDownload}>
      Download
    </Button>
    
    </div>
  );
};

export default DownloadButton;
