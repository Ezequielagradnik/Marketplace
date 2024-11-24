import { Link } from "react-router-dom";
import '../styles/home.css';

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold text-blue-600">Bienvenido al Marketplace</h1>
      <p className="mt-4">Explora nuestros productos y disfruta de tus compras.</p>
      <Link
        to="/products"
        className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded"
      >
        Ver Productos
      </Link>
    </div>
  );
};

export default Home;
