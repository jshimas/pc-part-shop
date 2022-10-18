const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { sequelize }
);

module.exports = ShoppingCart;
