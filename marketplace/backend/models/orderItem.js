export default (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  
    OrderItem.associate = (models) => {
      OrderItem.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
      OrderItem.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
    };
  
    return OrderItem;
  };
  