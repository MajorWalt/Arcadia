import './RoomLayout.css';
import layoutImage from '../../assets/images/layout.png';

export default function RoomLayout() {
  return (
    <section className="room-layout-section">
      <div className="room-layout-container">
        {/* Left Content */}
        <div className="room-layout-content">
          <h2 className="room-layout-title">Room Layout</h2>
          
          <div className="room-layout-text-wrapper">
            <p className="room-layout-description">
              The Lovers Room features an airy open-plan layout with a cozy sleeping area, private balcony, and seamless indoor-outdoor flow. Designed for couples who value space and comfort, it offers intimate corners and natural light for a serene, connected stay.
            </p>
          </div>

          <div className="room-layout-buttons">
            <button className="room-layout-btn room-layout-btn-filled">View Layout</button>
            <button className="room-layout-btn room-layout-btn-outline">Take the Tour</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="room-layout-image">
          <img src={layoutImage} alt="Villa Layout" />
        </div>
      </div>
    </section>
  );
}