const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CPU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Part }) {
      this.belongsTo(Part, { foreignKey: 'partId' });
    }
  }
  CPU.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      socketStandard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frequancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      coreQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      threadQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'CPU',
    }
  );
  return CPU;
};
