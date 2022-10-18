const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class ExtrnalMemory extends Model {}

ExtrnalMemory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    readSpeed: {
      type: DataTypes.INTEGER,
      //   allowNull: false,
    },
    writeSpeed: {
      type: DataTypes.INTEGER,
      //   allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      //   allowNull: false,
    },
    connectorType: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
  },
  { sequelize }
);

module.exports = ExtrnalMemory;
