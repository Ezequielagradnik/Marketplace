import { useEffect, useState } from "react";
import "../styles/products.css";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories] = useState([
    "Vehículos",
    "Comida",
    "Inmuebles",
    "Tecnología",
    "Ropa",
    "Hogar",
  ]);

  useEffect(() => {
    const simulatedProducts = [
      { id: 1, name: "Auto Deportivo", category: "Vehículos", price: 50000, imageUrl: "https://via.placeholder.com/150" },
      { id: 2, name: "Hamburguesa Gourmet", category: "Comida", price: 15, imageUrl: "https://via.placeholder.com/150" },
      { id: 3, name: "Casa Moderna", category: "Inmuebles", price: 150000, imageUrl: "https://via.placeholder.com/150" },
      { id: 4, name: "Smartphone 5G", category: "Tecnología", price: 799, imageUrl: "https://via.placeholder.com/150" },
      { id: 5, name: "Ropa Casual", category: "Ropa", price: 30, imageUrl: "https://via.placeholder.com/150" },
      { id: 6, name: "Sofá de Lujo", category: "Hogar", price: 1200, imageUrl: "https://via.placeholder.com/150" },
      { id: 7, name: "Motocicleta", category: "Vehículos", price: 15000, imageUrl: "https://via.placeholder.com/150" },
      { id: 8, name: "Pizza Napolitana", category: "Comida", price: 20, imageUrl: "https://via.placeholder.com/150" },
      { id: 9, name: "Apartamento en el Centro", category: "Inmuebles", price: 200000, imageUrl: "https://via.placeholder.com/150" },
      { id: 10, name: "Laptop Gaming", category: "Tecnología", price: 1500, imageUrl: "https://via.placeholder.com/150" },
    ];
    setProducts(simulatedProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  return (
    <div className="products-container">
      <div className="sidebar">
        <h2>Categorías</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedCategory(selectedCategory === category ? "" : category)
                }
              >
                {category}
              </button>
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
