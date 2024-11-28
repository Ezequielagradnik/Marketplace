export default (sequelize, DataTypes) => {
    const Cart = sequelize.define(
      'Cart',
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
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'product_id',
        },
        quantity: {
          type: DataTypes.INTEGER,
          defaultValue: 1,
          allowNull: false,
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
        tableName: 'cart', // Table name explicitly set
        timestamps: true, // Enables createdAt and updatedAt
        underscored: true, // Maps camelCase to snake_case DB columns
      }
    );
  
    Cart.associate = (models) => {
      // Define associations
      Cart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      Cart.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
    };
  
    return Cart;
  };
  