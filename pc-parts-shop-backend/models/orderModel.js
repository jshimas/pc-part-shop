const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    shippingDate: DataTypes.DATE,
    deliveryDate: DataTypes.DATE,
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['shipped', 'delivered', 'new', 'hold', 'cancel'],
    },
    details: DataTypes.STRING,
  },
  { sequelize }
);

module.exports = Order;
