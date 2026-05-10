import React, { useEffect, useState } from "react";
import {
  showSuccessToast,
  showErrorToast,
  ToastContainerWrapper
} from "./Toast";

const BASE_URL = "https://landing-page-backend-r3d1.onrender.com";

export default function Registrations() {

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // MODAL STATE
  const [deleteId, setDeleteId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // FETCH DATA
  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/registrations`);
      const data = await res.json();

      if (!res.ok) throw new Error("Failed to fetch data");

      setRegistrations(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // OPEN DELETE MODAL
  const confirmDelete = (id) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  // DELETE ACTION
  const handleDelete = async () => {
    try {
      const res = await fetch(`${BASE_URL}/registrations/${deleteId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setRegistrations((prev) =>
        prev.filter((item) => item.id !== deleteId)
      );

      showSuccessToast("✅ Deleted successfully");

    } catch (err) {
      showErrorToast(err.message);
    } finally {
      setOpenModal(false);
      setDeleteId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-amber-700 font-semibold">
          Loading registrations...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-8">

        <h1 className="text-4xl font-bold text-gray-800">
          Event Registrations
        </h1>

        <p className="text-gray-600 mt-2">
          Total Registrations:{" "}
          <span className="font-bold text-amber-700">
            {registrations.length}
          </span>
        </p>

      </div>

      {/* LIST */}
      <div className="max-w-5xl mx-auto space-y-4">

        {registrations.map((user, index) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center"
          >

            {/* LEFT */}
            <div>
              <h2 className="font-bold text-lg text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600">📧 {user.email}</p>
              <p className="text-sm text-gray-600">📞 {user.phone}</p>
            </div>

            {/* RIGHT */}
            <div className="text-right">

              <p className="text-xs text-gray-400 mb-2">
                #{index + 1}
              </p>

              <button
                onClick={() => confirmDelete(user.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* CONFIRM DELETE MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">

            <h2 className="text-xl font-bold mb-3">
              Confirm Delete
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this registration?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

      {/* TOAST */}
      <ToastContainerWrapper />

    </div>
  );
}