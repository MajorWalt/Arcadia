import React from 'react';
import './HikingDominica.css';

import virtualTourVideo from '../../assets/videos/hiking-dominica.mp4';

// Title Component
function HeroTitle() {
  return (
    <h1 className="virtual-tour-title">
      Hiking In<br />Dominica
    </h1>
  );
}

// Description Component
function HeroDescription() {
  return (
    <p className="virtual-tour-description">
      The Waitukubuli National Trail spans 115 breathtaking kilometers, offering hikers an unforgettable journey through Dominica’s lush rainforests, rugged mountains, and vibrant cultural landscapes.
    </p>
  );
}

// CTA Button Component
function HeroButton() {
  return (
    <button className="virtual-tour-btn">
      Visit Waitukubuli National Trail
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
export default function HikingDominica() {
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