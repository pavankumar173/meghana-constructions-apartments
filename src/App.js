import React, { useState } from 'react';
import Filter from './components/Filter';
import ProjectList from './components/ProjectList';
import MapEmbed from './components/MapEmbed';
import ContactForm from './components/ContactForm';

const sampleProjects = [
  {
    id: 1,
    name: "Meghana Heights",
    location: "Hyderabad",
    description: "Luxury 2 & 3 BHK apartments.",
    image: "https://via.placeholder.com/400x250.png?text=Project+1",
    status: "Ongoing"
  },
  {
    id: 2,
    name: "Meghana Enclave",
    location: "Bangalore",
    description: "Affordable homes with premium features.",
    image: "https://via.placeholder.com/400x250.png?text=Project+2",
    status: "Completed"
  },
  {
    id: 3,
    name: "Meghana Residency",
    location: "Hyderabad",
    description: "Modern architecture with great connectivity.",
    image: "https://via.placeholder.com/400x250.png?text=Project+3",
    status: "Ongoing"
  }
];

function App() {
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const locations = [...new Set(sampleProjects.map(p => p.location))];
  const statuses = [...new Set(sampleProjects.map(p => p.status))];

  const filteredProjects = sampleProjects.filter(project => {
    return (!location || project.location === location) &&
           (!status || project.status === status);
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-primary flex items-center justify-center gap-2">
         <img src="/logo.png" alt="Logo" className="w-10 h-10" />
         Meghana Constructions
        </h1>

        <p className="text-lg text-gray-600">Find your perfect home with us</p>
      </header>

      <main className="max-w-7xl mx-auto">
        <Filter
          locations={locations}
          statuses={statuses}
          filterLocation={location}
          filterStatus={status}
          onLocationChange={setLocation}
          onStatusChange={setStatus}
        />

        <ProjectList projects={filteredProjects} />
        <MapEmbed />
        <ContactForm />
      </main>

      <footer className="text-center py-6 mt-12 text-gray-600">
        &copy; {new Date().getFullYear()} Meghana Constructions. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
