const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GPU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Part }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
    }
  }
  GPU.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vramQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vramFrequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      frequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pcieStandart: {
        type: DataTypes.ENUM,
        values: ['PCLe 3.0', 'PCLe 4.0', 'PCLe 4.0'],
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'GPU',
    }
  );
  return GPU;
};
