import React, { useEffect, useState } from "react";
import {
  showSuccessToast,
  showErrorToast,
  ToastContainerWrapper
} from "./Toast";

const BASE_URL = "https://landing-page-backend-r3d1.onrender.com";

const MeetingLinkAdmin = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  // DELETE MODAL
  const [deleteId, setDeleteId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    url: "",
    description: ""
  });

  // =========================
  // FETCH ALL LINKS
  // =========================
  const fetchLinks = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/meeting-links`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch links");
      }

      setLinks(data);

    } catch (err) {
      console.error(err);
      showErrorToast(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // =========================
  // CREATE LINK
  // =========================
  const handleCreate = async (e) => {
    e.preventDefault();

    if (!form.url) {
      showErrorToast("Zoom URL is required");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/meeting-links`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        showErrorToast(data.error || "Failed to create link");
        return;
      }

      showSuccessToast("✅ Meeting link created");

      setForm({
        title: "",
        url: "",
        description: ""
      });

      fetchLinks();

    } catch (err) {
      console.error(err);
      showErrorToast("Server error");
    }
  };

  // =========================
  // OPEN DELETE MODAL
  // =========================
  const confirmDelete = (id) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  // =========================
  // DELETE LINK
  // =========================
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/meeting-links/${deleteId}`,
        {
          method: "DELETE"
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setLinks((prev) =>
        prev.filter((item) => item.id !== deleteId)
      );

      showSuccessToast("✅ Link deleted successfully");

    } catch (err) {
      console.error(err);
      showErrorToast(err.message);
    } finally {
      setOpenModal(false);
      setDeleteId(null);
    }
  };

  // =========================
  // SET ACTIVE LINK
  // =========================
  const setActive = async (id) => {
    try {
      const link = links.find((l) => l.id === id);

      const res = await fetch(
        `${BASE_URL}/meeting-links/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...link,
            is_active: true
          })
        }
      );

      if (!res.ok) {
        throw new Error("Failed to activate link");
      }

      showSuccessToast("✅ Active meeting updated");

      fetchLinks();

    } catch (err) {
      console.error(err);
      showErrorToast(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-8">

        <h1 className="text-4xl font-bold text-amber-700">
          Meeting Link Admin
        </h1>

        <p className="text-gray-600 mt-2">
          Manage Zoom meeting links
        </p>

      </div>

      {/* ================= CREATE FORM ================= */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-6 rounded-2xl shadow-md max-w-5xl mx-auto mb-8 space-y-4"
      >

        <input
          name="title"
          placeholder="Meeting Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="url"
          placeholder="Zoom URL *"
          value={form.url}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Meeting Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          rows={4}
        />

        <button
          type="submit"
          className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-bold transition"
        >
          Create Meeting Link
        </button>

      </form>

      {/* ================= LINKS LIST ================= */}
      <div className="max-w-5xl mx-auto">

        {loading ? (
          <div className="text-center py-10">
            <p className="text-amber-700 font-semibold">
              Loading meeting links...
            </p>
          </div>
        ) : links.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <p className="text-gray-500">
              No meeting links available
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {links.map((link, index) => (
              <div
                key={link.id}
                className={`bg-white p-6 rounded-2xl shadow-md border-2 ${
                  link.is_active
                    ? "border-green-500"
                    : "border-transparent"
                }`}
              >

                <div className="flex justify-between items-start flex-wrap gap-4">

                  {/* LEFT */}
                  <div className="flex-1">

                    <div className="flex items-center gap-3 mb-2">

                      <h2 className="text-xl font-bold text-gray-800">
                        {link.title || "Untitled Meeting"}
                      </h2>

                      {link.is_active && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                          ACTIVE
                        </span>
                      )}

                    </div>

                    <p className="text-gray-600 mb-3">
                      {link.description}
                    </p>

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline break-all"
                    >
                      Open Meeting Link
                    </a>

                  </div>

                  {/* RIGHT */}
                  <div className="text-right">

                    <p className="text-xs text-gray-400 mb-3">
                      #{index + 1}
                    </p>

                    <div className="flex gap-2 flex-wrap justify-end">

                      {!link.is_active && (
                        <button
                          onClick={() => setActive(link.id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                        >
                          Set Active
                        </button>
                      )}

                      <button
                        onClick={() => confirmDelete(link.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* ================= DELETE MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-2xl p-6 w-full max-w-md">

            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              Confirm Delete
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this meeting link?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-200 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
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
};

export default MeetingLinkAdmin;