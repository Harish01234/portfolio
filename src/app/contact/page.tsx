// ContactUs.js
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { error } from 'console';
const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, message });
    axios.post('/api/sendEmail', { email, message }).then((res)=>console.log(res)).catch((error)=>console.log(error));
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 sm:px-0">
      <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black p-10 rounded-2xl shadow-xl max-w-lg w-full transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-8">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`peer w-full px-6 py-6 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-all duration-300 placeholder-transparent ${
                email && 'pt-6'
              }`}
            />
            <label
              className={`absolute left-4 text-gray-400 transition-all duration-200 ${
                email
                  ? 'top-2 text-sm text-teal-400'
                  : 'top-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-gray-500'
              }`}
            >
              Your Email
            </label>
          </div>
          <div className="relative mb-8">
            <textarea
              rows={5}
              placeholder=" "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`peer w-full px-6 py-6 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white transition-all duration-300 placeholder-transparent ${
                message && 'pt-6'
              }`}
            ></textarea>
            <label
              className={`absolute left-4 text-gray-400 transition-all duration-200 ${
                message
                  ? 'top-2 text-sm text-teal-400'
                  : 'top-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-gray-500'
              }`}
            >
              Your Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
