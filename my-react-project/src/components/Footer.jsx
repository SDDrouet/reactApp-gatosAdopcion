import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white mt-8 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p><strong>Contacto:</strong> info@adoptagatos.com</p>
          <p><strong>Teléfono:</strong> (593) 456-7890</p>
          <p><strong>Dirección:</strong> Ecuador, Rumiñahui, Av. General Rumiñahui</p>
          <p>Universidad de las Fuerzas Armadas ESPE</p>
        </div>
        <div className="mt-4 md:mt-0">
          <a href="https://www.facebook.com/" className="mr-4 hover:text-blue-200" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://x.com/" className="mr-4 hover:text-blue-200" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/" className="hover:text-blue-200" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
