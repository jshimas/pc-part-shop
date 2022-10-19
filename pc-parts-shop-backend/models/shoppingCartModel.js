const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associations(models) {
      this.hasMany(models.OrderItem);
      this.belongsTo(models.User);
    }
  }

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

  return ShoppingCart;
};
