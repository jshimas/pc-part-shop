const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RamTypeEnum extends Model {
    static associate({ Motherboard, RAM }) {
      this.hasMany(Motherboard, { foreignKey: 'ramTypeEnum' });
      this.hasMany(RAM, { foreignKey: 'ramTypeEnum' });
    }
  }
  RamTypeEnum.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ramType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'ram_type_enums',
      modelName: 'RamTypeEnum',
    }
  );
  return RamTypeEnum;
};
