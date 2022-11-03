const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExternalMemory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    },
    {
      sequelize,
      modelName: 'ExternalMemory',
    }
  );
  return ExternalMemory;
};
