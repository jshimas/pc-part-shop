const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associations(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.DeliveryAddress);
      this.hasMany(models.OrderItem);
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
        type: DataTypes.DATE,
        allowNull: false,
      },
      shippingDate: DataTypes.DATE,
      deliveryDate: DataTypes.DATE,
      deliveryAddressId: DataTypes.STRING,
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

  return Order;
};
