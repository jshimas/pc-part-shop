const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RAM extends Model {
    static associate({ RamTypeEnum }) {
      this.belongsTo(RamTypeEnum, { foreignKey: 'ramTypeEnum' });
    }
  }
  RAM.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      frequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ramTypeEnum: {
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
      tableName: 'rams',
      modelName: 'RAM',
    }
  );
  return RAM;
};
