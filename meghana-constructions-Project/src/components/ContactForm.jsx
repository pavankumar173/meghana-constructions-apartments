import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <form className="contact-form space-y-4 fade-in" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 border rounded"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 border rounded"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="p-2 border rounded"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;