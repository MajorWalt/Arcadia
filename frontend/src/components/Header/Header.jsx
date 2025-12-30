import { useState } from 'react';
import './Header.css';

export default function Header({ logoSrc }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href='#'>
            <img src={logoSrc} alt="Arcadia Logo" />
          </a>
        </div>

        <div className="header-right">
          <nav className="nav-menu">
            <a href="#villa">Villa</a>
            <a href="#hostel">Hostel</a>
            <a href="#rooms">Rooms</a>
            <a href="#location">Location</a>
            <a href="#amenities">Amenities</a>
            <a href="#policies">Policies</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="book-now-btn">Book Now</button>

          <button 
            className="hamburger-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mobile-menu">
          <a href="#villa" onClick={() => setIsMenuOpen(false)}>Villa</a>
          <a href="#hostel" onClick={() => setIsMenuOpen(false)}>Hostel</a>
          <a href="#rooms" onClick={() => setIsMenuOpen(false)}>Rooms</a>
          <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
          <a href="#amenities" onClick={() => setIsMenuOpen(false)}>Amenities</a>
          <a href="#policies" onClick={() => setIsMenuOpen(false)}>Policies</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}