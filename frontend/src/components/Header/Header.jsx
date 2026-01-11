import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ logoSrc }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoSrc} alt="Arcadia Logo" />
          </Link>
        </div>

        <div className="header-right">
          <nav className="nav-menu">
            <Link to="/villa">Villa</Link>
            <Link to="/hostel">Hostel</Link>
            <Link to="/room">Rooms</Link>
            <Link to="/location">Location</Link>
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
          <Link to="/villa" onClick={() => setIsMenuOpen(false)}>Villa</Link>
          <Link to="/hostel" onClick={() => setIsMenuOpen(false)}>Hostel</Link>
          <Link to="/room" onClick={() => setIsMenuOpen(false)}>Rooms</Link>
          <Link to="/location" onClick={() => setIsMenuOpen(false)}>Location</Link>
          <Link to="/amenities" onClick={() => setIsMenuOpen(false)}>Amenities</Link>
          <a href="#policies" onClick={() => setIsMenuOpen(false)}>Policies</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}