export default (sequelize, DataTypes) => {
    const Order = sequelize.define(
      'Order',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'user_id',
        },
        totalPrice: {
          type: DataTypes.FLOAT,
          allowNull: false,
          field: 'total_price',
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'pending',
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'created_at',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'updated_at',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
      {
        tableName: 'orders', // Explicit table name
        timestamps: true, // Enables createdAt and updatedAt
        underscored: true, // Maps camelCase to snake_case DB columns
      }
    );
  
    Order.associate = (models) => {
      Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' }); // Order belongs to a User
      Order.hasMany(models.OrderItem, { foreignKey: 'orderId', as: 'orderItems' }); // Order has many OrderItems
    };
  
    return Order;
  };
  