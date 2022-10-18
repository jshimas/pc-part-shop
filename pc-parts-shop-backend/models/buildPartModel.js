const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class BuildPart extends Model {}

BuildPart.init(
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

module.exports = BuildPart;
