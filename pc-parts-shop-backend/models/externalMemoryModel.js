const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExtrnalMemory extends Model {
    static associate(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'ExtrnalMemory',
        },
      });
    }
  }

  ExtrnalMemory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      readSpeed: {
        type: DataTypes.INTEGER,
        //   allowNull: false,
      },
      writeSpeed: {
        type: DataTypes.INTEGER,
        //   allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        //   allowNull: false,
      },
      connectorType: {
        type: DataTypes.STRING,
        //   allowNull: false,
      },
    },
    { sequelize }
  );

  return ExtrnalMemory;
};
