import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Marketcameras.css';

const Marketcameras = ({ cameras }) => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleNavigation = (link) => {
    const [path, hash] = link.split('#');
    
    navigate(path, {
      state: { shouldScroll: true, hash: `#${hash}` }
    });
  };

  return (
    <div className="Marketcameras-wrapper">
      <div className="Marketcameras-container">
        {cameras.map((option, index) => (
          <div
            key={option.id}
            className={`Marketcameras-item ${
              hoveredIndex === index
                ? 'Marketcameras-item-hovered'
                : hoveredIndex === null
                ? ''
                : 'Marketcameras-item-shrink'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleNavigation(option.link)}
          >
            <div className="Marketcameras-img-wrapper">
              <img
                src={option.img}
                alt={option.title}
                className="Marketcameras-img"
              />
              <div className="Marketcameras-overlay" />
              <div className="Marketcameras-title">{option.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketcameras;