const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GPU extends Model {
    static associate(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'GPU',
        },
      });
    }
  }
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

  return GPU;
};
