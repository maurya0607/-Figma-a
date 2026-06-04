import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Col 1 */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h4 className="footer-title">Terms &amp; Policies</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <address className="footer-address">
              200 Fulton St. Ste 175<br />
              Chicago, IL 60661<br />
              312-000-0000<br />
              <a href="mailto:office@elementium.com">office@elementium.com</a>
            </address>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elementium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
