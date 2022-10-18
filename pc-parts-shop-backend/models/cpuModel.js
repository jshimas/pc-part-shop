const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class CPU extends Model {}

CPU.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    socketStandard: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
    frequancy: DataTypes.INTEGER,
    coreQuantity: DataTypes.INTEGER,
    threadQuantity: DataTypes.INTEGER,
  },
  { sequelize }
);

module.exports = CPU;
