import React from 'react';
import Table from 'react-bootstrap/Table';
import "./ProductTableData.css"; 

function ProductTableData({ tableData, imageSrc }) {
  return (
    <div className="ProductTableData-TotalContBox">
            <div className='mainContainer'>
  <div className="ProductTableData-ContainerBox">
    <div className="ProductTableData-ImageColumn">
      {imageSrc && <img src={imageSrc} alt="tab" />}
    </div>
    <div className="ProductTableData-LeftColumn">
    <Table responsive bordered style={{ borderColor: "#344ea1" }}>
  <tbody>
    {tableData.map((row, index) => (
      <tr key={index}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex} className="table-cell" dangerouslySetInnerHTML={{ __html: cell }} />
        ))}
      </tr>
    ))}
  </tbody>
</Table>

    </div>
  </div>  
  </div>
</div>

  );
}

export default ProductTableData;
