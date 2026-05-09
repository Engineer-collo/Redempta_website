import React from "react";

export default function AboutRedemptaKanja() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">

      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">

        {/* HEADER */}
        <div className="bg-amber-700 text-white text-center py-10 px-6">

          {/* FIXED IMAGE WRAPPER */}
          <div className="w-36 h-36 mx-auto mb-4 flex items-center justify-center">
            <img
              src="/photo.png"
              alt="Redempta Kanja"
              className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
              style={{ objectPosition: "center 20%" }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          </div>

          <h1 className="text-3xl font-bold">Redempta Kanja</h1>

          <p className="text-amber-100 text-sm mt-1">
            Author • Writing Coach • Speaker
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-6 text-gray-700 leading-relaxed">

          <p>
            <span className="font-bold text-gray-900">Redempta Kanja</span> is a passionate writing coach, author, and speaker dedicated to helping individuals transform their ideas into powerful, published books.
          </p>

          <p>
            She specializes in guiding aspiring writers, entrepreneurs, and creatives through the entire writing journey — from idea development, structuring content, publishing, and building income streams from books.
          </p>

          <p>
            Through her training sessions and events, Redempta empowers people to understand that writing is not just an art, but also a tool for influence, branding, and financial growth.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid md:grid-cols-3 gap-4 pt-4">

            <div className="bg-amber-100 text-amber-800 p-4 rounded-2xl text-center font-semibold">
              Book Writing Coach
            </div>

            <div className="bg-amber-100 text-amber-800 p-4 rounded-2xl text-center font-semibold">
              Publishing Mentor
            </div>

            <div className="bg-amber-100 text-amber-800 p-4 rounded-2xl text-center font-semibold">
              Public Speaker
            </div>
          </div>

          {/* QUOTE */}
          <div className="pt-6 text-center">
            <p className="text-lg font-semibold text-amber-700">
              “Your story has value — and your book can become your legacy.”
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}