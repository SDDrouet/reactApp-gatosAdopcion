import gatoBg from '../assets/gato-bg.jpg';

const MainContent = () => {
  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Bienvenido a AdoptaGatos</h1>
      <p className="text-lg">Encuentra a tu compañero felino perfecto y dale un hogar lleno de amor. Nuestros gatos están esperando ser parte de tu familia.</p>
      <div>
        <img src={gatoBg} alt="Gato" className="w-full object-cover mt-4 rounded-lg shadow-lg" />
      </div>
    </main>
  );
};

export default MainContent;
