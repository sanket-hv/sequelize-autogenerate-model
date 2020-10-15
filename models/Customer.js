/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: "phoneNumber"
    },
    fatherName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IFSCCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    villageName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
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
      unique: "customer_ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'Customer'
    });
};
