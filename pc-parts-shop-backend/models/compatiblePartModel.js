const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CompatiblePart extends Model {
    static associate(models) {
      this.belongsTo(models.Part, { as: 'part1' });
      this.belongsTo(models.Part, { as: 'part2' });
    }
  }

  CompatiblePart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      compatible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { sequelize }
  );

  return CompatiblePart;
};
