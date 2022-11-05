const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GPU extends Model {
    static associate({ Part, PcieStandartEnum }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
      this.belongsTo(PcieStandartEnum, { foreignKey: 'pcieStandartEnum' });
    }
  }
  GPU.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vramQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vramFrequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      frequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pcieStandartEnum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      partId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'gpus',
      modelName: 'GPU',
    }
  );
  return GPU;
};
