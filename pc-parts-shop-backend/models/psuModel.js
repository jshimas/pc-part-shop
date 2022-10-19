const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PSU extends Model {
    static associations(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'PSU',
        },
      });
    }
  }

  PSU.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      powerCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize }
  );

  return PSU;
};
