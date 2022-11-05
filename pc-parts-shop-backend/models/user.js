const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    async isCorrectPassword(candidatePassword) {
      return await bcrypt.compare(candidatePassword, this.password);
    }

    static associate({
      Order,
      ShoppingCart,
      DeliveryAddress,
      Build,
      UserRoleEnum,
    }) {
      this.hasOne(ShoppingCart, { foreignKey: 'userId' });
      this.hasMany(Order, { foreignKey: 'userId' });
      this.hasMany(DeliveryAddress, { foreignKey: 'userId' });
      this.hasMany(Build, { foreignKey: 'userId' });
      this.belongsTo(UserRoleEnum, { foreignKey: 'roleEnum' });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: { msg: 'Email is in a wrong format' },
      },
      phone: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      roleEnum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8,
        },
      },
      passwordConfirm: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
          isEqualToPassword(value) {
            if (value !== this.password)
              throw new Error('Passwords do not match');
          },
        },
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set() {
          throw new Error('Do not try to set the `fullName` value!');
        },
      },
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  );

  User.beforeCreate(async (user) => {
    this.password = await bcrypt.hash(user.password, 12);
    this.passwordConfirm = undefined;
  });

  return User;
};
