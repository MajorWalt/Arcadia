import React, { useRef, useState } from 'react';
import './RoomSuite.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import place1 from '../../assets/images/place1.png';
import place8 from '../../assets/images/place8.png';
import place9 from '../../assets/images/place9.png';
import place10 from '../../assets/images/place10.png';
import heartIcon from '../../assets/icons/heart-icon.png';

// Header Component
function Header() {
  return (
    <div className="room-suite-header">
      <h1 className="room-suite-title">
        The<br />Lovers<br />Suites
      </h1>
    </div>
  );
}

// Mobile Header Component with inline Explore button
function MobileHeader() {
  return (
    <div className="room-suite-header">
      <h1 className="room-suite-title">
        The Lovers Suites
      </h1>
      <button className="mobile-explore-btn">
        Explore
      </button>
    </div>
  );
}

// Description Component
function Description() {
  return (
    <p className="room-suite-description">
      Indulge in a romantic escape with our Lover Suite, featuring elegant décor and intimate comfort for two. Surrounded by serene beauty and designed for unforgettable moments.
    </p>
  );
}

// Button Component
function ActionButtons() {
  return (
    <div className="room-suite-buttons">
      <button className="btn-primary">
        Book Now
      </button>
      <button className="btn-secondary">
        Gallery
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
    { image: place1, label: '' },
    { image: place8, label: '' },
    { image: place9, label: '' },
    { image: place10, label: '' },
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
export default function VillaSuite() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="room-suite-container">
      <div className="room-suite-wrapper">
        {/* Left Section */}
        <div className="room-suite-content">
          {isMobile ? <MobileHeader /> : <Header />}
          <Description />
          <ActionButtons />
        </div>

        {/* Right Section - Carousel */}
        <div className="room-suite-carousel-wrapper">
          {!isMobile && (
            <div className="room-suite-heart-icons">
              <img src={heartIcon} alt="heart" className="room-suite-heart-icon" />
              <img src={heartIcon} alt="heart" className="room-suite-heart-icon" />
            </div>
          )}
          
          <CardCarousel currentIndex={1} totalCards={3} />
          
          {isMobile && (
            <div className="room-suite-heart-icons">
              <img src={heartIcon} alt="heart" className="room-suite-heart-icon" />
              <span className="carousel-counter">1 of 3</span>
              <img src={heartIcon} alt="heart" className="room-suite-heart-icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}