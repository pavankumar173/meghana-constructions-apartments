import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    name: "Meghana Heights",
    location: "Miyapur, Hyderabad",
    price: "₹75 Lakhs",
    image: "/assets/project1.jpg",
    description: "Premium apartments with modern amenities",
    status: "Under Construction",
    flatSqft: "1200 sqft",
    agreementPossibility: "Yes",
    locationDetails: "Near Miyapur Metro Station",
  },
  {
    id: 2,
    name: "Meghana Residency",
    location: "Kondapur, Hyderabad",
    price: "₹1.2 Crore",
    image: "/assets/project2.jpg",
    description: "Luxury living in a prime location",
    status: "Ready to Move",
    flatSqft: "1800 sqft",
    agreementPossibility: "No",
    locationDetails: "Close to Hi-Tech City",
  },
];

const placeholderImage = "https://via.placeholder.com/320x400";

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-[#1F4A44]">Our Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{ ...project, image: project.image || placeholderImage }}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-2xl text-gray-700 hover:text-black"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-[#1F4A44] mb-4">{selectedProject.name}</h3>
            <div className="text-sm space-y-2">
              <p><strong>Flat Sqft:</strong> {selectedProject.flatSqft}</p>
              <p><strong>Price:</strong> {selectedProject.price}</p>
              <p><strong>Location:</strong> {selectedProject.location}</p>
              <p><strong>Status:</strong> {selectedProject.status}</p>
              <p><strong>Agreement Possibility:</strong> {selectedProject.agreementPossibility}</p>
              <p><strong>Location Details:</strong> {selectedProject.locationDetails}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectList;
