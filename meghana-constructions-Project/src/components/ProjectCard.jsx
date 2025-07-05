import React from 'react';

function ProjectCard({ project }) {
  return (
   <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
  <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="font-semibold text-lg text-blue-700">{project.name}</h3>
    <p className="text-gray-600">{project.location}</p>
    <p className="text-sm mt-1">{project.description}</p>
    <span className="text-sm text-green-700 font-semibold mt-2 inline-block">{project.status}</span>
  </div>
</div>
  );
}




export default ProjectCard;
