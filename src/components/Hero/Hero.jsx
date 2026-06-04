import React from 'react';
import './Hero.css';

const AVATARS = [
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', size: 'lg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', size: 'md' },
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', size: 'lg' },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', size: 'sm' },
  { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80', size: 'md' },
  { url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80', size: 'md' },
  { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80', size: 'lg' },
  { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', size: 'sm' },
];

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          The <span className="underline-brush">thinkers</span> and<br />
          <span className="highlight-blob">doers</span> were changing<br />
          the <span className="highlight-pill">status</span> Quo with
        </h1>
        
        <p className="hero-subtitle">
          We are a team of strategists, designers, communicators, and researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Scattered interactive avatars */}
        <div className="hero-avatars-container">
          <div className="avatars-row top">
            {AVATARS.slice(0, 5).map((avatar, idx) => (
              <div 
                key={`top-${idx}`} 
                className={`avatar-item ${avatar.size}`} 
                style={{ backgroundImage: `url(${avatar.url})` }}
              />
            ))}
          </div>
          <div className="avatars-row bottom">
            {AVATARS.slice(5).map((avatar, idx) => (
              <div 
                key={`bottom-${idx}`} 
                className={`avatar-item ${avatar.size}`} 
                style={{ backgroundImage: `url(${avatar.url})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
