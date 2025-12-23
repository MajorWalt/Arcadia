import './Header.css';

export default function Header({ logoSrc }) {
 return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logoSrc} alt="Arcadia Logo" />
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
        </div>
      </div>
    </header>
  );
}