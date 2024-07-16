
import React, { useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', cat: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formValues.name) errors.name = 'El nombre es requerido';
    if (!formValues.email) errors.email = 'El correo electrónico es requerido';
    if (!formValues.cat) errors.cat = 'El gato de interés es requerido';
    if (!formValues.message) errors.message = 'El mensaje es requerido';
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Procesar el formulario
      console.log('Formulario enviado:', formValues);
    }
  };

  return (
    <section className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Sobre Nosotros</h1>
      <div className="container mx-auto mt-4 p-4">
        <p className="text-lg">AdoptaGatos es una organización sin fines de lucro dedicada a encontrar hogares amorosos para gatos abandonados y rescatados. Trabajamos incansablemente para asegurar que cada gato reciba el cuidado y el amor que merece.</p>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contáctanos para Adoptar</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {formErrors.name && <p className="text-red-600">{formErrors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="cat" className="block mb-2 text-gray-700">Gato de Interés</label>
          <input
            type="text"
            id="cat"
            value={formValues.cat}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {formErrors.cat && <p className="text-red-600">{formErrors.cat}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-gray-700">Mensaje</label>
          <textarea
            id="message"
            rows="4"
            value={formValues.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          {formErrors.message && <p className="text-red-600">{formErrors.message}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
