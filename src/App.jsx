import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './HomePage';
import FeedbackForm from './FeedbackForm';

// Admin Components
import BlogAdmin from './BlogsAdmin';
import LogoAdmin from './LogoAdmin';
import NavbarAdmin from './NavbarAdmin';
import HeroAdmin from './HeroAdmin';
import TestimonialAdmin from './TestimonialAdmin';
import AboutAdmin from './AboutAdmin';
import CoreValuesAdmin from './CoreValuesAdmin';
import ServicesAdmin from './ServicesAdmin';
import TeamAdmin from './TeamAdmin';
import ReviewsAdmin from './ReviewsAdmin';
import SubscribeAdmin from './SubscribeAdmin';
import ContactAdmin from './ContactAdmin';
import VisitorsAdmin from './VisitorsAdmin';
import BulkEmailSender from './BulkEmailSender';
import ProtectedAdmin from './ProtectedAdmin';
import InquiryAdmin from './InquiryAdmin';
import LandingPage from './LandingPage';
import RedemptaKanja from './RedemptaKanja';




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackForm />} />

  {/* Public Landing Page */}
  <Route path="/promo" element={<LandingPage />} />
  <Route path="biography" element={<RedemptaKanja />} />


        {/* Admin Routes with Nested Layout */}
        <Route path="/admin" element={<ProtectedAdmin />}>
          <Route path="blogs" element={<BlogAdmin />} />
          <Route path="logo" element={<LogoAdmin />} />
          <Route path="navbar" element={<NavbarAdmin />} />
          <Route path="hero" element={<HeroAdmin />} />
          <Route path="testimonials" element={<TestimonialAdmin />} />
          <Route path="about" element={<AboutAdmin />} />
          <Route path="core-values" element={<CoreValuesAdmin />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="team" element={<TeamAdmin />} />
          <Route path="reviews" element={<ReviewsAdmin />} />
          <Route path="subscribe" element={<SubscribeAdmin />} />
          <Route path="contact" element={<ContactAdmin />} />
          <Route path="visitors" element={<VisitorsAdmin />} />
          <Route path="emails" element={<BulkEmailSender />} />
          <Route path="inquiry" element={<InquiryAdmin />} />
          
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
