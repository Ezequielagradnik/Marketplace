import { Link } from "react-router-dom";
import '../styles/layout.css';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Marketplace</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Productos</Link>
          <Link to="/cart">Carrito</Link>
          <Link to="/sell">Vender</Link>
          <Link to="/help">Ayuda</Link>
          <Link to="/login"> Log In</Link>
          <Link to="/register"> Registrarse</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
