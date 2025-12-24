import React from 'react';
import './DiscoverDominica.css';

import dominicaVideo from '../../assets/videos/dominica-bg.mp4';
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
      Set in the heart of Dominica's lush landscapes, this villa offers a harmonious blend of island charm and modern comfort.
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
export default function DiscoverDominica() {
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