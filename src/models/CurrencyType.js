const { DataTypes } = require('sequelize');
const db = require("../db/index");

const CurrencyType = db.define('CurrencyTypes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
})



module.exports = CurrencyType;
