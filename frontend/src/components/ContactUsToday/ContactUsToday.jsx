import React, { useState } from 'react';
import './ContactUsToday.css';

export default function ContactUsToday() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="hostel-amenities-section">
      <div className="hostel-amenities-container">
        {/* Top Section */}
        <div className="hostel-amenities-top">
          {/* Left Content */}
          <div className="hostel-amenities-content">
            <h2 className="hostel-amenities-title">Contact Us<br/>Today</h2>
            <p className="hostel-amenities-description">
              Have questions or need assistance? Use our simple contact form to reach us anytime. We're here to help with bookings, inquiries, and personalized support for your perfect stay.
            </p>
            <div className="hostel-amenities-buttons">
              <button className="hostel-amenities-btn hostel-amenities-btn-outline">Report a Concern</button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Form Header */}
              <div className="form-header">
                <h3 className="form-title">GENERAL INQUIRIES</h3>
              </div>

              {/* Form Content */}
              <div className="form-content">
                {/* Input Fields Section */}
                <div className="form-fields-section">
                  <p className="form-description">
                    We're here to help. Submit your question below and we will get back to you as soon as possible. .
                  </p>
                  <br />
                  <p className='form-description'> Fields marked with an asterisk '*' are mandatory</p>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-input-wrapper">
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="E-mail*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-input-wrapper">
                    <input
                      type="tel"
                      name="telephone"
                      className="form-input"
                      placeholder="Telephone*"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Message Section */}
                <div className="form-message-section">
                  <p className="form-message-label">Write your message here.</p>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Checkbox and Submit */}
                <div className="form-bottom">
                  <div className="form-checkbox-wrapper">
                    <input
                      type="checkbox"
                      id="terms"
                      name="termsAccepted"
                      className="form-checkbox"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="terms" className="form-checkbox-label">
                      I have read and accept the <a href="/terms" className="form-link">Terms of Use</a>. For additional details on how we use your personal information, please read our <a href="/privacy" className="form-link">Privacy Statement</a>.
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}