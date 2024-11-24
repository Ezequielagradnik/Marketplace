import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import '../styles/products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // Cambia esta URL según tu backend
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default Products;
