import React, { useRef, useState } from 'react';
import './GuesthousePolicies.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function GuesthousePolicies() {
 

 

  const policies = [
     { 
       
      title: 'General Terms', 
      description: 'Our general terms outline essential guidelines for bookings, services, and guest responsibilities to ensure a smooth experience.' 
    },
    { 
      
      title: 'Refund Policies', 
      description: 'Our refund policy ensures fairness and transparency, providing clear guidelines for cancellations and booking adjustments.' 
    },
    { 
         
      title: 'Damages & Returns', 
      description: 'Our damages and returns policy ensures clear guidelines for accountability and fair resolutions during your stay.' 
    },
    { 
      
      title: 'Disaster & Emergency', 
      description: 'Our disaster and emergency guidelines prioritize guest safety with clear procedures for unexpected events and urgent situations.' 
    },
     { 
     
      title: 'Cookies & Privacy', 
      description: 'Our cookies and privacy policy protects your data and ensures secure, transparent browsing and booking experiences.' 
    },
    { 
     
      title: 'Health & Safety', 
      description: 'Our health and safety standards ensure a clean, secure environment with protocols designed for guest well-being and peace of mind.' 
    },
    { 
    
      title: 'Hostel Rules', 
      description: 'Our hostel rules promote respect, safety, and comfort, ensuring a welcoming environment for all guests during their stay.' 
    },
    { 
      
      title: 'Certifications', 
      description: 'We take pride in meeting industry standards. Our guesthouse holds all required certifications and licenses to ensure safety, quality, and compliance for your peace of mind.' 
    },
  ];
  React.useEffect(() => {
  }, []);

  
  return (
    <section className="hostel-amenities-section">
      <div className="hostel-amenities-container">
        {/* Top Section */}
        <div className="hostel-amenities-top">
          {/* Left Content */}
          <div className="hostel-amenities-content">
            <h2 className="hostel-amenities-title">Guesthouse<br/>Policies & <br/>Reporting</h2>
            <p className="hostel-amenities-description">
             To ensure a comfortable and enjoyable stay for all our guests, please review our house policies before your visit. These guidelines help us maintain a safe, welcoming, and relaxing environment.
            </p>
            <div className="hostel-amenities-buttons">
              <button className="hostel-amenities-btn hostel-amenities-btn-filled">Contact Us</button>
              <button className="hostel-amenities-btn hostel-amenities-btn-outline">Report a Concern</button>
            </div>
          </div>
        </div>

        {/* Bottom Amenity Cards */}
        <div className="hostel-amenities-cards">
          {policies.map((amenity, index) => (
            <div key={index} className="hostel-amenity-card">
              <h3 className="hostel-amenity-title">{amenity.title}</h3>
              <p className="hostel-amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}