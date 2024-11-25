import "../styles/cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h1 className="cart-title">Tu Carrito</h1>
        <p className="cart-description">Aquí aparecerán los productos que agregues.</p>
        <div className="cart-empty">
          <img
            src="https://via.placeholder.com/150"
            alt="Carrito vacío"
            className="cart-empty-image"
          />
          <p className="cart-empty-text">¡Tu carrito está vacío! Explora nuestros productos y añade tus favoritos.</p>
          <button className="btn-primary">Ir a Productos</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
