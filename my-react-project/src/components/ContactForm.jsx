const ContactForm = () => {
    return (
      <section className="container mx-auto mt-8 p-4">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Sobre Nosotros</h1>
        <div className="container mx-auto mt-4 p-4">
            <p className="text-lg">AdoptaGatos es una organización sin fines de lucro dedicada a encontrar hogares amorosos para gatos abandonados y rescatados. Trabajamos incansablemente para asegurar que cada gato reciba el cuidado y el amor que merece.</p>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Contáctanos para Adoptar</h2>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nombre</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="cat" className="block mb-2">Gato de Interés</label>
            <input type="text" id="cat" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Mensaje</label>
            <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
        </form>
      </section>
    );
  };
  
  export default ContactForm;