const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DeliveryAddress extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Order);
    }
  }

  DeliveryAddress.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      houseNr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );

  return DeliveryAddress;
};
