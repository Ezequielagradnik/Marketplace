import { Link } from "react-router-dom";
import '../styles/layout.css';
import '../styles/header.css'; // New CSS file for the header
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo-container">
          <img
            src={logo}
            alt="Marketplace Logo"
            className="logo"
          />
          <h1 className="site-title">Marketplace</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Productos</Link>
          <Link to="/cart">Carrito</Link>
          <Link to="/sell">Vender</Link>
          <Link to="/help">Ayuda</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Registrarse</Link>
          <Link to="/Perfil">Mi Perfil</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
