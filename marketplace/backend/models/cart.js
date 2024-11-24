export default (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    });
  
    Cart.associate = (models) => {
      Cart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Cart.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
    };
  
    return Cart;
  };
  