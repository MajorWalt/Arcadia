import './Hero.css';

export default function Hero({ videoSrc }) {
  return (
    <section className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="booking-form">
          <input type="text" placeholder="Check-in | Check-out Date" />
          <input type="text" placeholder="1 Adult 0 Children" />
          <input type="text" placeholder="1 Room" />
          <button className="find-room-btn">Find a Room</button>
        </div>
      </div>
    </section>
  );
}