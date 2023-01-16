import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import Solution from './components/Solution';
import Footer from './components/Footer';

import './css/styles.css';

function App() {
  return (
    <>
      <Hero />
      <div className='about-features-bg'>
        <AboutUs />
        <Features />
      </div>
      <div className='testimonial-solution-bg'>
        <Testimonials />
        <Brands />
        <Solution />
      </div>
      <Footer />
    </>
  )
}

export default App
