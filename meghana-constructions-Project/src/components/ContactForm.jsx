import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="p-2 border rounded"
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="p-2 border rounded"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="p-2 border rounded"
          placeholder="Write your message..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
