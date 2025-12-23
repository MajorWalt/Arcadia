import { useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Testimonials from '../components/Testimonials/Testimonials';

// Import assets
import logoImg from '../assets/images/logo.png';
import heartIcon from '../assets/icons/heart-icon.png';
import headerVideo from '../assets/videos/header-video.mp4';

export default function HomePage() {
  const [testimonials] = useState([
    {
      guestImage: 'https://via.placeholder.com/50/413A08/FFFFFF?text=G1',
      guestName: 'Verified Guest',
      rating: 5,
      testimonialText: 'Loved the cozy aesthetic and outdoor kitchen! Met amazing people, stayed connected with friends'
    },
    {
      guestImage: 'https://via.placeholder.com/50/413A08/FFFFFF?text=G2',
      guestName: 'Verified Guest',
      rating: 5,
      testimonialText: 'Reliable high-speed internet, quiet spaces, and scenic views. Simply phenomenal!'
    },
    {
      guestImage: 'https://via.placeholder.com/50/413A08/FFFFFF?text=G3',
      guestName: 'Nature Island Guru',
      rating: 5,
      testimonialText: 'Our favorite getaway! Cozy cabins, natural pond, and shared outdoor kitchen made it perfect.'
    }
  ]);

  return (
    <div className="home-page">
      <Header logoSrc={logoImg} />
      <Hero videoSrc={headerVideo} />
      <Testimonials testimonials={testimonials} heartIconSrc={heartIcon} />
    </div>
  );
}