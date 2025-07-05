import React from "react";

const projects = [
  {
    id: 1,
    name: "Meghana Heights",
    location: "Miyapur, Hyderabad",
    price: "₹75 Lakhs",
    image: "/assets/project1.jpg",
  },
  {
    id: 2,
    name: "Meghana Residency",
    location: "Kondapur, Hyderabad",
    price: "₹1.2 Crore",
    image: "/assets/project2.jpg",
  },
];

const ProjectList = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white border rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.location}</p>
            <p className="text-blue-700 font-semibold mt-2">{project.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
