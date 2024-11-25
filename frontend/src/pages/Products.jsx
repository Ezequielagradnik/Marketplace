import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categories] = useState(["Vehículos", "Comida", "Inmuebles", "Tecnología", "Ropa", "Hogar"]);

  useEffect(() => {
    // Simulación de productos para mostrar algo visual
    const simulatedProducts = [
      { id: 1, name: "Producto 1", price: 100, imageUrl: "https://via.placeholder.com/150" },
      { id: 2, name: "Producto 2", price: 200, imageUrl: "https://via.placeholder.com/150" },
      { id: 3, name: "Producto 3", price: 300, imageUrl: "https://via.placeholder.com/150" },
    ];
    setProducts(simulatedProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      <div className="sidebar">
        <h2>Categorías</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button className="category-btn">{category}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.imageUrl}
              />
            ))
          ) : (
            <p className="no-products">No se encontraron productos.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
