const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class PSU extends Model {}

PSU.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    powerCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = PSU;
