import React from 'react';
import './TestimonialSection.css';

const LEFT_AVATARS = [
  { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80', size: 'sm', className: 'av-left-1' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80', size: 'lg', className: 'av-left-2' },
  { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=120&h=120&q=80', size: 'sm', className: 'av-left-3' },
];

const RIGHT_AVATARS = [
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80', size: 'sm', className: 'av-right-1' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', size: 'lg', className: 'av-right-2' },
  { url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80', size: 'sm', className: 'av-right-3' },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        
        <h2 className="testimonial-heading">
          <span className="highlight-pill">What</span> our customer<br />
          says <span className="underline-brush">About Us</span>
        </h2>

        <div className="testimonial-layout">
          
          {/* Left Avatars */}
          <div className="side-avatars left-side">
            {LEFT_AVATARS.map((av, index) => (
              <div 
                key={`left-av-${index}`}
                className={`testimonial-avatar ${av.size} ${av.className}`}
                style={{ backgroundImage: `url(${av.url})` }}
              />
            ))}
          </div>

          {/* Testimonial Quote Card */}
          <div className="testimonial-card">
            <div className="quote-icon open">“</div>
            
            <p className="testimonial-quote">
              <strong>Elementium</strong> delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
            </p>
            
            <div className="quote-icon close">”</div>
            <div className="quote-author">- Product Manager, TechCorp</div>
          </div>

          {/* Right Avatars */}
          <div className="side-avatars right-side">
            {RIGHT_AVATARS.map((av, index) => (
              <div 
                key={`right-av-${index}`}
                className={`testimonial-avatar ${av.size} ${av.className}`}
                style={{ backgroundImage: `url(${av.url})` }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
