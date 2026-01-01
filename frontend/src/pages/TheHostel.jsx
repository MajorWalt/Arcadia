import { useState } from 'react';
import Header from '../components/Header/Header';
import Hostel2 from '../components/Hostel/Hostel2';
import VillaHero from '../components/Hero/VillaHero';
import VirtualTourHero from '../components/VirtualTour/VirtualTourHero';
import HostelLayout from '../components/HostelLayout/HostelLayout';
import VillaSuite from '../components/VillaSuite/VillaSuite2';
import VillaLayout from '../components/VillaLayout/VillaLayout';
import VillaAmenities from '../components/VillaAmenities/VillaAmenities';
import InLineAd from '../components/InLineAd/InLineAd';
import DiscoverDominica from '../components/DiscoverDominica/DiscoverDominica';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';


const myFAQs = [
  {
    question: "What are the standard check-in and check-out times for the hostel?",
    answer: "Standard check-in is at 3:00 PM, and check-out is at 11:00 AM."
  },
   {
    question: "Are lockers or secure storage available for guests?",
    answer: "Yes, secure storage lockers are available for guests."
  },
  {
    question: "Do you provide linens and towels, or should guests bring their own?",
    answer: "Yes, linens and towels are provided for all guests."
  },
  {
    question: "Is there a common kitchen or dining area for guests to use?",
    answer: "Yes, there is a common kitchen and dining area available for guests to use."
  },
  {
    question: "Are there quiet hours or specific rules for shared spaces?",
    answer: "Yes, quiet hours are from 10:00 PM to 7:00 AM to ensure a peaceful environment for all guests."
  },
  {
    question: "Does the hostel offer Wi-Fi and charging stations?",
    answer: "Yes, high-speed Wi-Fi and charging stations are available throughout the property."
  },
  {
    question: "What is the policy on group bookings or long-term stays?",
    answer: "Yes, we accommodate group bookings and long-term stays. Please contact us for more details."
  },
];

// Import assets
import logoImg from '../assets/images/logo.png';
import headerVideo from '../assets/videos/villa-header.mp4';



export default function HomePage() {
  

  return (
    <div className="home-page">
      <Header logoSrc={logoImg} />
      <VillaHero videoSrc={headerVideo}/>
      <Hostel2/>
      <VirtualTourHero />
      <HostelLayout />

            <FAQ 
        title="FAQ"
        description="Have questions? We’ve got answers! Explore our FAQ to find helpful information about your stay, amenities, and services."
        buttonText="Get in Touch with Us"
        buttonLink="#"
        faqs={myFAQs}
      />
      <DiscoverDominica />
      <InLineAd />
      <Footer />
      </div>
  );
}