'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use this for navigation in the app directory
import { ContactForm } from '@/utils/schema'; // Adjust the import path to your schema
import { db } from '@/utils/db'; // Adjust this to your database instance
import { Linkedin, Mail, Github } from "lucide-react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Using router for navigation after submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert form data into the database
      const resp = await db.insert(ContactForm)
        .values({
          name,
          email,
          message,
        })
        .returning({ id: ContactForm.id });

      console.log('Form Submitted:', resp);
      router.push('/dashboard'); // Redirect to a thank you page
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-4xl mb-10">Contact Me</h2>

      {/* Links to Social Media */}
      <div className="flex gap-6 mb-10">
        <a href="https://www.linkedin.com/in/mayank-aggarwal-b31777219" target="_blank" rel="noopener noreferrer">
          <Linkedin size={40} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://aggarwal2001mayank@gmail.com">
          <Mail size={40} className="hover:text-red-500 transition-colors duration-300" />
        </a>
        <a href="https://github.com/MAYANKAGGARWAL11" target="_blank" rel="noopener noreferrer">
          <Github size={40} className="hover:text-black-700 transition-colors duration-300" />
        </a>
      </div>

      {/* Contact Me Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-4">Contact Me Directly</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Mayank Aggarwal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              placeholder="mayank@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-md p-2 h-32"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
