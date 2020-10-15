/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Dairy', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "userName"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    centerName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dairyName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dairyAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "phoneNumber"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Dairy'
    });
};
