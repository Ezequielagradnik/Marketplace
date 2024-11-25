import "../styles/help.css";

const Help = () => {
  const faqs = [
    {
      question: "¿Cómo publico un producto en el marketplace?",
      answer:
        "Para publicar un producto, haz clic en el botón 'Vender' en el menú superior, completa los detalles del producto, como título, descripción, precio, y carga imágenes, y luego pulsa 'Publicar'.",
    },
    {
      question: "¿Cuánto cuesta publicar un producto?",
      answer:
        "Publicar un producto es completamente gratis. Sin embargo, podría aplicarse una comisión cuando se realiza la venta (si aplica en tu región).",
    },
    {
      question: "¿Cómo modifico o elimino un producto que he publicado?",
      answer:
        "Puedes modificar o eliminar tus productos accediendo a tu perfil y seleccionando el producto que deseas cambiar. Allí encontrarás opciones para editar o eliminar.",
    },
    {
      question: "¿Cómo sé si alguien compró mi producto?",
      answer:
        "Recibirás una notificación por correo electrónico o en tu cuenta del marketplace cuando alguien compre tu producto. También podrás ver los pedidos en la sección de 'Ventas' en tu perfil.",
    },
    {
      question: "¿Cómo gestiono los envíos de los productos vendidos?",
      answer:
        "Dependerá del método de envío configurado. Puedes acordar un envío con el comprador o usar las opciones de logística integradas (si están disponibles en tu área).",
    },
    {
      question: "¿Qué puedo hacer si tengo un problema con un comprador?",
      answer:
        "Puedes comunicarte directamente con el comprador a través del chat del marketplace. Si el problema persiste, contacta al soporte del marketplace para obtener ayuda.",
    },
  ];

  return (
    <div className="help-container">
      <h1 className="help-title">Preguntas Frecuentes</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
