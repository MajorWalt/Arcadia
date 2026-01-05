import './HeroRooms.css';
import heartIcon2 from '../../assets/icons/heart-icon2.png';

export default function HeroRooms({ videoSrc }) {
  return (
    <section className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Mobile Hero Title */}
        <h1 className="hero-title">
          ESCAPE
          <br />
          THE CROWD
        </h1>

        {/* Desktop Booking Form */}
        <div className="booking-form-desktop">
          <input 
            type="text" 
            placeholder="Check-in | Check-out Date" 
            className="date-input"
          />
          <input 
            type="text" 
            placeholder="1 Adult 0 Children" 
            className="guest-input"
          />
          <input 
            type="text" 
            placeholder="1 Room" 
            className="room-input"
          />
          <button className="find-room-btn">Find a Room</button>
        </div>

        {/* Mobile Booking Card */}
        <div className="booking-card-mobile">
          {/* Check-in and Check-out Row */}
          <div className="input-row">
            <div className="input-group half">
              <div className="icon-input">
                <img src={heartIcon2} alt="" className="heart-icon" />
                <input type="text" placeholder="Check-in" />
              </div>
            </div>
            
            <div className="input-group half">
              <div className="icon-input">
                <img src={heartIcon2} alt="" className="heart-icon" />
                <input type="text" placeholder="Check-out" />
              </div>
            </div>
          </div>
          
          {/* Adults/Children and Room Row */}
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