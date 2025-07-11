import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { showErrorToast, showSuccessToast, ToastContainerWrapper } from './Toast';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_tia28dl',
        'template_zuahl21',
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
          subject: 'New message from Your RkGlobal contact page',
          date: new Date().toLocaleString(),
        },
        'jwi-Yw1IaHxCQl3JU'
      )
      .then(() => {
        showSuccessToast('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        showErrorToast('Oops! Something went wrong. Please try again later.');
      });
  };

  return (
    <section id='contact'>
      <ToastContainerWrapper />

      <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-20 pb-10 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-colors">
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">Let's Connect!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Whether you're reaching out for collaboration, questions, feedback, or just to say hi —
                I’m always happy to hear from you!
              </p>

              <div className="space-y-4 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-amber-400" />
                  <a href="tel:+25475785508" className="hover:underline">
                    +254 757855508
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-amber-400" />
                  <a
                    href="mailto:info@redemptakanjaglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    info@redemptakanjaglobal.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6 transition-colors">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Send Message <span className="text-lg">💌</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
