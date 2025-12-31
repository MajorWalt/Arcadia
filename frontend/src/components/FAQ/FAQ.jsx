import { useState } from 'react';
import './FAQ.css';

export default function FAQ({ title, description, buttonText, buttonLink, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h2 className="faq-title">{title}</h2>
          <p className="faq-description">{description}</p>
          {buttonText && (
            <a href={buttonLink || '#'} className="faq-button">
              {buttonText}
            </a>
          )}
        </div>

        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}