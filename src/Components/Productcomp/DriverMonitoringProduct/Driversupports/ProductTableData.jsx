import React from 'react';
import Table from 'react-bootstrap/Table';
import "./ProductTableData.css"; 
import Modelbutton from "../../../ButtonComp/Modelbutton"

function ProductTableData({ tableData, imageSrc,productName,title }) {
  return (
    <div className="ProductTableData-TotalContBox">
            <div className='mainContainer'>
            <h4 className='ProductTable-title'>{title}</h4>

  <div className="ProductTableData-ContainerBox">
    <div className="ProductTableData-ImageColumn">
    <div className="ProductTableData-ImageWrapper">
      {imageSrc && <img src={imageSrc} alt="tab" />}
      <Modelbutton className="ProducTable-button" text="Download Tech Document" productName={productName} type="download" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"/>
</div>
    </div>
    <div className="ProductTableData-LeftColumn">
    <Table responsive bordered style={{ borderColor: "#344ea1" }}>
  <tbody>
    {tableData.map((row, index) => (
      <tr key={index}>
        {row.length === 1 ? (
          <td colSpan="2" className="table-cell" dangerouslySetInnerHTML={{ __html: row[0] }} />
        ) : (
          row.map((cell, cellIndex) => (
            <td key={cellIndex} className="table-cell" dangerouslySetInnerHTML={{ __html: cell }} />
          ))
        )}
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
