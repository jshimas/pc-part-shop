const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BuildPart extends Model {
    static associate(models) {
      this.belongsTo(models.Build);
      this.belongsTo(models.Part);
    }
  }

  BuildPart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { sequelize }
  );

  return BuildPart;
};
