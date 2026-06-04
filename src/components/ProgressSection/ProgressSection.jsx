import React from 'react';
import './ProgressSection.css';

export default function ProgressSection() {
  return (
    <section className="progress-section" id="services">
      <div className="progress-container">
        
        {/* Left Side: Circular Image with floating triangles */}
        <div className="progress-image-wrapper">
          
          <div 
            className="progress-circle-img"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=600&q=80')` 
            }}
          />

        </div>

        {/* Right Side: Content */}
        <div className="progress-content">
          <h2 className="progress-title">
            <span className="highlight-pill">See</span> how we can<br />
            help you <span className="underline-brush">progress</span>
          </h2>
          <p className="progress-desc">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms, and social research.
          </p>
          <a href="#services-more" className="read-more-btn">
            <span>Read more</span>
            <div className="read-more-line"></div>
          </a>
        </div>

      </div>

    </section>
  );
}
