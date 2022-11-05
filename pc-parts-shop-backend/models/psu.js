const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PSU extends Model {
    static associate({ Part }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
    }
  }

  PSU.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      powerCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'psus',
      modelName: 'PSU',
    }
  );
  return PSU;
};
