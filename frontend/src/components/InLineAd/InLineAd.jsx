import React from 'react';
import './InLineAd.css';

export default function InlineAd() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = (
    <>
      <h2 className="inline-ad-heading">NOW 20% OFF</h2>
      <p className="inline-ad-description">
        Nestled in the heart of the countryside, this charming villa offers a perfect blend of rustic elegance and modern comfort.
      </p>
      <button className="inline-ad-button">Book Today</button>
    </>
  );

  return (
    <div className="inline-ad-wrapper">
      <div className="inline-ad-container">
        {isMobile ? (
          <div className="inline-ad-black-box">
            {content}
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}