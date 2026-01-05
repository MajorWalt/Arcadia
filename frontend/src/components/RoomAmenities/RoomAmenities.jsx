import React, { useRef, useState } from 'react';
import './RoomAmenities.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import privacyImg from '../../assets/images/privacy.jpg';
import linensImg from '../../assets/images/linens.png';
import cleaningImg from '../../assets/images/cleaning.png';
import balconyImg from '../../assets/images/balcony.png';
import entertainmentIcon from '../../assets/icons/entertainmentIcon.png';
import breakfastIcon from '../../assets/icons/breakfastIcon.png';
import poolIcon from '../../assets/icons/poolIcon.png';
import wifiIcon from '../../assets/icons/wifiIcon.png';
import discreteIcon from '../../assets/icons/privateIcon.png';
import laundryIcon from '../../assets/icons/laundryIcon.png';
import shuttleIcon from '../../assets/icons/shuttleIcon.png';
import securityIcon from '../../assets/icons/securityIcon.png';
import heartIcon from '../../assets/icons/heart-icon.png';

export default function RoomAmenities() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [
    { src: privacyImg, label: 'Privacy' },
    { src: linensImg, label: 'Linens' },
    { src: cleaningImg, label: 'Cleaning' },
    { src: balconyImg, label: 'Balcony' }
  ];

  const amenities = [
    { 
      icon: entertainmentIcon, 
      title: 'Entertainment Areas', 
      description: 'Relax and socialize in our inviting entertainment area, large decks & balconies, take in stunning views and immerse yourself in nature.' 
    },
    { 
      icon: poolIcon, 
      title: 'Plunge Pool', 
      description: 'Cool off and refresh in our intimate plunge pool, ideal for a relaxing dip.' 
    },
    { 
      icon: discreteIcon, 
      title: 'Discrete & Private', 
      description: 'Experience ultimate tranquility with a secluded setting that ensures your privacy.' 
    },
    { 
      icon: wifiIcon, 
      title: 'Wifi & Connectivity', 
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

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 500);
    }
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="room-amenities-section">
      <div className="room-amenities-container">
        {/* Top Section */}
        <div className="room-amenities-top">
          {/* Left Content */}
          <div className="room-amenities-content">
            <h2 className="room-amenities-title">Room<br/>Amenities</h2>
            <p className="room-amenities-description">
              Each room is thoughtfully equipped with modern comforts, including plush bedding, private bathrooms, and reliable Wi-Fi. Enjoy a serene atmosphere with essential conveniences for a relaxing stay.
            </p>
            <div className="room-amenities-buttons">
              <button className="room-amenities-btn room-amenities-btn-filled">Explore</button>
              <button className="room-amenities-btn room-amenities-btn-outline">Gallery</button>
            </div>
          </div>

          {/* Right Scrollable Images */}
          <div className="room-amenities-images-wrapper">
            {/* Heart Icons - Desktop */}
            {!isMobile && (
              <div className="room-amenities-heart-icons">
                <img src={heartIcon} alt="Favorite" className="room-heart-icon" />
                <img src={heartIcon} alt="Favorite" className="room-heart-icon" />
              </div>
            )}
            
            {/* Carousel Container */}
            <div className="room-amenities-carousel-container">
              {canScrollLeft && !isMobile && (
                <button
                  onClick={() => scroll('left')}
                  className="room-amenities-carousel-btn"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <div ref={scrollContainerRef} className="room-amenities-images">
                {images.map((image, index) => (
                  <div key={index} className="room-amenities-image-card">
                    <img src={image.src} alt={image.label} />
                    <div className="room-amenities-image-label">{image.label}</div>
                  </div>
                ))}
              </div>

              {canScrollRight && !isMobile && (
                <button
                  onClick={() => scroll('right')}
                  className="room-amenities-carousel-btn"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Heart Icons - Mobile */}
            {isMobile && (
              <div className="room-amenities-heart-icons">
                <img src={heartIcon} alt="Favorite" className="room-heart-icon" />
                <span className="room-amenities-carousel-counter">1 of 4</span>
                <img src={heartIcon} alt="Favorite" className="room-heart-icon" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Amenity Cards */}
        <div className="room-amenities-cards">
          {amenities.map((amenity, index) => (
            <div key={index} className="room-amenity-card">
              <div className="room-amenity-icon">
                <img src={amenity.icon} alt={amenity.title} />
              </div>
              <h3 className="room-amenity-title">{amenity.title}</h3>
              <p className="room-amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}