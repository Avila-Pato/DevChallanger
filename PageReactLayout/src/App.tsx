import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';  // Importar el componente Navbar
import imageHero from './assets/imageHero.png'; // Importa la imagen

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-between text-center p-5">
        {/* Contenido a la izquierda */}
        <div className="flex flex-col items-center md:items-start max-w-lg mx-auto">
          <h6 className="text-blue-600 font-semibold ml-0 md:ml-32"> 😎 Simple way To Communicate</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
            Actions for Accessibility in Design
          </h1>
          <p className="text-lg mt-5 px-4 md:px-0">
            The fastest way to build and deploy websites with reusable components.
          </p>
          <div className="mt-10 flex flex-col md:flex-row md:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
              Get Started
            </button>
            <button className="text-blue-600 underline mt-3 md:mt-0 hover:text-blue-800 transition duration-200 font-semibold">
              Get live demo
            </button>
          </div>

          {/* Link a la derecha */}
          <div className='flex space-x-5 mt-4'>
            <a href="#" className="text-gray-600 hover:text-blue-800 transition duration-200">✅ No credit Card </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 transition duration-200"> ✅ No software to install </a>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="relative w-full md:w-1/2 mt-5 md:mt-0">
          <img 
            src={imageHero} 
            alt="Descripción de la imagen" 
            className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className={`text-center p-5 text-sm ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <p>No credit card required · No software to install</p>
      </footer>
    </div>
  );
}

export default App;
