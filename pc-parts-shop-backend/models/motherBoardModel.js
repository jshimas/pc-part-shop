const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class MotherBoard extends Model {}

MotherBoard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpuSocketStandard: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
    cpuSocketQuantity: DataTypes.INTEGER,
    ramType: {
      type: DataTypes.ENUM,
      values: ['DDR3', 'DDR4', 'DDR5'],
      //   allowNull: false,
    },
    ramSocketQuantity: DataTypes.INTEGER,
    m2ssdSocketQuantity: DataTypes.INTEGER,
    sataSocketQuantity: DataTypes.INTEGER,
    pcieStandart: {
      type: DataTypes.ENUM,
      values: ['PCLe 3.0', 'PCLe 4.0', 'PCLe 4.0'],
      // allowNull: false,
    },
    pcieSocketQuantity: DataTypes.INTEGER,
  },
  { sequelize }
);

module.exports = MotherBoard;
