import React, { useRef, useState } from 'react';
import './Hostel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import place6 from '../../assets/images/place6.png';
import place7 from '../../assets/images/place7.png';
import heartIcon from '../../assets/icons/heart-icon.png';

// Header Component
function Header() {
  return (
    <div className="hostel-header">
      <h1 className="hostel-title">
        The<br />Hostel
      </h1>
    </div>
  );
}

// Mobile Header Component with inline button
function MobileHeader() {
  return (
    <div className="hostel-header">
      <h1 className="hostel-title">
        Our Hostel
      </h1>
      <button className="mobile-hostel-btn">
        Explore
      </button>
    </div>
  );
}

// Description Component
function Description() {
  return (
    <p className="hostel-description">
     Indulge in a romantic escape with our Lover Suite, featuring elegant décor and intimate comfort for two. Surrounded by serene beauty and designed for unforgettable moments.
    </p>
  );
}

// Button Component
function ActionButtons() {
  return (
    <div className="hostel-buttons">
      <button className="btn-primary">
        Explore Hostel
      </button>
      <button className="btn-secondary">
        Book Now
      </button>
    </div>
  );
}

// Image Card Component
function ImageCard({ image, label }) {
  return (
    <div className="image-card">
      <img src={image} alt={label} />
      <h3 className="image-card-label">{label}</h3>
    </div>
  );
}

// Carousel Component
function CardCarousel({ currentIndex, totalCards }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    { image: place6, label: 'The Mountain Room' },
    { image: place7, label: 'The River Room' },
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
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div className="carousel-container">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="carousel-btn"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div ref={scrollContainerRef} className="carousel-scroll">
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            image={card.image}
            label={card.label}
          />
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="carousel-btn"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}

// Main Component
export default function Hostel() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hostel-container">
      <div className="hostel-wrapper">
        {/* Left Section */}
        <div className="hostel-content">
          {isMobile ? <MobileHeader /> : <Header />}
          <Description />
          <ActionButtons />
        </div>

        {/* Right Section - Carousel */}
        <div className="hostel-carousel-wrapper">
          {!isMobile && (
            <div className="hostel-heart-icons">
              <img src={heartIcon} alt="heart" className="hostel-heart-icon" />
              <img src={heartIcon} alt="heart" className="hostel-heart-icon" />
            </div>
          )}
          
          <CardCarousel currentIndex={1} totalCards={2} />
          
          {isMobile && (
            <div className="hostel-heart-icons">
              <img src={heartIcon} alt="heart" className="hostel-heart-icon" />
              <span className="carousel-counter">1 of 2</span>
              <img src={heartIcon} alt="heart" className="hostel-heart-icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}