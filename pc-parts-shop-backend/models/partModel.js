const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Part extends Model {}

Part.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    releaseDate: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      // allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Part;
