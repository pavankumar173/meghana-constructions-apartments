import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mt-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4 text-gray-700">Have questions? Send us a message!</p>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
