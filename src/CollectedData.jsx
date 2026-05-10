import React, { useEffect, useState } from "react";

const BASE_URL = "https://landing-page-backend-r3d1.onrender.com";

export default function Registrations() {

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchData = async () => {

      try {
        setLoading(true);

        const res = await fetch(`${BASE_URL}/registrations`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        setRegistrations(data);

      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-semibold text-amber-700">
          Loading registrations...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-100 text-red-700 px-6 py-4 rounded-xl shadow">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-8">

        <h1 className="text-4xl font-extrabold text-gray-800">
          Event Registrations
        </h1>

        <p className="text-gray-600 mt-2">
          Manage all user registrations in one place
        </p>

        {/* STATS CARD */}
        <div className="mt-6 bg-white shadow-md rounded-2xl p-6 border border-gray-200">

          <p className="text-gray-500 text-sm">
            Total Registrations
          </p>

          <p className="text-3xl font-bold text-amber-700">
            {registrations.length}
          </p>

        </div>

      </div>

      {/* LIST */}
      <div className="max-w-5xl mx-auto space-y-4">

        {registrations.map((user, index) => (
          <div
            key={user.id}
            className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center mb-3">

              <h2 className="font-bold text-lg text-gray-800">
                {user.name}
              </h2>

              <span className="text-sm text-gray-500">
                #{index + 1}
              </span>

            </div>

            <div className="space-y-1 text-gray-700 text-sm">

              <p>📧 {user.email}</p>
              <p>📞 {user.phone}</p>

              <p className="text-gray-400 text-xs mt-2">
                {user.created_at
                  ? new Date(user.created_at).toLocaleString()
                  : "No date"}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}