export default (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
      },
    });
  
    Order.associate = (models) => {
      Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Order.hasMany(models.OrderItem, { foreignKey: 'orderId', as: 'items' });
    };
  
    return Order;
  };
  