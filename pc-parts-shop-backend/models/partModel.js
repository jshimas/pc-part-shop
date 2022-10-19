const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    static associations(models) {
      this.hasMany(models.OrderItem);
      this.hasMany(models.Part);
      this.hasMany(models.CompatiblePart);

      this.belongsTo(models.GPU, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
      this.belongsTo(models.PSU, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
      this.belongsTo(models.ExtrnalMemory, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
      this.belongsTo(models.CPU, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
      this.belongsTo(models.RAM, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
      this.belongsTo(models.Cooler, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
      this.belongsTo(models.MotherBoard, {
        foreignKey: 'derivedPartId',
        constraints: false,
      });
    }
  }

  Part.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      releaseDate: {
        type: DataTypes.DATE,
        // allowNull: false,
      },
      manufacturer: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        // allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
    },
    { sequelize }
  );

  return Part;
};
