const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class CompatiblePart extends Model {}

CompatiblePart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    compatible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = CompatiblePart;
