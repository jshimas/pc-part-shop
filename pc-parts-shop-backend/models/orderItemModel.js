const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associations(models) {
      this.belongsTo(models.Order);
      this.belongsTo(models.Part);
    }
  }

  OrderItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize }
  );

  return OrderItem;
};
