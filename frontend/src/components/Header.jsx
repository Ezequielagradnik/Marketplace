import { Link } from "react-router-dom";
import '../styles/layout.css';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Marketplace</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/login"> Log In</Link>
          <Link to="/register"> Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
