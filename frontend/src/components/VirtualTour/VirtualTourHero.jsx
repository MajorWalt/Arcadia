import React from 'react';
import './VirtualTourHero.css';

import virtualTourVideo from '../../assets/videos/virtual-tour-bg.mp4';

// Title Component
function HeroTitle() {
  return (
    <h1 className="virtual-tour-title">
      Virtual<br />Tour
    </h1>
  );
}

// Description Component
function HeroDescription() {
  return (
    <p className="virtual-tour-description">
      Explore our guesthouse virtually and discover bright, comfortable rooms, thoughtful amenities, and a welcoming atmosphere before you book.
    </p>
  );
}

// CTA Button Component
function HeroButton() {
  return (
    <button className="virtual-tour-btn">
      Take the Tour
    </button>
  );
}

// Caption Box Component
function HeroCaption() {
  return (
    <div className="virtual-tour-caption">
      <div className="virtual-tour-content">
        <HeroTitle />
        <div className="virtual-tour-text">
          <HeroDescription />
          <HeroButton />
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function VirtualTourHero() {
  return (
    <div className="virtual-tour-hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="virtual-tour-video"
      >
        <source src={virtualTourVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Caption */}
      <HeroCaption />
    </div>
  );
}