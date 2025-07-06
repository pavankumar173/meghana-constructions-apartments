import React from "react";

const Filter = () => {
  return (
    <div className="filter-container mb-6 p-4 bg-gray-50 rounded-md shadow fade-in">
      <h3 className="text-lg font-semibold mb-3">🔍 Filter Projects</h3>
      <div className="flex flex-wrap gap-4">
        <select className="border p-2 rounded w-48">
          <option value="">Location</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="bangalore">Bangalore</option>
        </select>
        <select className="border p-2 rounded w-48">
          <option value="">BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
        </select>
        <select className="border p-2 rounded w-48">
          <option value="">Budget</option>
          <option value="50l">Under ₹50L</option>
          <option value="100l">₹50L - ₹1Cr</option>
          <option value="100l+">Above ₹1Cr</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;