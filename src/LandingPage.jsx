import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  BookOpen,
  Mic
} from "lucide-react";

import WhatsAppButton from "./WhatsAppButton";

import {
  showSuccessToast,
  showErrorToast,
  ToastContainerWrapper
} from "./Toast";

// ✅ LIVE BACKEND URL
const BASE_URL = "https://landing-page-backend-r3d1.onrender.com";

export default function LandingPage() {

  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    // VALIDATION
    if (name.length < 3) {
      showErrorToast("Name must be at least 3 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showErrorToast("Please enter a valid email address");
      return;
    }

    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      showErrorToast("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone
        })
      });

      const data = await response.json();

      if (!response.ok) {
        showErrorToast(data.error || "Registration failed");
        return;
      }

      showSuccessToast("🎉 Registration successful!");

      setFormData({
        name: "",
        email: "",
        phone: ""
      });

      setOpenForm(false);

    } catch (error) {
      console.error(error);
      showErrorToast("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
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
            Learn How To Write Books
            <br />
            And Earn From Them
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-amber-100 mb-10">
            Join{" "}
            <span className="font-bold">Redempta</span>{" "}
            for a powerful session on writing, publishing, and monetizing your ideas.
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

      {/* ABOUT */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-extrabold text-amber-700 mb-6">
              Why Attend This Event?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to transform your ideas into books and build income through writing, publishing, and personal branding.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <img
              src="/redempta-kanja.png"
              alt="Speaker"
              className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-amber-700"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }}
            />

            <h3 className="text-2xl font-bold text-amber-700 mt-4">
              Redempta Kanja
            </h3>

            <Link to="/biography" className="text-blue-700 underline">
              View Biography →
            </Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-700 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Reserve Your Spot Today
        </h2>

        <button
          onClick={() => setOpenForm(true)}
          className="bg-white text-amber-700 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Register Now
        </button>
      </section>

      {/* MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-md rounded-2xl p-8 relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-amber-700 mb-6">
              Event Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-bold"
              >
                {loading ? "Submitting..." : "Submit Registration"}
              </button>

            </form>

          </div>

        </div>
      )}

      <ToastContainerWrapper />
      <WhatsAppButton />

      <footer className="text-center py-8 text-gray-500">
        © 2026 Book Writing Masterclass
      </footer>

    </div>
  );
}