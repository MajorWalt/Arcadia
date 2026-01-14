import React, { useState } from 'react';
import './FindUs.css';

export default function FindUs() {
  const [copySuccess, setCopySuccess] = useState(false);

  // Arcadia Retreat address in Dominica
  const address = "Arcadia Retreat, Roseau, Saint George Parish, Dominica";
  
  // Coordinates for Dominica (centered on the island)
  const dominicaLat = 15.4150;
  const dominicaLng = -61.3710;
  
  // Google Maps embed URL for Dominica
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244839.50393418913!2d-61.47086935!3d15.415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c155e72c29b31c1%3A0x6b77e13c56c14294!2sDominica!5e0!3m2!1sen!2s!4v1647892847123!5m2!1sen!2s`;

  const handleLaunchMap = () => {
    // Opens Google Maps in a new tab with Dominica location
    window.open(`https://www.google.com/maps/place/Dominica/@${dominicaLat},${dominicaLng},11z`, '_blank');
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }).catch(err => {
      console.error('Failed to copy address:', err);
    });
  };

  return (
    <section className="hostel-amenities-section">
      <div className="hostel-amenities-container">
        {/* Top Section */}
        <div className="hostel-amenities-top">
          {/* Left Content */}
          <div className="hostel-amenities-content">
            <h2 className="hostel-amenities-title">Find Us</h2>
            <p className="hostel-amenities-description">
              Find Arcadia Retreat easily. Use our interactive Map to get directions, explore our location, and plan your visit today.
            </p>
            <div className="hostel-amenities-buttons">
              <button 
                className="hostel-amenities-btn hostel-amenities-btn-filled"
                onClick={handleLaunchMap}
              >
                Launch Map
              </button>
              <button 
                className="hostel-amenities-btn hostel-amenities-btn-outline"
                onClick={handleCopyAddress}
              >
                {copySuccess ? 'Copied!' : 'Copy Address'}
              </button>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="map-wrapper">
            <div className="map-container">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arcadia Retreat Location in Dominica"
              ></iframe>
              
              {/* Precise Location Button Overlay */}
              <div className="map-precise-button">
                <div className="map-precise-content">
                  <span className="map-precise-icon">📍</span>
                  <span className="map-precise-text">Precise: On</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}