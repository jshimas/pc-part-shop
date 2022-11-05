const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, Part, ShoppingCart }) {
      this.belongsTo(Order, { foreignKey: 'orderId' });
      this.belongsTo(Part, { foreignKey: 'partId' });
      this.belongsTo(ShoppingCart, { foreignKey: 'cartId' });
    }
  }
  OrderItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.INTEGER,
      },
      cartId: {
        type: DataTypes.INTEGER,
      },
      partId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'order_items',
      modelName: 'OrderItem',
    }
  );
  return OrderItem;
};
