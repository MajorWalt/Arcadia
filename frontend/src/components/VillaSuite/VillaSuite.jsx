import React, { useRef, useState } from 'react';
import './VillaSuite.css';
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
    <div className="villa-suite-header">
      <h1 className="villa-suite-title">
        The<br />Villa<br />Suites
      </h1>
    </div>
  );
}

// Description Component
function Description() {
  return (
    <p className="villa-suite-description">
      Our villa suites feature spacious interiors, elegant furnishings, and private terraces, blending modern with serene surroundings for a truly unforgettable escape.
    </p>
  );
}

// Button Component
function ActionButtons() {
  return (
    <div className="villa-suite-buttons">
      <button className="btn-primary">
        Explore Villa Suites
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
function CardCarousel() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

 const cards = [
    { image: place5, label: 'The Harmony Room' },
    { image: place3, label: 'The Serenity Room' },
    { image: place1, label: 'The Lovers Suite' },
    { image: place4, label: 'The Garden Room' },
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
  return (
    <div className="villa-suite-container">
      <div className="villa-suite-wrapper">
        {/* Left Section */}
        <div className="villa-suite-content">
          <Header />
          <Description />
          <ActionButtons />
        </div>

        {/* Right Section - Carousel */}
        <div className="villa-suite-carousel-wrapper">
                <div className="villa-suite-heart-icons">
                    <img src={heartIcon} alt="heart" className="villa-suite-heart-icon" />
                    <img src={heartIcon} alt="heart" className="villa-suite-heart-icon" />
                </div>
          <CardCarousel />
        </div>
      </div>
    </div>
  );
}