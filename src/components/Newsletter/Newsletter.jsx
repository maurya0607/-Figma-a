import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section className="newsletter-section" id="newsletter">
       
      <div className="newsletter-container">
        <h2 className="newsletter-title">Subscribe to<br />our newsletter</h2>
        <p className="newsletter-subtitle">To make your stay special and even more memorable</p>
        
        {status === 'success' ? (
          <div className="newsletter-success-msg">
            <span>🎉 Thank you! You have successfully subscribed.</span>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              required 
            />
            <button 
              type="submit" 
              className="newsletter-submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
