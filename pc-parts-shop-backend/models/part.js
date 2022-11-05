const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    static associate(models) {
      this.hasMany(models.OrderItem, { foreignKey: 'partId' });
      this.hasMany(models.BuildPart, { foreignKey: 'partId' });
      this.hasMany(models.CompatiblePart, {
        as: 'part1',
        foreignKey: 'part1Id',
      });
      this.hasMany(models.CompatiblePart, {
        as: 'part2',
        foreignKey: 'part2Id',
      });

      this.hasOne(models.GPU, { foreignKey: 'partId' });
      this.hasOne(models.PSU, { foreignKey: 'partId' });
      this.hasOne(models.ExternalMemory, { foreignKey: 'partId' });
      this.hasOne(models.CPU, { foreignKey: 'partId' });
      this.hasOne(models.RAM, { foreignKey: 'partId' });
      this.hasOne(models.Cooler, { foreignKey: 'partId' });
      this.hasOne(models.Motherboard, { foreignKey: 'partId' });
    }
  }
  Part.init(
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
      type: {
        type: DataTypes.ENUM,
        values: [
          'gpu',
          'psu',
          'storage',
          'memory',
          'cpu',
          'cooler',
          'motherboard',
        ],
        allowNull: false,
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: 'parts',
      modelName: 'Part',
    }
  );
  return Part;
};
