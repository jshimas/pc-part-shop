const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrderStatusEnum, DeliveryAddress, OrderItem }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(OrderStatusEnum, { foreignKey: 'statusEnum' });
      this.belongsTo(DeliveryAddress, {
        foreignKey: 'deliveryAddressId',
      });
      this.hasMany(OrderItem, {
        foreignKey: 'orderId',
      });
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      paymentDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shippingDate: DataTypes.STRING,
      deliveryDate: DataTypes.STRING,
      deliveryAddressId: DataTypes.STRING,
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      statusEnum: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      details: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Order',
    }
  );
  return Order;
};
