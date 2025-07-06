import React from "react";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-white border rounded shadow hover:shadow-lg p-4 w-full max-w-[320px]">
      <div className="w-full h-[400px] overflow-hidden rounded">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/320x400")
          }
        />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold text-[#1F4A44]">{project.name}</h3>
        <p className="text-sm text-gray-600"><strong>Location:</strong> {project.location}</p>
        <p className="text-sm text-gray-600"><strong>Price:</strong> {project.price}</p>
        <p className="text-sm text-gray-600"><strong>Status:</strong> {project.status}</p>
        <button
          onClick={() => onViewDetails(project)}
          className="mt-3 px-4 py-2 w-full bg-[#F4A51C] text-[#2A3D45] rounded hover:bg-[#9B2C2C] hover:text-white transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
