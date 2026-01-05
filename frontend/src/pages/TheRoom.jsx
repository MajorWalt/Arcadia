import { useState } from 'react';
import Header from '../components/Header/Header';
import VillaHero from '../components/Hero/VillaHero';
import VirtualTourHero from '../components/VirtualTour/VirtualTourHero';
import HikingDominica from '../components/HikingDominica/HikingDominica';
import RoomLayout from '../components/RoomLayout/RoomLayout';
import RoomSuite from '../components/RoomSuite/RoomSuite';
import RoomAmenities from '../components/RoomAmenities/RoomAmenities';
import InLineAd from '../components/InLineAd/InLineAd';
import DiscoverDominica from '../components/DiscoverDominica/DiscoverDominica';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';
const myFAQs = [
  {
    question: "What are the standard check-in and check-out times for the villa suites?",
    answer: "Standard check-in is at 3:00 PM, and check-out is at 11:00 AM."
  },
   {
    question: "Is daily housekeeping included in the stay, or is it available upon request?",
    answer: "Daily housekeeping is included in the stay."
  },
  {
    question: "Do the suites come with private bathrooms and toiletries?",
    answer: "Yes, all suites come with private bathrooms and complimentary toiletries."
  },
  {
    question: "Are linens, towels, and bathrobes provided for guests?",
    answer: "Yes, all suites come with linens, towels, and bathrobes."
  },
  {
    question: "Do the villas have private balconies, terraces, or outdoor seating areas?",
    answer: "Yes, all villas come with private balconies, terraces, or outdoor seating areas."
  },
  {
    question: "Is parking available on-site, and is it free for guests?",
    answer: "Yes, free on-site parking is available for guests."
  },
  {
    question: "Are there quiet hours or any special rules for shared outdoor spaces?",
    answer: "Yes, quiet hours are from 10:00 PM to 7:00 AM to ensure a peaceful environment for all guests."
  },
  {
    question: "Do you accommodate group bookings, events, or long-term stays?",
    answer: "Yes, we accommodate group bookings, events, and long-term stays. Please contact us for more details."
  },
];

// Import assets
import logoImg from '../assets/images/logo.png';
import headerVideo from '../assets/videos/villa-header.mp4';




export default function RoomPage() {
  

  return (
    <div className="room-page">
      <Header logoSrc={logoImg} />
      <VillaHero videoSrc={headerVideo} />
      <RoomSuite />
      <VirtualTourHero />
      <RoomLayout />
      <HikingDominica />
      <RoomAmenities />
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