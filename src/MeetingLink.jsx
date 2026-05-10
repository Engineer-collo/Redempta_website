import React, { useEffect, useState } from "react";

const BASE_URL = "https://landing-page-backend-r3d1.onrender.com";

const MeetingLink = () => {
  const [linkData, setLinkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH ACTIVE MEETING LINK
  const fetchMeetingLink = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${BASE_URL}/meeting-links/active`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load meeting link");
      }

      setLinkData(data);

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetingLink();
  }, []);

  // LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-amber-700 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading meeting details...</p>
        </div>
      </div>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Unable to load meeting
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>

          <button
            onClick={fetchMeetingLink}
            className="bg-amber-700 text-white px-6 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // NO LINK STATE
  if (!linkData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">No meeting link available.</p>
      </div>
    );
  }

  // SUCCESS UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full text-center">

        {/* TITLE */}
        <h1 className="text-3xl font-extrabold text-amber-700 mb-3">
          {linkData.title}
        </h1>

        {/* DESCRIPTION */}
        {linkData.description && (
          <p className="text-gray-600 mb-6">
            {linkData.description}
          </p>
        )}

        {/* SUCCESS MESSAGE */}
        <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6">
          🎉 Your registration was successful! Click below to join the live session.
        </div>

        {/* JOIN BUTTON */}
        <a
          href={linkData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-xl font-bold transition"
        >
          Join Zoom Meeting
        </a>

        {/* REFRESH BUTTON */}
        <div className="mt-6">
          <button
            onClick={fetchMeetingLink}
            className="text-sm text-gray-500 underline"
          >
            Refresh link
          </button>
        </div>

      </div>

    </div>
  );
};

export default MeetingLink;