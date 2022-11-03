const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
    static associate({ Part, User }) {
      this.hasMany(Part, { foreignKey: 'buildId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Build.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Build',
    }
  );
  return Build;
};
