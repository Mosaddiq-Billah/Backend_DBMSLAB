'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart_Items.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Product_Quantity: DataTypes.INTEGER,
    Total_Amount: DataTypes.INTEGER,
    Order_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Items',
  });
  return Cart_Items;
};