import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import "./Testing.css";
import Productbanner from "./Components/Productcomp/SurroundviewProduct/ProductBanner/ProductBanner"

// Import dynamically rendered components
const Lion = () => <Productbanner/>;
const Tiger = () => <p><b>Tiger</b> is a strong and majestic animal.</p>;
const Elephant = () => <p><b>Elephant</b> is the largest land mammal.</p>;
const Apple = () => <p><b>Apple</b> is a nutritious fruit.</p>;
const Banana = () => <p><b>Banana</b> is rich in potassium.</p>;
const Orange = () => <p><b>Orange</b> is a citrus fruit high in Vitamin C.</p>;
const Carrot = () => <p><b>Carrot</b> is great for vision.</p>;
const Broccoli = () => <p><b>Broccoli</b> is full of antioxidants.</p>;
const Potato = () => <p><b>Potato</b> is a versatile vegetable.</p>;

const componentMap = {
  Lion,
  Tiger,
  Elephant,
  Apple,
  Banana,
  Orange,
  Carrot,
  Broccoli,
  Potato,
};

const categories = {
  Animals: ["Lion", "Tiger", "Elephant"],
  Fruits: ["Apple", "Banana", "Orange"],
  Vegetables: ["Carrot", "Broccoli", "Potato"],
};

const CustomTabLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("Animals");
  const [selectedItem, setSelectedItem] = useState(categories["Animals"][0]);

  const SelectedComponent = componentMap[selectedItem] || (() => <p>No content available</p>);

  return (
    <div className="Mobility-Tabs">
      <div className="tabs-container">
        <div className="vertical-box">
          <div className="tab-start">Start</div>
          {Object.keys(categories).map((category) => (
            <div
              key={category}
              className={`tab-category ${selectedCategory === category ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedItem(categories[category][0]); 
              }}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="content-box">
          <div className="content-inner">
            <div className="horizontal-tabs">
              {categories[selectedCategory].map((item) => (
                <div
                  key={item}
                  className={`tab-item ${selectedItem === item ? "active" : ""}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="dynamic-content">
              <SelectedComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTabLayout;
