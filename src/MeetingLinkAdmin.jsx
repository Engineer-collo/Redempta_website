import React, { useEffect, useState } from "react";

const BASE_URL = "https://landing-page-backend-r3d1.onrender.com";

const MeetingLinkAdmin = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

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

      setLinks(data);
    } catch (err) {
      console.error("Error fetching links:", err);
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

    if (!form.url) return alert("URL is required");

    try {
      const res = await fetch(`${BASE_URL}/meeting-links`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const err = await res.json();
        return alert(err.error || "Failed to create link");
      }

      setForm({ title: "", url: "", description: "" });
      fetchLinks();

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // =========================
  // DELETE LINK
  // =========================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this link?")) return;

    try {
      await fetch(`${BASE_URL}/meeting-links/${id}`, {
        method: "DELETE"
      });

      fetchLinks();

    } catch (err) {
      console.error(err);
    }
  };

  // =========================
  // SET ACTIVE LINK
  // =========================
  const setActive = async (id) => {
    try {
      const link = links.find((l) => l.id === id);

      await fetch(`${BASE_URL}/meeting-links/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...link,
          is_active: true
        })
      });

      fetchLinks();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-3xl font-bold text-amber-700 mb-6">
        Meeting Link Admin
      </h1>

      {/* ================= CREATE FORM ================= */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-6 rounded-xl shadow mb-8 space-y-3"
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="url"
          placeholder="Zoom URL *"
          value={form.url}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-amber-700 text-white px-4 py-2 rounded"
        >
          Create Link
        </button>
      </form>

      {/* ================= LIST ================= */}
      {loading ? (
        <p>Loading links...</p>
      ) : (
        <div className="space-y-4">
          {links.map((link) => (
            <div
              key={link.id}
              className={`bg-white p-4 rounded-xl shadow border ${
                link.is_active ? "border-green-500" : ""
              }`}
            >
              <h2 className="font-bold text-lg">{link.title}</h2>
              <p className="text-sm text-gray-600">{link.description}</p>

              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Open Link
              </a>

              <div className="flex gap-3 mt-3">
                {!link.is_active && (
                  <button
                    onClick={() => setActive(link.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Set Active
                  </button>
                )}

                <button
                  onClick={() => handleDelete(link.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>

              {link.is_active && (
                <p className="text-green-600 mt-2 font-semibold">
                  Active Link
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetingLinkAdmin;