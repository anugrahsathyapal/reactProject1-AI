import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img  alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Empowering Innovation with AI
        </h1>
        <p className="primary-text">
        At the core of our mission is the seamless fusion of artificial intelligence with human ingenuity. 
        </p>
        <p className="primary-text">
        By harnessing the power of advanced algorithms our AI solutions are designed to solve real-world challenges, transform industries, and improve the quality of life. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;