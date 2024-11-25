import { Link } from "react-router-dom";
import "../styles/home.css"; // Asegúrate de tener este archivo bien vinculado.

const Home = () => {
  return (
    <div className="home text-center p-8 bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">
        Bienvenido al Marketplace
      </h1>
      <p className="text-gray-700 text-xl mb-10">
        Explora nuestros productos y disfruta de tus compras.
      </p>
      <div className="space-x-6">
        {/* Botón Ver Productos */}
        <Link
          to="/products"
          className="btn-primary"
        >
          Ver Productos
        </Link>
        {/* Botón Publicar un Artículo */}
        <Link
          to="/sell"
          className="btn-secondary"
        >
          Publicar un Artículo
        </Link>
      </div>
    </div>
  );
};

export default Home;
