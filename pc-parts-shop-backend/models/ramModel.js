const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RAM extends Model {
    static associations(models) {
      this.hasMany(models.Part, {
        foreignKey: 'derivedPartId',
        constraints: false,
        scope: {
          derivedPartType: 'RAM',
        },
      });
    }
  }

  RAM.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      frequancy: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      type: {
        type: DataTypes.ENUM,
        values: ['DDR3', 'DDR4', 'DDR5'],
        //   allowNull: false,
      },
    },
    { sequelize }
  );

  return RAM;
};
