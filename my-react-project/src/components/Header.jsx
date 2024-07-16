import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2 md:mr-4" />
          <span className="text-2xl font-bold">AdoptaGatos</span>
        </Link>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <nav className="hidden md:flex flex-grow justify-end">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Inicio</Link></li>
            <li><Link to="/galeria" className="hover:text-blue-200">Galería</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-200">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" className="hover:text-blue-200" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/galeria" className="hover:text-blue-200" onClick={toggleMenu}>Galería</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-200" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
