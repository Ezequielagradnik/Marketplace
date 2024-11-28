export default (sequelize, DataTypes) => {
    const Product = sequelize.define(
      'Product',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'image_url',
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'user_id',
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
        tableName: 'products', // Explicit table name
        timestamps: true, // Enables createdAt and updatedAt
        underscored: true, // Maps camelCase to snake_case DB columns
      }
    );
  
    Product.associate = (models) => {
      Product.belongsTo(models.User, { foreignKey: 'userId', as: 'user' }); // Product belongs to a User
    };
  
    return Product;
  };
  