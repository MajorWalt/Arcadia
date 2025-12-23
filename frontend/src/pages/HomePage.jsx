import { useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Testimonials from '../components/Testimonials/Testimonials';
import FindYourPlace from '../components/FindYourPlace/FindYourPlace';
import VirtualTourHero from '../components/VirtualTour/VirtualTourHero';

// Import assets
import logoImg from '../assets/images/logo.png';
import testimonialImg1 from '../assets/images/guest1.png';
import testimonialImg2 from '../assets/images/guest2.png';
import testimonialImg3 from '../assets/images/guest3.png';
import heartIcon from '../assets/icons/heart-icon.png';
import headerVideo from '../assets/videos/header-video.mp4';

export default function HomePage() {
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

  return (
    <div className="home-page">
      <Header logoSrc={logoImg} />
      <Hero videoSrc={headerVideo} />
      <Testimonials testimonials={testimonials} heartIconSrc={heartIcon} />
      <FindYourPlace />
      <VirtualTourHero />
    </div>
  );
}