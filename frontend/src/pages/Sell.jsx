import { useState } from "react";
import "../styles/sell.css";

const Sell = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos al backend
    console.log({
      title,
      price,
      description,
      image,
    });
  };

  return (
    <div className="sell-container">
      <h1>Vender un Artículo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del producto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          required
        />
        <button type="submit">Publicar</button>
      </form>
      <p>
        ¿Tienes dudas? <a href="/help">Contáctanos aquí</a>
      </p>
    </div>
  );
};

export default Sell;
