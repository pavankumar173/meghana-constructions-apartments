import React from "react";

const Filter = () => {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-md shadow">
      <h3 className="text-lg font-semibold mb-3">🔍 Filter by:</h3>
      <div className="flex flex-wrap gap-4">
        <select className="border p-2 rounded w-48">
          <option>Location</option>
          <option>Hyderabad</option>
          <option>Bangalore</option>
        </select>
        <select className="border p-2 rounded w-48">
          <option>BHK</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
        </select>
        <select className="border p-2 rounded w-48">
          <option>Budget</option>
          <option>Under ₹50L</option>
          <option>₹50L - ₹1Cr</option>
          <option>Above ₹1Cr</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
