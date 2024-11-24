const API_URL = "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }
  return response.json();
};
