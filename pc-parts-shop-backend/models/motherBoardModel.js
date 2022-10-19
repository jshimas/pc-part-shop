const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MotherBoard extends Model {
    static associate(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'MotherBoard',
        },
      });
    }
  }
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

  return MotherBoard;
};
