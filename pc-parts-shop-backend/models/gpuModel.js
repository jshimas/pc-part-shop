const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class GPU extends Model {}

GPU.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vramQuantity: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    vramFrequancy: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    frequancy: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pcieStandart: {
      type: DataTypes.ENUM,
      values: ['PCLe 3.0', 'PCLe 4.0', 'PCLe 4.0'],
      // allowNull: false,
    },
  },
  { sequelize }
);

module.exports = GPU;
