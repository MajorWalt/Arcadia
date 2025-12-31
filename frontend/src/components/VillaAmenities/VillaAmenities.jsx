import React, { useRef, useState } from 'react';
import './VillaAmenities.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import privacyImg from '../../assets/images/privacy.jpg';
import linensImg from '../../assets/images/linens.png';
import cleaningImg from '../../assets/images/cleaning.png';
import balconyImg from '../../assets/images/balcony.png';
import entertainmentIcon from '../../assets/icons/entertainmentIcon.png';
import poolIcon from '../../assets/icons/poolIcon.png';
import wifiIcon from '../../assets/icons/wifiIcon.png';
import laundryIcon from '../../assets/icons/laundryIcon.png';
import heartIcon from '../../assets/icons/heart-icon.png';

export default function VillaAmenities() {
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
      icon: wifiIcon, 
      title: 'Wifi & Connectivity', 
      description: 'Stay connected with reliable high-speed internet throughout the property.' 
    },
    { 
      icon: laundryIcon, 
      title: 'Onsite Laundry', 
      description: 'Enjoy a spotless and comfortable stay with our attentive housekeeping service.' 
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
    <section className="villa-amenities-section">
      <div className="villa-amenities-container">
        {/* Top Section */}
        <div className="villa-amenities-top">
          {/* Left Content */}
          <div className="villa-amenities-content">
            <h2 className="villa-amenities-title">Villa<br/>Amenities</h2>
            <p className="villa-amenities-description">
              Unwind in our private villa featuring entertainment areas, a private pool, and 
              serene balconies with mountain views. Enjoy privacy, Wi-Fi, security, and optional 
              breakfast for a truly relaxing escape.
            </p>
            <div className="villa-amenities-buttons">
              <button className="villa-amenities-btn villa-amenities-btn-filled">Explore</button>
              <button className="villa-amenities-btn villa-amenities-btn-outline">Gallery</button>
            </div>
          </div>

          {/* Right Scrollable Images */}
          <div className="villa-amenities-images-wrapper">
            {/* Heart Icons - Desktop */}
            {!isMobile && (
              <div className="villa-amenities-heart-icons">
                <img src={heartIcon} alt="Favorite" className="villa-heart-icon" />
                <img src={heartIcon} alt="Favorite" className="villa-heart-icon" />
              </div>
            )}
            
            {/* Carousel Container */}
            <div className="villa-amenities-carousel-container">
              {canScrollLeft && !isMobile && (
                <button
                  onClick={() => scroll('left')}
                  className="villa-amenities-carousel-btn"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <div ref={scrollContainerRef} className="villa-amenities-images">
                {images.map((image, index) => (
                  <div key={index} className="villa-amenities-image-card">
                    <img src={image.src} alt={image.label} />
                    <div className="villa-amenities-image-label">{image.label}</div>
                  </div>
                ))}
              </div>

              {canScrollRight && !isMobile && (
                <button
                  onClick={() => scroll('right')}
                  className="villa-amenities-carousel-btn"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Heart Icons - Mobile */}
            {isMobile && (
              <div className="villa-amenities-heart-icons">
                <img src={heartIcon} alt="Favorite" className="villa-heart-icon" />
                <span className="villa-amenities-carousel-counter">1 of 4</span>
                <img src={heartIcon} alt="Favorite" className="villa-heart-icon" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Amenity Cards */}
        <div className="villa-amenities-cards">
          {amenities.map((amenity, index) => (
            <div key={index} className="villa-amenity-card">
              <div className="villa-amenity-icon">
                <img src={amenity.icon} alt={amenity.title} />
              </div>
              <h3 className="villa-amenity-title">{amenity.title}</h3>
              <p className="villa-amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}