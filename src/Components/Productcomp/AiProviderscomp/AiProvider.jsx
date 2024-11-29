import React from "react";
import "./AiProvider.css";

const AiProvider = () => {
  const content = {
    title: "Who can use SHELFVista?",
    description:
      "Adapts to businesses of all sizes. While primarily optimized for retail environments, its capabilities extend to various sectors where inventory management and space utilization are crucial.",
    categories: ["Retailers", "CPGs Companies", "AI Solution Provider"],
  };

  return (
    <div className="AIProvider-container">
      <div className="mainContainer">
      <div className="AIProvider-header">

        <h2 className="AIProvider-title">{content.title}</h2>
        <div className="AIProvider-categories-container">
        <ul className="AIProvider-categories">
          {content.categories.map((category, index) => (
            <li key={index} className="AIProvider-category-item">
              <span className="AIProvider-tick">&#10003;</span> {category}
            </li>
          ))}
        </ul>
      </div>
      <br></br>
        <p className="AIProvider-description">{content.description}</p>
      </div>
      </div>
    </div>
  );
};

export default AiProvider;
