import React from 'react';
import { Carousel } from 'antd';
import './Casestudy.css';
import birdeye1 from "../../../assets/homepage/casestudybirdeye.jpg";
import birdeye2 from "../../../assets/homepage/casestudybird2.jpg";
import AnimationButton from "../../ButtonComp/AnimationButton"
import { Link } from 'react-router-dom';
const Casestudy = () => {
  const cardData = [
    { image: birdeye1, title: "Cameras for Bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.",to:"" },
    { image: birdeye2, title: "Cameras for Bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.",to:""},
    // { image: birdeye1, title:"Cameras for bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.",to:"" },
    // { image: birdeye1, title:"Cameras for bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.",to:""},
    // { image: birdeye2, title:"Cameras for Bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.",to:""},
    // { image: birdeye1, title:"Cameras for Bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids.",to:"" },
    // { image: birdeye2, title:"Cameras for bird Eye View", description: "The Ingress Protection (IP) rating system is a recognized standard for determining the level of protection an electronic device has against external elements like liquids and solids." ,to:""},
  ];

  return (
    <div className="Casestudy-container">
      <h2 className="Casestudy-title">CASE STUDIES</h2>
      <div className='mainContainer'>
      <div className="Casestudy-desktopView">
        <div className='Casestudy-carouselSlide'>
          {cardData.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / 2);
            
            if (!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [];
            }
            
            resultArray[chunkIndex].push(item);
            
            return resultArray;
          }, []).map((chunk, index) => (
            <div key={index} className="Casestudy-carouselSlide">
              <div className="Casestudy-carouselCards">
                {chunk.map((card, idx) => (
                  <div key={idx} className="Casestudy-card">
                    <div className="Casestudy-cardImage">
                      <Link to="" className='LinkIMG' style={{textDecoration:"none"}}>
                    <img src={card.image} alt={card.title}  />
                    </Link>
                    </div>
                    <div className="Casestudy-cardContent">
                      <Link to="" className='LinkTITLE' style={{textDecoration:"none"}}>
                      <h3 className="Casestudy-cardTitle">{card.title}</h3>
                      </Link>
                      <p className="Casestudy-cardDescription">{card.description}</p>
                      <br></br>
                      <div className="Casestudy-Buttondiv">
                      <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" className="Casestudy-ReadMoreButton" to={card.to}  />
</div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
        </div>
        <br></br>
      </div>

      {/* Card Grid for Mobile */}
      <div className="Casestudy-mobileView">
      <Carousel
      autoplay
      dots={false} 
      arrows={true} 
      slidesToShow={1} 
      slidesToScroll={1} 
    >
        {cardData.map((card, index) => (
          <div key={index} className="Casestudy-mobileCard">
            <img src={card.image} alt={card.title} className="Casestudy-mobileCardImage" />
            <div className="Casestudy-mobileCardContent">
              <h3 className="Casestudy-mobileCardTitle">{card.title}</h3>
              <p className="Casestudy-mobileCardDescription">{card.description}</p>
              <AnimationButton text="Read more" backgroundColor="#003873" hoverColor="white" animationColor="#69ba2f" className="Casestudy-mobileReadMoreButton" to={card.to} />

            </div>
          </div>
        ))}
            </Carousel>

      </div>
    </div>
  );
};

export default Casestudy;
