const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderStatusEnum extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'statusEnum' });
    }
  }
  OrderStatusEnum.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'order_status_enums',
      modelName: 'OrderStatusEnum',
    }
  );
  return OrderStatusEnum;
};
