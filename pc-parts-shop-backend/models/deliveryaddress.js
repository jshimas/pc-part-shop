const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DeliveryAddress extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasOne(models.Order, { foreignKey: 'deliveryAddressId' });
    }
  }
  DeliveryAddress.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'delivery_addresses',
      modelName: 'DeliveryAddress',
    }
  );
  return DeliveryAddress;
};
