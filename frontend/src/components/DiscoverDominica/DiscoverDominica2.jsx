import React from 'react';
import './DiscoverDominica.css';

import dominicaVideo from '../../assets/videos/discover-dominica.mp4';
import externalIcon from '../../assets/icons/desktop_external.png';

// Title Component
function HeroTitle() {
  return (
    <h1 className="discover-dominica-title">
      Discover<br />Dominica
    </h1>
  );
}

// Description Component
function HeroDescription() {
  return (
    <p className="discover-dominica-description">
      Nestled in the heart of the countryside, this charming villa offers a perfect blend of rustic elegance and modern comfort.
    </p>
  );
}

// CTA Button Component
function HeroButton() {
  return (
    <button className="discover-dominica-btn">
      Visit DiscoverDominica.com
      <img src={externalIcon} alt="external link" className="discover-dominica-btn-icon" />
    </button>
  );
}

// Caption Box Component
function HeroCaption() {
  return (
    <div className="discover-dominica-caption">
      <div className="discover-dominica-content">
        <HeroTitle />
        <div className="discover-dominica-text">
          <HeroDescription />
          <HeroButton />
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function DiscoverDominica2() {
  return (
    <div className="discover-dominica-hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="discover-dominica-video"
      >
        <source src={dominicaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Caption */}
      <HeroCaption />
    </div>
  );
}