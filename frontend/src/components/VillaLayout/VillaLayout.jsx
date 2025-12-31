import './VillaLayout.css';
import layoutImage from '../../assets/images/layout.png';

export default function VillaLayout() {
  return (
    <section className="villa-layout-section">
      <div className="villa-layout-container">
        {/* Left Content */}
        <div className="villa-layout-content">
          <h2 className="villa-layout-title">Villa Layout</h2>
          
          <div className="villa-layout-text-wrapper">
            <p className="villa-layout-description">
              Experience ultimate relaxation with private outdoor baths, spacious balconies 
              overlooking breathtaking mountain and forest views. Every detail is crafted for 
              comfort and serenity, bringing nature right to your doorstep
            </p>
          </div>

          <div className="villa-layout-buttons">
            <button className="villa-layout-btn villa-layout-btn-filled">View Layout</button>
            <button className="villa-layout-btn villa-layout-btn-outline">Take the Tour</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="villa-layout-image">
          <img src={layoutImage} alt="Villa Layout" />
        </div>
      </div>
    </section>
  );
}