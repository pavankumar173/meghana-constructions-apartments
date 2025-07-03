import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-600">{project.location}</p>
        <p className="mt-2 text-gray-700">{project.description}</p>
      </div>
      <div className="px-4 pb-4">
        <span className={`inline-block px-2 py-1 text-sm font-medium rounded ${
          project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {project.status}
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
