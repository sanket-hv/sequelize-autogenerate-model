/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    paymentDate: {
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
      unique: "payment_ibfk_1"
    },
    DairyId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Dairy',
        key: 'id'
      },
      unique: "payment_ibfk_2"
    }
  }, {
    sequelize,
    tableName: 'Payment'
    });
};
