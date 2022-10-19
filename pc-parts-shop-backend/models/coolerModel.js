const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cooler extends Model {
    static associate(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'Cooler',
        },
      });
    }
  }

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

  return Cooler;
};
