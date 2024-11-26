import { useState } from "react";
import "../styles/products.css"; // Asegúrate de incluir los estilos

const ProductCard = ({ name, price, image }) => {
  const [animate, setAnimate] = useState(false);

  const handleAddToCart = () => {
    // Activa la animación al agregar al carrito
    setAnimate(true);

    // Reinicia la animación después de cierto tiempo
    setTimeout(() => {
      setAnimate(false);
    }, 10000); // Asegúrate que coincida con la duración de la animación
  };

  return (
    <div className={`product-card ${animate ? "order animate" : ""}`}>
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <button onClick={handleAddToCart} className="category-btn">
        Agregar al Carrito
      </button>

      {/* Animación del camión */}
      {animate && (
        <div className="success">
          <div className="truck">
            <span className="truck-icon">🚚</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
