import './VillaHero.css';
import heartIcon2 from '../../assets/icons/heart-icon2.png';

export default function VillaHero({ videoSrc }) {
  return (
    <section className="villa-hero-section">
      <video autoPlay muted loop className="villa-hero-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="villa-hero-overlay"></div>

      <div className="villa-hero-content">
        {/* Desktop Booking Form */}
        <div className="villa-booking-form">
          <input type="text" placeholder="Check-in | Check-out Date" />
          <input type="text" placeholder="1 Adult 0 Children" />
          <input type="text" placeholder="1 Room" />
          <button className="villa-find-room-btn">Find a Room</button>
        </div>

        {/* Mobile Booking Card */}
        <div className="villa-booking-card">
          {/* Check-in and Check-out Row */}
          <div className="villa-input-row">
            <div className="villa-input-group villa-half">
              <div className="villa-icon-input">
                <img src={heartIcon2} alt="" className="villa-heart-icon" />
                <input type="text" placeholder="Check-in" />
              </div>
            </div>
            
            <div className="villa-input-group villa-half">
              <div className="villa-icon-input">
                <img src={heartIcon2} alt="" className="villa-heart-icon" />
                <input type="text" placeholder="Check-out" />
              </div>
            </div>
          </div>
          
          {/* Adults/Children and Room Row */}
          <div className="villa-input-row">
            <div className="villa-input-group villa-half">
              <input type="text" value="1 Adult | 0 Children" readOnly />
            </div>
            
            <div className="villa-input-group villa-half">
              <input type="text" value="1 Room" readOnly />
            </div>
          </div>
          
          <button className="villa-search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}