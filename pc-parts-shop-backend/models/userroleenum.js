const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRoleEnum extends Model {
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'roleEnum' });
    }
  }
  UserRoleEnum.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'user_role_enums',
      modelName: 'UserRoleEnum',
    }
  );
  return UserRoleEnum;
};
