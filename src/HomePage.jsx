import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import BookSection from './BookSection';
import Team from './Team';
import Testimonials from './Testimonials';
import BlogCarousel from './BlogCarousel';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Footer from './Footer';
import DailyInspiration from './DailyInspiration';
import Subscribe from './Subscribe';
import WhatsAppButton from './WhatsAppButton';
import { ToastContainerWrapper } from './Toast';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DailyInspiration />
      <About />
      <Services />
      <BookSection />
      <Team />
      <Testimonials />
      <BlogCarousel />
      <CallToAction />
      <Contact />
      <Subscribe />
      <Footer />
      <WhatsAppButton />
      <ToastContainerWrapper />
    </>
  );
};

export default HomePage;
