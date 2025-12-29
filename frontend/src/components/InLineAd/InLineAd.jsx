import React from 'react';
import './InLineAd.css';

export default function InLineAd() {
    console.log('InLineAd component rendered');
  return (
    <div className="inline-ad-container">
      <h2 className="inline-ad-heading">
        NOW<br />20% OFF
      </h2>
      <p className="inline-ad-description">
        Nestled in the heart of the countryside, this charming villa offers a perfect blend of rustic elegance and modern comfort.
      </p>
      <button className="inline-ad-button">
        Book Today
      </button>
    </div>
  );
}