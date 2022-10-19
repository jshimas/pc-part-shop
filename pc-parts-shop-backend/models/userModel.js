const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    async isCorrectPassword(candidatePassword) {
      return await bcrypt.compare(candidatePassword, this.password);
    }

    static associations(models) {
      this.hasMany(models.Order);
      this.hasMany(models.DeliveryAddress);
      this.hasMany(models.Build);
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
        isEmail: true,
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
            return value === this.password;
          },
        },
      },
      phone: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['user', 'admin'],
        defaultValue: 'user',
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
          throw new Error('Do not try to set the `fullName` value!');
        },
      },
    },
    { sequelize }
  );

  User.beforeCreate(async (user) => {
    this.password = await bcrypt.hash(user.password, 12);
    this.passwordConfirm = undefined;
  });

  return User;
};
