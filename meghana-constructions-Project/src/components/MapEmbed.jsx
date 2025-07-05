import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-96 rounded overflow-hidden shadow">
      <iframe
        title="Project Locations"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3689749233584!2d78.3613345747714!3d17.439178101986795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9395f2c3f8a3%3A0x4f5d45506ddc81c4!2sMiyapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1683894544649!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
