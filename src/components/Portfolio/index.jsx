import React from 'react';
import image from '../../containers/images/selvam.jpg';
import './index.css';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-image">
        <div className="image-frame">
          <img loading="lazy" src={image} alt="selvam image" />
        </div>
      </div>
      <div className="portfolio-introduction">
        <div className="portfolio-title">
          <span className="portflio-title--text">Introduction</span>
        </div>
        <h3 className="portfolio-role">
          <span className="right-arrow-icon">📐</span> Front End Web Developer
        </h3>
        <h3>
          Hello, My name is <span className="my-name">Selvam Jayakumar,</span>
        </h3>
        <p>
          Working as a React JS developer, I have 2+ year of experience in Web
          developement!
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
