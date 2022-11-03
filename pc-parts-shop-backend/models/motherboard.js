const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Motherboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Part }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
    }
  }
  Motherboard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cpuSocketStandard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpuSocketQuantity: DataTypes.INTEGER,
      ramType: {
        type: DataTypes.ENUM,
        values: ['DDR3', 'DDR4', 'DDR5'],
        allowNull: false,
      },
      ramSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      m2ssdSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sataSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pcieStandart: {
        type: DataTypes.ENUM,
        values: ['PCLe 3.0', 'PCLe 4.0', 'PCLe 4.0'],
        allowNull: false,
      },
      pcieSocketQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Motherboard',
    }
  );
  return Motherboard;
};
