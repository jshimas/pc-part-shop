const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BuildPart extends Model {
    static associate(models) {
      this.belongsTo(models.Build, { foreignKey: 'buildId' });
      this.belongsTo(models.Part, { foreignKey: 'partId' });
    }
  }
  BuildPart.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'build_parts',
      modelName: 'BuildPart',
    }
  );
  return BuildPart;
};
