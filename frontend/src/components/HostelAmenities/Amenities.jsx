import React, { useRef, useState } from 'react';
import './HostelAmenities.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import privacyImg from '../../assets/images/amenities1.jpg';
import laundryImg from '../../assets/images/amenities2.jpg';
import breakfastImg from '../../assets/images/amenities3.png';
import balconyImg from '../../assets/images/amenities4.png';
import securityIcon from '../../assets/icons/securityIcon.png';
import poolIcon from '../../assets/icons/poolIcon.png';
import wifiIcon from '../../assets/icons/wifiIcon.png';
import heartIcon from '../../assets/icons/heart-icon.png';
import discreteIcon from '../../assets/icons/privateIcon.png';
import shuttleIcon from '../../assets/icons/shuttleIcon.png';
import laundryIcon from '../../assets/icons/laundryIcon.png';
import breakfastIcon from '../../assets/icons/breakfastIcon.png';

export default function HostelAmenities() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [
    { src: privacyImg, label: 'Privacy' },
    { src: laundryImg, label: 'Laundry' },
    { src: breakfastImg, label: 'Breakfast' },
    { src: balconyImg, label: 'Balcony' }
  ];

  const amenities = [
     { 
      icon: poolIcon, 
      title: 'Entertainment Area', 
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
      title: 'On Site Laundry', 
      description: 'Enjoy a spotless and comfortable stay with our attentive housekeeping service.' 
    },
    { 
      icon: shuttleIcon, 
      title: 'Shuttle Service*', 
      description: 'Convenient transportation to nearby attractions with our guest shuttle service.' 
    },
    { 
      icon: securityIcon, 
      title: 'Security Storage Lockers', 
      description: 'Feel safe and secure with 24/7 property monitoring and guest safety measures.' 
    },
    { 
      icon: breakfastIcon, 
      title: 'Breakfast Option', 
      description: 'Start your day right with a delicious breakfast prepared fresh each morning.' 
    },
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
    <section className="hostel-amenities-section">
      <div className="hostel-amenities-container">
        {/* Top Section */}
        <div className="hostel-amenities-top">
          {/* Left Content */}
          <div className="hostel-amenities-content">
            <h2 className="hostel-amenities-title">All The<br/>Amenities</h2>
            <p className="hostel-amenities-description">
             Enjoy a range of thoughtful amenities designed for comfort and convenience, from high-speed Wi-Fi and housekeeping to a refreshing plunge pool and secure surroundings. Start your day with a delicious breakfast and take advantage of shuttle service for easy travel.
            </p>
            <div className="hostel-amenities-buttons">
              <button className="hostel-amenities-btn hostel-amenities-btn-filled">Explore</button>
              <button className="hostel-amenities-btn hostel-amenities-btn-outline">Gallery</button>
            </div>
          </div>

          {/* Right Scrollable Images */}
          <div className="hostel-amenities-images-wrapper">
            {/* Heart Icons - Desktop */}
            {!isMobile && (
              <div className="hostel-amenities-heart-icons">
                <img src={heartIcon} alt="Favorite" className="hostel-heart-icon" />
                <img src={heartIcon} alt="Favorite" className="hostel-heart-icon" />
              </div>
            )}
            
            {/* Carousel Container */}
            <div className="hostel-amenities-carousel-container">
              {canScrollLeft && !isMobile && (
                <button
                  onClick={() => scroll('left')}
                  className="hostel-amenities-carousel-btn"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <div ref={scrollContainerRef} className="hostel-amenities-images">
                {images.map((image, index) => (
                  <div key={index} className="hostel-amenities-image-card">
                    <img src={image.src} alt={image.label} />
                    <div className="hostel-amenities-image-label">{image.label}</div>
                  </div>
                ))}
              </div>

              {canScrollRight && !isMobile && (
                <button
                  onClick={() => scroll('right')}
                  className="hostel-amenities-carousel-btn"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Heart Icons - Mobile */}
            {isMobile && (
              <div className="hostel-amenities-heart-icons">
                <img src={heartIcon} alt="Favorite" className="hostel-heart-icon" />
                <span className="hostel-amenities-carousel-counter">1 of 4</span>
                <img src={heartIcon} alt="Favorite" className="hostel-heart-icon" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Amenity Cards */}
        <div className="hostel-amenities-cards">
          {amenities.map((amenity, index) => (
            <div key={index} className="hostel-amenity-card">
              <div className="hostel-amenity-icon">
                <img src={amenity.icon} alt={amenity.title} />
              </div>
              <h3 className="hostel-amenity-title">{amenity.title}</h3>
              <p className="hostel-amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}