import React from 'react';

function Filter({ locations, statuses, filterLocation, filterStatus, onLocationChange, onStatusChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div>
        <label className="block mb-1 font-medium">Location:</label>
        <select
          value={filterLocation}
          onChange={e => onLocationChange(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Status:</label>
        <select
          value={filterStatus}
          onChange={e => onStatusChange(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">All Statuses</option>
          {statuses.map(st => (
            <option key={st} value={st}>{st}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
