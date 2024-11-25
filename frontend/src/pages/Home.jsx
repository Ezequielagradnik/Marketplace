import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Bienvenido al Marketplace
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        Explora nuestros productos y disfruta de tus compras.
      </p>
      <div className="space-x-4">
        <Link
          to="/products"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Ver Productos
        </Link>
        <Link
          to="/sell"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
        >
          Publicar un Artículo
        </Link>
      </div>
    </div>
  );
};

export default Home;
