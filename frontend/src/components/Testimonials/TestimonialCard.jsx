import './TestimonialCard.css';

export default function TestimonialCard({ guestImage, guestName, rating, testimonialText }) {
  return (
    <div className="testimonial-card">
      <div className="guest-info">
        <img src={guestImage} alt={guestName} className="guest-image" />
        <div>
          <h4>{guestName}</h4>
          <div className="rating">
            {'★'.repeat(rating)}
          </div>
        </div>
      </div>
      <p className="testimonial-text">{testimonialText}</p>
    </div>
  );
}