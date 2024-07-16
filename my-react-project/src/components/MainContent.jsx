
import React, { useState } from 'react';
import gatoBg from '../assets/gato-bg.jpg';

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Bienvenido a AdoptaGatos</h1>
      <p className="text-lg">
        Encuentra a tu compañero felino perfecto y dale un hogar lleno de amor. Nuestros gatos están esperando ser parte de tu familia.
      </p>
      <div>
        <img src={gatoBg} alt="Gato" className="w-full object-cover mt-4 rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={openModal} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Mostrar Modal
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-lg">Saludos del Grp 5 DBL.</p>
            <button onClick={closeModal} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;
