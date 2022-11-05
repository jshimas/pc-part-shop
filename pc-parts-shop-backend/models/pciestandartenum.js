const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PcieStandartEnum extends Model {
    static associate({ GPU, Motherboard }) {
      this.hasMany(GPU, { foreignKey: 'pcieStandartEnum' });
      this.hasMany(Motherboard, { foreignKey: 'pcieStandartEnum' });
    }
  }
  PcieStandartEnum.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      pcieStandart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'pcie_standart_enums',
      modelName: 'PcieStandartEnum',
    }
  );
  return PcieStandartEnum;
};
