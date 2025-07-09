import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Green Haven</h1>
          <p className="company-description">
            Welcome to Green Haven, your premier destination for premium houseplants. 
            We specialize in bringing nature's beauty into your home with our carefully 
            curated collection of succulents, tropical plants, and air plants. Each plant 
            is hand-selected for quality and beauty, helping you create a peaceful, 
            green sanctuary in your living space. Whether you're a seasoned plant parent 
            or just starting your green journey, we have the perfect plants to transform 
            your home into a lush, vibrant oasis.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 