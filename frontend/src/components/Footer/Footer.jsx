import React from 'react';
import './Footer.css';

import arcadiaLogo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Main Navigation */}
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#villa" className="footer-nav-link">Villa</a>
          <a href="#cottages" className="footer-nav-link">Cottages</a>
          <a href="#property" className="footer-nav-link">Property</a>
          <a href="#location" className="footer-nav-link">Location</a>
          <a href="#amenities" className="footer-nav-link">Amenities</a>
          <a href="#contact" className="footer-nav-link">Contact</a>
          <a href="#policies" className="footer-nav-link">Policies</a>
          <a href="#booking" className="footer-nav-link">Booking</a>
        </nav>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-left">
          <div className="footer-language">EN</div>
          <nav className="footer-legal-nav">
            <a href="#cookie-policy" className="footer-legal-link">Cookie Policy</a>
            <a href="#legal" className="footer-legal-link">Legal</a>
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            <span className="footer-copyright">2025 Arcadia Retreat Ltd</span>
          </nav>
        </div>

        <div className="footer-logo">
          <img src={arcadiaLogo} alt="Arcadia Logo" className="footer-logo-img" />
        </div>
      </div>
    </footer>
  );
}