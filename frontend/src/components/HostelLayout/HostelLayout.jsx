import './HostelLayout.css';
import layoutImage from '../../assets/images/layout.png';

export default function HostelLayout() {
  return (
    <section className="hostel-layout-section">
      <div className="hostel-layout-container">
        {/* Left Content */}
        <div className="hostel-layout-content">
          <h2 className="hostel-layout-title">Hostel Layout</h2>
          
          <div className="hostel-layout-text-wrapper">
            <p className="hostel-layout-description">
              Escape to a cozy cabin beside a tranquil natural pond, featuring a spacious covered area and an open-air kitchen. Enjoy expansive outdoor spaces designed for gatherings, relaxation, and connection with nature, perfect for unwinding in a serene setting
            </p>
          </div>

          <div className="hostel-layout-buttons">
            <button className="hostel-layout-btn hostel-layout-btn-filled">View Layout</button>
            <button className="hostel-layout-btn hostel-layout-btn-outline">Take the Tour</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hostel-layout-image">
          <img src={layoutImage} alt="Hostel Layout" />
        </div>
      </div>
    </section>
  );
}