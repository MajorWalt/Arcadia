import React, { useState } from 'react';
import './Amenities.css';

import entertainmentIcon from '../../assets/icons/entertainmentIcon.png';
import poolIcon from '../../assets/icons/poolIcon.png';
import privateIcon from '../../assets/icons/privateIcon.png';
import wifiIcon from '../../assets/icons/wifiIcon.png';
import laundryIcon from '../../assets/icons/laundryIcon.png';
import shuttleIcon from '../../assets/icons/shuttleIcon.png';
import securityIcon from '../../assets/icons/securityIcon.png';
import breakfastIcon from '../../assets/icons/breakfastIcon.png';
import heartIcon from '../../assets/icons/heart-icon.png';

// Header Component
function Header() {
  return (
    <div className="amenities-header">
      <h1 className="amenities-title">Amenities</h1>
    </div>
  );
}

// Mobile Header Component with inline button
function MobileHeader() {
  return (
    <div className="amenities-header">
      <h1 className="amenities-title">All the Amenities</h1>
      <button className="mobile-amenities-btn">
        Gallery
      </button>
    </div>
  );
}

// Description Component
function Description() {
  return (
    <p className="amenities-description">
      Enjoy a range of thoughtful amenities designed for comfort and convenience, from high-speed Wi-Fi and housekeeping to a refreshing plunge pool and secure surroundings. Start your day with a delicious breakfast and take advantage of shuttle service for easy travel.
    </p>
  );
}

// Action Buttons Component
function ActionButtons() {
  return (
    <div className="amenities-buttons">
      <button className="btn-primary">
        Explore All
      </button>
      <button className="btn-secondary">
        Contact Us
      </button>
    </div>
  );
}

// Amenity Card Component
function AmenityCard({ icon, title, description }) {
  return (
    <div className="amenity-card">
      <img src={icon} alt={title} className="amenity-icon" />
      <h3 className="amenity-title">{title}</h3>
      <p className="amenity-description">{description}</p>
    </div>
  );
}

// Amenities Grid Component
function AmenitiesGrid({ onScroll }) {
  const scrollRef = React.useRef(null);

  const handleScroll = () => {
    if (scrollRef.current && onScroll) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 280 + 12; // card width + gap
      const currentIndex = Math.round(scrollLeft / cardWidth);
      onScroll(currentIndex);
    }
  };

  const amenities = [
    {
      icon: entertainmentIcon,
      title: 'Entertainment Areas',
      description: 'Relax and socialize in our inviting entertainment spaces, featuring large decks & balconies, take in stunning views and immerse yourself in nature.'
    },
    {
      icon: poolIcon,
      title: 'Plunge Pool',
      description: 'Cool off and refresh in our intimate plunge pool, ideal for a relaxing dip.'
    },
    {
      icon: privateIcon,
      title: 'Discrete & Private',
      description: 'Experience ultimate tranquility with a secluded setting that ensured your privacy.'
    },
    {
      icon: wifiIcon,
      title: 'WiFi & Connectivity',
      description: 'Stay connected with reliable high-speed internet throughout the property.'
    },
    {
      icon: laundryIcon,
      title: 'Onsite Laundry',
      description: 'Enjoy a spotless and comfortable stay with our attentive housekeeping service.'
    },
    {
      icon: shuttleIcon,
      title: 'Shuttle Service*',
      description: 'Convenient transportation to nearby attractions with our guest shuttle service.*Ask ahead'
    },
    {
      icon: securityIcon,
      title: 'Security',
      description: 'Feel safe and secure with 24/7 property monitoring and guest safety measures.'
    },
    {
      icon: breakfastIcon,
      title: 'Breakfast Option',
      description: 'Start your day right with a delicious breakfast prepared fresh each morning.'
    }
  ];

  return (
    <div 
      ref={scrollRef}
      className="amenities-grid" 
      onScroll={handleScroll}
    >
      {amenities.map((amenity, index) => (
        <AmenityCard
          key={index}
          icon={amenity.icon}
          title={amenity.title}
          description={amenity.description}
        />
      ))}
    </div>
  );
}

// Counter Component for Mobile
function AmenitiesCounter({ currentIndex, totalCount }) {
  return (
    <div className="amenities-counter">
      <img src={heartIcon} alt="heart" className="amenities-heart-icon" />
      <span className="amenities-counter-text">{currentIndex + 1} of {totalCount}</span>
      <img src={heartIcon} alt="heart" className="amenities-heart-icon" />
    </div>
  );
}

// Main Component
export default function Amenities() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalAmenities = 8;

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="amenities-container">
      <div className="amenities-content">
        {isMobile ? <MobileHeader /> : <Header />}
        <Description />
        <ActionButtons />
      </div>
      <AmenitiesGrid onScroll={isMobile ? handleScroll : null} />
      {isMobile && <AmenitiesCounter currentIndex={currentIndex} totalCount={totalAmenities} />}
    </div>
  );
}