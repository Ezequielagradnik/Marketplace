import "../styles/perfil.css";

const Perfil = ({ userName, items, onEdit, onDelete }) => {
  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Perfil de {userName}</h1>
      <div className="perfil-items">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="perfil-item-card">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">$ {item.price}</p>
                <div className="item-actions">
                  <button
                    className="btn-edit"
                    onClick={() => onEdit(item.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-items">No tienes artículos en venta.</p>
        )}
      </div>
    </div>
  );
};

export default Perfil;
