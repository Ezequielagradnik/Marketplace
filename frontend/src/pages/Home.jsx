import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home text-center p-8 bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
      {/* Encabezado */}
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
        Bienvenido al Marketplace
      </h1>
      <p className="text-gray-700 text-2xl mb-8 italic">
        Compra y vende fácilmente
      </p>


      {/* Botones */}
      <div className="space-x-6 mb-12">
        <Link to="/products" className="btn-primary">
          Ver Productos
        </Link>
        <Link to="/sell" className="btn-secondary">
          Publicar un Artículo
        </Link>
      </div>

      {/* Sección de Beneficios */}
      <div className="benefits-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="benefit-item bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Variedad de Productos</h3>
          <p className="text-gray-700">
            Encuentra miles de productos en diferentes categorías como ropa, tecnología, comida, y más.
          </p>
        </div>
        <div className="benefit-item bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Fácil de Usar</h3>
          <p className="text-gray-700">
            Publica artículos en minutos y disfruta de una experiencia de compra intuitiva.
          </p>
        </div>
        <div className="benefit-item bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Pagos Seguros</h3>
          <p className="text-gray-700">
            Compra con tranquilidad con métodos de pago seguros y confiables.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
