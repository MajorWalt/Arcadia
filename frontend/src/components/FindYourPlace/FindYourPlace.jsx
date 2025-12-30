import React, { useRef, useState } from 'react';
import './FindYourPlace.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import place1 from '../../assets/images/place1.png';
import place2 from '../../assets/images/place2.png';
import place3 from '../../assets/images/place3.png';
import place4 from '../../assets/images/place4.png';
import place5 from '../../assets/images/place5.png';
import heartIcon from '../../assets/icons/heart-icon.png';

// Header Component
function Header() {
  return (
    <div className="find-your-place-header">
      <h1 className="find-your-place-title">
        Find<br />Your<br />Place
      </h1>
    </div>
  );
}

// Mobile Header Component with inline Blog button
function MobileHeader() {
  return (
    <div className="find-your-place-header">
      <h1 className="find-your-place-title">
        Find Your Place
      </h1>
      <button className="mobile-blog-btn">
        Blog
      </button>
    </div>
  );
}

// Description Component
function Description() {
  return (
    <p className="find-your-place-description">
      quiet nooks for writers, romantic suites for couples, and spacious retreats for families and groups. Surrounded by lush greenery and panoramic views, our villa blends refined style with modern comfort for an unforgettable stay.
    </p>
  );
}

// Button Component
function ActionButtons() {
  return (
    <div className="find-your-place-buttons">
      <button className="btn-primary">
        Visit the Blog
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
    { image: place1, label: 'For the Escapists' },
    { image: place5, label: 'For the Groups' },
    { image: place3, label: 'For the Writers' },
    { image: place4, label: 'For the Adventurer' },
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
export default function FindYourPlace() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="find-your-place-container">
      <div className="find-your-place-wrapper">
        {/* Left Section */}
        <div className="find-your-place-content">
          {isMobile ? <MobileHeader /> : <Header />}
          <Description />
          <ActionButtons />
        </div>

        {/* Right Section - Carousel */}
        <div className="find-your-place-carousel-wrapper">
          {!isMobile && (
            <div className="find-your-place-heart-icons">
              <img src={heartIcon} alt="heart" className="find-your-place-heart-icon" />
              <img src={heartIcon} alt="heart" className="find-your-place-heart-icon" />
            </div>
          )}
          
          <CardCarousel currentIndex={1} totalCards={4} />
          
          {isMobile && (
            <div className="find-your-place-heart-icons">
              <img src={heartIcon} alt="heart" className="find-your-place-heart-icon" />
              <span className="carousel-counter">1 of 4</span>
              <img src={heartIcon} alt="heart" className="find-your-place-heart-icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}