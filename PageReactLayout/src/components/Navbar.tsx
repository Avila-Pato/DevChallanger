import { useState } from 'react';
import LogoAlarado from '../assets/logoAlarado';
import LogoAlaradoDark from '../assets/alaradodark';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`flex justify-between items-center p-5 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition duration-300`}>
      <div className="flex items-center">
        {darkMode ? <LogoAlaradoDark /> : <LogoAlarado />} {/* Logo condicional */}
      </div>
      <nav className="hidden md:flex space-x-8 font-bold">
        <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>About us</a>
        <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>Product</a>
        <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>Resource</a>
        <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>Contact</a>
      </nav>
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`p-2 rounded-md focus:outline-none ml-32 md:ml-32 ${darkMode ? 'text-white' : 'text-gray-800'}`}

        >
          {isOpen ? '✖️' : '☰'}
        </button>
        {isOpen && (
          <div className={`absolute top-16 right-0 w-48 bg-${darkMode ? 'gray-800' : 'white'} shadow-md`}>
            <nav className="flex flex-col p-4 space-y-2">
              <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>About us</a>
              <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>Product</a>
              <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>Resource</a>
              <a href="#" className={`hover:text-blue-500 ${darkMode ? 'text-gray-300' : 'text-gray-800'} transition duration-300`}>Contact</a>
            </nav>
          </div>
        )}
      </div>
      <button 
        onClick={toggleDarkMode} 
        className={`p-2 rounded-full transition duration-300 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Navbar;
