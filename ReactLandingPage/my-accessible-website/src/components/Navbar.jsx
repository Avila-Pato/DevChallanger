import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10"> 
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-500 transition duration-200">
                    Alarado
                </Link>

                <button className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                <ul className={`md:flex md:space-x-6 absolute md:static bg-white md:bg-transparent transition-all duration-200 ease-in-out ${isMenuOpen ? 'top-12 left-0 w-full md:w-auto shadow-lg' : 'top-[-200px] md:top-0'} md:shadow-none`}>
                    <li>
                        <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-orange-600 rounded transition duration-200">About us</Link>
                    </li>
                    <li>
                        <Link to="/product" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-orange-600 rounded transition duration-200">Product</Link>
                    </li>
                    {/* ... otros enlaces de navegación */}
                </ul>

                {/* Botón de Dark Mode */}
                <DarkModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
