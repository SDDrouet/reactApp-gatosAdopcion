import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
        <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-4" />
            AdoptaGatos
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Inicio</Link></li>
            <li><Link to="/galeria" className="hover:text-blue-200">Galería</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-200">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;