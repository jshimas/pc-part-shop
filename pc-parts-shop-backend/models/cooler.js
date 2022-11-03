const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cooler extends Model {
    static associate(models) {
      this.belongsTo(models.Part, { foreignKey: 'partId' });
    }
  }
  Cooler.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Cooler',
    }
  );
  return Cooler;
};
