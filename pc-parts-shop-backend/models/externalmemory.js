const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExternalMemory extends Model {
    static associate(models) {
      this.belongsTo(models.Part, { foreignKey: 'partId' });
    }
  }
  ExternalMemory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      readSpeed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      writeSpeed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      connectorType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      partId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'external_memories',
      modelName: 'ExternalMemory',
    }
  );
  return ExternalMemory;
};
