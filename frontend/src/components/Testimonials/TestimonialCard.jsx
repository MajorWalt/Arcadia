import './TestimonialCard.css';
import starIcon from '../../assets/icons/star.png';

export default function TestimonialCard({ guestImage, guestName, rating, testimonialText }) {
  return (
    <div className="testimonial-card">
      <div className="guest-info">
        <img src={guestImage} alt={guestName} className="guest-image" />
        <div>
          <h4>{guestName}</h4>
          <div className="rating">
            {Array.from({ length: rating }).map((_, index) => (
              <img 
                key={index} 
                src={starIcon} 
                alt="star" 
                className="star-icon" 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="testimonial-text">{testimonialText}</p>
    </div>
  );
}