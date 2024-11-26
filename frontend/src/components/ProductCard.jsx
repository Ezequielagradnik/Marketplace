import { useState } from "react";
import "../styles/products.css";

const ProductCard = ({ name, price, image }) => {
  const [animate, setAnimate] = useState(false);

  const handleAddToCart = () => {
    setAnimate(true);

    // Reinicia la animación después del tiempo que dura
    setTimeout(() => {
      setAnimate(false);
    }, 2000); 
  };

  return (
    <div className="products">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <button onClick={handleAddToCart} className="cart-button">
        {animate ? (
          <div className="road">
            <div className="truck">
              <div className="truck-body"></div>
              <div className="truck-door"></div>
              <div className="truck-light"></div>
            </div>
          </div>
        ) : (
          "Agregar al Carrito"
        )}
      </button>
    </div>
  );
};

export default ProductCard;
