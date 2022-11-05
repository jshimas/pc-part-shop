const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Motherboard extends Model {
    static associate({ Part, PcieStandartEnum, RamTypeEnum }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
      this.belongsTo(PcieStandartEnum, { foreignKey: 'pcieStandartEnum' });
      this.belongsTo(RamTypeEnum, { foreignKey: 'ramTypeEnum' });
    }
  }
  Motherboard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cpuSocketStandard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpuSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ramTypeEnum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ramSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      m2ssdSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sataSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pcieStandartEnum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pcieSocketQuantity: {
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
      tableName: 'motherboards',
      modelName: 'Motherboard',
    }
  );
  return Motherboard;
};
