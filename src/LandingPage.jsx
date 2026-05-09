import React from "react";
import { CalendarDays, Clock3, BookOpen, Mic } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* HERO SECTION */}
      <section className="bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Mic size={18} />
            <span className="text-sm font-medium">
              Live Author Event
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn How To Write Books <br />
            And Earn From Them
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-amber-100 mb-10">
            Join <span className="font-bold">Redempta</span> for a powerful
            session on book writing, publishing, personal branding, and
            creating income through your writing journey.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#register"
              className="bg-white text-amber-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
            >
              Reserve Your Seat
            </a>

            <a
              href="#details"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition"
            >
              Event Details
            </a>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section
        id="details"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md text-center">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarDays />
            </div>

            <h3 className="text-xl font-bold mb-2">Date</h3>

            <p className="text-gray-600">
              May 16th, 2026
            </p>
          </div>

          <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md text-center">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock3 />
            </div>

            <h3 className="text-xl font-bold mb-2">Time</h3>

            <p className="text-gray-600">
              Starting From 9:00 AM
            </p>
          </div>

          <div className="bg-white border border-amber-100 rounded-3xl p-8 shadow-md text-center">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen />
            </div>

            <h3 className="text-xl font-bold mb-2">Topic</h3>

            <p className="text-gray-600">
              Writing, Publishing & Earning From Books
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT EVENT */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-4xl font-extrabold text-amber-700 mb-6">
              Why Attend This Event?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you are an aspiring writer, entrepreneur, student,
              speaker, or creative, this session will equip you with practical
              strategies to transform your ideas into books that impact lives
              and generate income.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-700 rounded-full mt-2"></div>
                <span>Learn how to start writing your first book</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-700 rounded-full mt-2"></div>
                <span>Understand publishing opportunities</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-700 rounded-full mt-2"></div>
                <span>Discover ways to monetize your writing</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-700 rounded-full mt-2"></div>
                <span>Network with passionate writers and creators</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-amber-100">
            <h3 className="text-3xl font-bold text-amber-700 mb-6">
              Meet The Speaker
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-bold">Redempta</span> is passionate about
              helping people unlock their voice through writing. During this
              event, she will share practical experiences, insights, and proven
              methods that can help writers build influence and income through
              books.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="register"
        className="py-24 bg-amber-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Reserve Your Spot Today
          </h2>

          <p className="text-lg text-amber-100 mb-10">
            Seats are limited. Don’t miss this opportunity to learn how
            to write books and turn your knowledge into income.
          </p>

          <button className="bg-white text-amber-700 px-10 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition">
            Register Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          © 2026 Book Writing Masterclass • Hosted by Redempta
        </div>
      </footer>
    </div>
  );
}