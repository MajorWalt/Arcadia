import { useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/VillaHero';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';
import InlineAd from '../components/InLineAd/InLineAd';
import ContactUsToday from '../components/ContactUsToday/ContactUsToday';
import FindUs from '../components/FindUs/FindUs';

// Import assets
import logoImg from '../assets/images/logo.png';
import headerVideo from '../assets/videos/villa-header.mp4';





export default function ContactUs() {
 
const myFAQs = [
  {
    question: "What time is check-in and check-out?",
    answer: "Standard check-in is at 3:00 PM, and check-out is at 11:00 AM."
  },
   {
    question: "Is breakfast included in the stay or available as an add-on?",
    answer: "Breakfast is available as an add-on service."
  },
  {
    question: "Do you offer Wi-Fi and other connectivity options?",
    answer: "Yes, we provide high-speed Wi-Fi throughout the property."
  },
  {
    question: "Is there parking available on the property?",
    answer: "Yes, we offer free on-site parking for our guests."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Our cancellation and refund policy provides clear guidelines for cancellations and booking adjustments to ensure fairness and transparency."
  },
  {
    question: "Are pets allowed at Arcadia Guesthouse?",
    answer: "Yes, we are a pet-friendly establishment and welcome your furry friends."
  },
  {
    question: "How can we find the Guesthouse?",
    answer: "We provide detailed directions on our Location page to help you find us easily."
  }
];

  return (
    <div className="home-page">
      <Header logoSrc={logoImg} />
      <Hero videoSrc={headerVideo} />
      <ContactUsToday />
      <FindUs />
    
     
      <FAQ 
              title="FAQ"
              description="Have questions? We’ve got answers! Explore our FAQ to find helpful information about your stay, amenities, and services."
              buttonText="Get in Touch with Us"
              buttonLink="#"
              faqs={myFAQs}
            />
      <InlineAd />
      <Footer />
    </div>
  );
}