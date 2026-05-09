import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock3, BookOpen, Mic } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

// TOAST
import {
  showSuccessToast,
  showErrorToast,
  ToastContainerWrapper
} from "./Toast";

export default function LandingPage() {
  const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // FORM VALIDATION
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    // NAME VALIDATION
    if (name.length < 3) {
      showErrorToast("Name must be at least 3 characters");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showErrorToast("Please enter a valid email address");
      return;
    }

    // PHONE VALIDATION
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;

    if (!phoneRegex.test(phone)) {
      showErrorToast("Please enter a valid phone number");
      return;
    }

    try {
      console.log("Registration Data:", formData);

      showSuccessToast("🎉 Registration successful!");

      setFormData({
        name: "",
        email: "",
        phone: ""
      });

      setOpenForm(false);

    } catch (error) {
      showErrorToast("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <img
              src="/rk-logo.png"
              alt="RK Global Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white p-2 rounded-full shadow-lg"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100";
              }}
            />
          </div>

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Mic size={18} />
            <span className="text-sm font-medium">
              Live Author Event
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn How To Write Books <br />
            And Earn From Them
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-amber-100 mb-10">
            Join <span className="font-bold">Redempta</span> for a powerful
            session on writing, publishing, and monetizing your ideas.
          </p>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md text-center">
            <CalendarDays className="mx-auto mb-4 text-amber-700" />

            <h3 className="text-xl font-bold mb-2">Date</h3>

            <p>May 16th, 2026</p>
          </div>

          <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md text-center">
            <Clock3 className="mx-auto mb-4 text-amber-700" />

            <h3 className="text-xl font-bold mb-2">Time</h3>

            <p>9:00 AM</p>
          </div>

          <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md text-center">
            <BookOpen className="mx-auto mb-4 text-amber-700" />

            <h3 className="text-xl font-bold mb-2">Topic</h3>

            <p>Writing & Earning From Books</p>
          </div>
        </div>
      </section>

      {/* ABOUT + SPEAKER */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-amber-700 mb-6">
              Why Attend This Event?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to transform your ideas into books and build income
              through writing, publishing, and personal branding.
            </p>
          </div>

          {/* SPEAKER CARD */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100 text-center flex flex-col items-center">

            {/* IMAGE */}
            <div className="w-48 h-48 flex items-center justify-center mb-5">
              <img
                src="/redempta-kanja.png"
                alt="Redempta Kanja"
                className="w-44 h-44 rounded-full object-cover border-4 border-amber-700 shadow-md"
                style={{ objectPosition: "center 20%" }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            </div>

            <h3 className="text-3xl font-bold text-amber-700 mb-2">
              Meet The Speaker
            </h3>

            {/* BIOGRAPHY LINK */}
            <Link
              to="/biography"
              className="text-blue-700 font-semibold text-lg hover:text-amber-700 transition underline decoration-amber-500"
            >
              Redempta Kanja →
            </Link>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Writing coach helping people turn ideas into published books and
              income-generating assets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            Reserve Your Spot Today
          </h2>

          <p className="text-lg text-amber-100 mb-10">
            Seats are limited. Don’t miss out.
          </p>

          <button
            onClick={() => setOpenForm(true)}
            className="bg-white text-amber-700 px-10 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* MODAL FORM */}
      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-md rounded-2xl p-8 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-4 text-gray-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-amber-700 mb-6">
              Event Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />

              {/* PHONE */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-bold hover:bg-amber-800 transition"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST */}
      <ToastContainerWrapper />

      {/* FOOTER */}
      <footer className="bg-white py-8 border-t text-center text-gray-500">
        © 2026 Book Writing Masterclass • Hosted by Redempta
        <WhatsAppButton />
      </footer>
    </div>
  );
}