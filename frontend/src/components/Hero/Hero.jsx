import './Hero.css';
import heartIcon2 from '../../assets/icons/heart-icon2.png';

export default function Hero({ videoSrc }) {
  return (
    <section className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Mobile Hero Title */}
        <h1 className="hero-title">ESCAPE<br/>THE CROWD</h1>

        {/* Desktop Booking Form */}
        <div className="booking-form">
          <input type="text" placeholder="Check-in | Check-out Date" />
          <input type="text" placeholder="1 Adult 0 Children" />
          <input type="text" placeholder="1 Room" />
          <button className="find-room-btn">Find a Room</button>
        </div>

        {/* Mobile Booking Card */}
        <div className="booking-card">
          <div className="input-group">
            <div className="icon-input">
              <img src={heartIcon2} alt="" className="heart-icon" />
              <input type="text" placeholder="Check-in" />
            </div>
          </div>
          
          <div className="input-group">
            <div className="icon-input">
              <img src={heartIcon2} alt="" className="heart-icon" />
              <input type="text" placeholder="Check-out" />
            </div>
          </div>
          
          <div className="input-row">
            <div className="input-group half">
              <input type="text" value="1 Adult | 0 Children" readOnly />
            </div>
            
            <div className="input-group half">
              <input type="text" value="1 Room" readOnly />
            </div>
          </div>
          
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}