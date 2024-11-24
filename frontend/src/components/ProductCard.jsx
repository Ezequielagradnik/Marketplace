const ProductCard = ({ name, price, image }) => {
    return (
      <div className="border p-4 rounded shadow">
        <img src={image} alt={name} className="w-full h-32 object-cover mb-4" />
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-700">${price}</p>
        <button className="bg-blue-500 text-white p-2 mt-4 rounded">
          Agregar al Carrito
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  