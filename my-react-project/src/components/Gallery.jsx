import felix from '../assets/felix.jpg';
import luna from '../assets/luna.jpg';
import mia from '../assets/mia.jpg';
import nala from '../assets/nala.jpg';
import simba from '../assets/simba.jpg';
import leo from '../assets/leo.jpg';


const Gallery = () => {
    const cats = [
      { name: 'Luna', img: luna, desc: 'Gata blanca y negra, 2 años' },
      { name: 'Simba', img: simba, desc: 'Gato naranja, 1 año' },
      { name: 'Mia', img: mia, desc: 'Gata gris, 3 años' },
      { name: 'Leo', img: leo, desc: 'Gato atigrado, 6 meses' },
      { name: 'Nala', img: nala, desc: 'Gata siamesa, 4 años' },
      { name: 'Felix', img: felix, desc: 'Gato negro, 2 años' },
    ];
  
    return (
      <section className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Nuestros Gatos en Adopción</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cats.map((cat, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={cat.img} alt={cat.name} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{cat.name}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Gallery;