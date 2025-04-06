import React from "react";
import "./Totaldoc.css";

const Specification = () => {
  return (
    <div className="specification-container">
      {/* First UL with nested UL inside LI */}
      <ul className="specification-list">
        <li className="specification-item">
          <span className="specification-tick1">✓</span>
          <span className="highlighted-text">Key features:</span>
          <ul className="specification-sublist">
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Frame Rate: Streams Full HD @ 30fps & 3MP @ 30fps <br></br>
              Refer pdfDatasheet for complete frame rate details.
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Output format: UYVY
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Supported OS: Windows 10/11, Linux (Ubuntu 16.04/18.04/20.04)
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Unique ID for each camera
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Lightweight, versatile, and portable two-board solution
            </li>
          </ul>
        </li>
      </ul>

      {/* Second UL with nested UL inside LI and UL inside LI */}
      <ul className="specification-list">
        <li className="specification-item">
          <span className="specification-tick1">✓</span>
          <span className="highlighted-text">Interface:</span>
          <ul className="specification-sublist">
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> USB 3.2 Gen 1 device
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Type-C reversible interface connector
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> UVC Compliant - no additional drivers required
            </li>
          </ul>
        </li>
      </ul>

      {/* Module Features */}
      <ul className="specification-list">
        <li className="specification-item">
          <span className="specification-tick1">✓</span>
          <span className="highlighted-text">Module Features:</span>
          <ul className="specification-sublist">
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Sensor: ISX031 from Sony®
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Focus Type: Fixed focus
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Sensor Resolution: 3MP
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Chroma: Color
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Shutter Type: CMOS Rolling Shutter
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Optical Format: 1/2.42"
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Aspect Ratio: 5:4
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Output Format: UYVY
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Pixel Size: 3μm x 3μm
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Sensor Active Area: 1937 (H) x 1553 (V)
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Array Size: 1937 (H) x 1553 (V)
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Dynamic Range: Max up to 120 dB
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Lens Holder: M12 (S-Mount)
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> FOV:
              <ul className="specification-nestedlist">
                <li className="specification-nesteditem">
                  <span className="specification-tick">✓</span> Narrow angle: 54.04°(H), 42.86°(V), 70.17°(D)
                </li>
                <li className="specification-nesteditem">
                  <span className="specification-tick">✓</span> Wide angle: 128.7°(H), 98.7°(V), 170.1°(D)
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      {/* Electrical & Mechanical */}
      <ul className="specification-list">
        <li className="specification-item">
          <span className="specification-tick1">✓</span>
          <span className="highlighted-text">Electrical & Mechanical:</span>
          <ul className="specification-sublist">
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Operating Voltage: 5V +/- 5%
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Operating Temperature Range:
              <ul className="specification-nestedlist">
                <li className="specification-nesteditem">
                  <span className="specification-tick">✓</span> Without Enclosure: -40°C to 85°C
                </li>
                <li className="specification-nesteditem">
                  <span className="specification-tick">✓</span> With Enclosure: -40°C to 70°C
                </li>
              </ul>
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Typical power consumption: Min - 0.87W & Max - 1.9W
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Size in mm (l x b):
              <ul className="specification-nestedlist">
                <li className="specification-nesteditem">
                  <span className="specification-tick">✓</span> Without enclosure, Without Lens: 30 x 30 x 30.2 mm
                </li>
                <li className="specification-nesteditem">
                  <span className="specification-tick">✓</span> With enclosure, Without Lens: 35.3 x 35.3 x 29 mm
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      {/* Miscellaneous */}
      <ul className="specification-list">
        <li className="specification-item">
          <span className="specification-tick1">✓</span>
          <span className="highlighted-text">Miscellaneous:</span>
          <ul className="specification-sublist">
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> RoHS
            </li>
            <li className="specification-subitem">
              <span className="specification-tick">✓</span> Refer detailed standards & compliance here
            </li>
          </ul>
          <span className="specification-tick1">✓</span>
          <span className="highlighted-text">Launched on: 25 July 2024</span>
        </li>
      </ul>
    </div>
  );
};

export default Specification;
