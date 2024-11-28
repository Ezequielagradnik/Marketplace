export default (sequelize, DataTypes) => {
    const OrderItem = sequelize.define(
      'OrderItem',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        orderId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'order_id',
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'product_id',
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        tableName: 'order_items', // Explicit table name
        timestamps: false, // No timestamps in this table
        underscored: true, // Maps camelCase to snake_case DB columns
      }
    );
  
    OrderItem.associate = (models) => {
      OrderItem.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' }); // OrderItem belongs to an Order
      OrderItem.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' }); // OrderItem belongs to a Product
    };
  
    return OrderItem;
  };
  