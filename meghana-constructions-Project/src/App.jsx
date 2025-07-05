import React from 'react';
import Filter from './components/Filter';
import ProjectList from './components/ProjectList';
import MapEmbed from './components/MapEmbed';
import ContactForm from './components/ContactForm';
const logo = "/logo.png";


function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Meghana Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-blue-800">Meghana Constructions</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-10 space-y-10 max-w-7xl mx-auto">
        <section>
          <h2 className="text-3xl font-semibold mb-4">🏡 Explore Our Projects</h2>
          <Filter />
          <ProjectList />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">📍 Project Locations</h2>
          <MapEmbed />
        </section>

        <section className="bg-blue-50 p-6 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center p-4 mt-10">
        &copy; {new Date().getFullYear()} Meghana Constructions. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
