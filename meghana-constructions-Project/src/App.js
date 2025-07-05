import React from "react";
import Filter from "./components/Filter";
import ProjectList from "./components/ProjectList";
import MapEmbed from "./components/MapEmbed";
import ContactForm from "./components/ContactForm";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="bg-white font-sans min-h-screen">
      {/* Sticky Navbar */}
      <header className="fixed top-0 w-full bg-white shadow py-4 px-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Meghana Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Meghana Constructions</h1>
            <p className="text-sm text-gray-600">Find your perfect home with us</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-blue-700">Projects</a>
          <a href="#map" className="hover:text-blue-700">Map</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 p-6 max-w-6xl mx-auto">
        <Filter />
        
        <div id="projects">
          <ProjectList />
        </div>

        <section className="mt-10" id="map">
          <h2 className="text-xl font-semibold mb-4">📍 Our Projects on the Map</h2>
          <MapEmbed />
        </section>

        <section className="bg-gray-100 p-6 mt-10 rounded-md shadow-inner" id="contact">
          <h2 className="text-xl font-semibold mb-4">📬 Contact Us</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6 mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Meghana Constructions. All rights reserved.
        </p>
        <p className="text-xs mt-1">Designed with ❤️ in React + Tailwind CSS</p>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
        title="Back to Top"
      >
        ↑
      </a>
    </div>
  );
}

export default App;
