const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
    static associate(models) {
      this.hasMany(models.Part);
      this.belongsTo(models.User);
    }
  }

  Build.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );

  return Build;
};
