const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class RAM extends Model {}

RAM.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    frequancy: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    type: {
      type: DataTypes.ENUM,
      values: ['DDR3', 'DDR4', 'DDR5'],
      //   allowNull: false,
    },
  },
  { sequelize }
);

module.exports = RAM;
