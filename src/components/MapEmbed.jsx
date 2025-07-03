import React from 'react';

function MapEmbed() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Our Projects on the Map</h2>
      <div className="w-full h-64 md:h-80 lg:h-96">
        <iframe
          title="Project Locations"
          src="https://maps.google.com/maps?q=hyderabad&t=&z=10&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default MapEmbed;
