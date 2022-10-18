const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Cooler extends Model {}

Cooler.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    height: DataTypes.FLOAT,
  },
  { sequelize }
);

module.exports = Cooler;
