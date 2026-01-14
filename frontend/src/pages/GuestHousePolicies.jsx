import { useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/VillaHero';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import GuesthousePolicies from '../components/GuesthousePolicies/GuesthousePolicies';
import FAQ from '../components/FAQ/FAQ';
import InlineAd from '../components/InLineAd/InLineAd';

// Import assets
import logoImg from '../assets/images/logo.png';
import testimonialImg1 from '../assets/images/guest1.png';
import testimonialImg2 from '../assets/images/guest2.png';
import testimonialImg3 from '../assets/images/guest3.png';
import heartIcon from '../assets/icons/heart-icon.png';
import headerVideo from '../assets/videos/villa-header.mp4';




export default function GuestHousePolicies() {
  const [testimonials] = useState([
    {
      guestImage: testimonialImg1,
      guestName: 'Verified Guest',
      rating: 5,
      testimonialText: '"Loved the peaceful setting and outdoor kitchen! Met amazing people, stayed connected with fast Wi-Fi, and enjoyed the plunge pool after exploring nature trails nearby."'
    },
    {
      guestImage: testimonialImg2,
      guestName: 'Verified Guest',
      rating: 5,
      testimonialText: '"Perfect for remote work! Reliable high-speed internet, quiet spaces, and scenic views made my stay productive and relaxing. Great community vibe and secure lockers for peace of mind."'
    },
    {
      guestImage: testimonialImg3,
      guestName: 'Nature Island Guru',
      rating: 5,
      testimonialText: '"Our favorite getaway! Cozy cabins, natural pond, and shared outdoor kitchen made evenings magical. The plunge pool was a refreshing bonus after hiking adventures."'
    }
  ]);
  
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
      <GuesthousePolicies />
      <Testimonials testimonials={testimonials} heartIconSrc={heartIcon} />
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