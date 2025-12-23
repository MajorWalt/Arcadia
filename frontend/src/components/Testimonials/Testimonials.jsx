import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

export default function Testimonials({ testimonials, heartIconSrc }) {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="heart-icons">
          <img src={heartIconSrc} alt="heart" className="heart-icon" />
          <img src={heartIconSrc} alt="heart" className="heart-icon" />
        </div>
        <h2>What our guests say</h2>
      </div>

      <div className="video-badge">
        1440 Fill × 821 - Video
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}