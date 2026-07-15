import React from 'react';
import Table from 'react-bootstrap/Table';
import NewReleasesIcon from "../../../../assets/new-icon.png";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import AnimationButton from "../../../ButtonComp/AnimationButton";

function ProductTableData({
  tableData,
  imageSrc,
  title,
  highlights,
  documentname,
  doctitle,
  buynow,
  siteUrl,
}) {
  return (
    <div className="ProductTableData-TotalContBox">
      <div className="mainContainer">
        <div className='ProductTable-Box'>
         {siteUrl ? (<a href={siteUrl} target="_blank" style={{textDecoration:"none"}}>
                     <h4 className="ProductTable-title">
                     {title === "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera Module" && (
                       <img src={NewReleasesIcon} alt="new release icon" className="ProductTable-icon" />
                     )}
                     {title}
                   </h4></a>):(<h4 className="ProductTable-title">
                     {title === "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera Module" && (
                       <img src={NewReleasesIcon} alt="new release icon" className="ProductTable-icon" />
                     )}
                     {title}
                   </h4>)}

          <div className="ProductTableData-ImageHighlightRow">
            {siteUrl ? (<a href={siteUrl} target="_blank">
            <div className="ProductTableData-ImageColumn">
              {imageSrc && <img src={imageSrc} alt="Product" />}
            </div></a>):(<div className="ProductTableData-ImageColumn">
              {imageSrc && <img src={imageSrc} alt="Product" />}
            </div>)}

            <div className="ProductTableData-HighlightColumn">
              <h5 className="highlight-heading">Highlights</h5>
              <ul className="highlight-list">
                {highlights?.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>

          <div className="ProductTabs-total-Button">
            {buynow && (
              <AnimationButton
                text="Buy now"
                className="ProductTabs-Button1"
                backgroundColor="#00aeef"
                hoverColor="#344ea1"
                to={buynow}
              />
            )}
            <Modelbutton
              text="Contact Us"
              className="ProductTabs-Button"
              backgroundColor="#344ea1"
              hoverColor="#00aeef"
            />
            <Modelbutton
              text="Download Tech document"
              className="ProductTabs-Button"
              backgroundColor="#69ba2f"
              hoverColor="#00aeef"
              productName="ProductDocument"
              docName={documentname}
              title={doctitle}
            />
          </div>
        </div>

        <div className="ProductTableData-SpecGridWrapper">
          <div className="ProductTableData-SpecGrid">
            {tableData.map((row, index) => {
              const isCertificationsRow =
                row.length === 2 && row[0].toLowerCase().includes("certifications");
              return (
                <div
                  key={index}
                  className={`spec-item ${isCertificationsRow ? "full-width-item" : ""}`}
                >
                  <div className="spec-label" dangerouslySetInnerHTML={{ __html: row[0] }} />
                  <div
                    className={`spec-value ${isCertificationsRow ? "spec-certifications" : ""}`}
                    dangerouslySetInnerHTML={{ __html: row[1] }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTableData;