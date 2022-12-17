const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CPU extends Model {
    static associate({ Part }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
    }
  }
  CPU.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      socketStandart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      coreQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      threadQuantity: {
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
      tableName: 'cpus',
      modelName: 'CPU',
    }
  );
  return CPU;
};
