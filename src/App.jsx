import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TomorrowSection from './components/TomorrowSection/TomorrowSection';
import ProgressSection from './components/ProgressSection/ProgressSection';
import OfferSection from './components/OfferSection/OfferSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      {/* Background Connecting Decorative Line */}
      <svg className="connecting-decor-svg" viewBox="0 0 1440 2800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M1300,180 Q1050,450 600,350 T200,850 T1200,1350 T300,1850 T1200,2350" 
          stroke="var(--color-coral)" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.15" 
          fill="none"
        />
      </svg>

      <Navbar />
      <main>
        <Hero />
        <TomorrowSection />
        <ProgressSection />
        <OfferSection />
        <TestimonialSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
