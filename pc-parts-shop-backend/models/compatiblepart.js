const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompatiblePart extends Model {
    static associate(models) {
      this.belongsTo(models.Part, { as: 'part1', foreignKey: 'part1Id' });
      this.belongsTo(models.Part, { as: 'part2', foreignKey: 'part2Id' });
    }
  }
  CompatiblePart.init(
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
      part1Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      part2Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'compatible_parts',
      modelName: 'CompatiblePart',
    }
  );
  return CompatiblePart;
};
