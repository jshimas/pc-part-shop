const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CPU extends Model {
    static associate(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'CPU',
        },
      });
    }
  }

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

  return CPU;
};
