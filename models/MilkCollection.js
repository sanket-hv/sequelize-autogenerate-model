/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MilkCollection', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    liter: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    snf: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    addDate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    timeslot: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    animalType: {
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
    CustomerId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Customer',
        key: 'id'
      },
      unique: "milkcollection_ibfk_1"
    },
    DairyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Dairy',
        key: 'id'
      },
      unique: "milkcollection_ibfk_2"
    }
  }, {
    sequelize,
    tableName: 'MilkCollection'
    });
};
