import React from 'react';
import './TomorrowSection.css';

export default function TomorrowSection() {
  return (
    <section className="tomorrow-section" id="studio">
      <div className="tomorrow-container">
        
        {/* Left Side: Content */}
        <div className="tomorrow-content">
          <h2 className="tomorrow-title">
            <span className="underline-brush">Tomorrow</span> should<br />
            be better than <span className="highlight-pill"><em>today</em></span>
          </h2>
          <p className="tomorrow-desc">
            We are a team of strategists, designers, communicators, and researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <a href="#studio-more" className="read-more-btn">
            <span>Read more</span>
            <div className="read-more-line"></div>
          </a>
        </div>

        {/* Right Side: Image with floating decorations */}
        <div className="tomorrow-image-wrapper">
          {/* <div className="blob-pink-bg"></div> */}
           <div className="curve-line"></div>

          
          <div 
            className="tomorrow-circle-img"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=600&q=80')` 
            }}
          />
        </div>

      </div>
    </section>
  );
}
