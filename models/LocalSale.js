/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LocalSale', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    saleDate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    animalType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    liter: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    totalAmount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DairyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Dairy',
        key: 'id'
      },
      unique: "localsale_ibfk_1"
    },
    CustomerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'id'
      },
      unique: "localsale_ibfk_2"
    }
  }, {
    sequelize,
    tableName: 'LocalSale'
    });
};
