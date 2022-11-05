const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate({ OrderItem, User }) {
      this.hasMany(OrderItem, { foreignKey: 'cartId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  ShoppingCart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'shopping_carts',
      modelName: 'ShoppingCart',
    }
  );
  return ShoppingCart;
};
