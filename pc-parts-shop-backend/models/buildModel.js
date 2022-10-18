const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Build extends Model {}

Build.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Build;
