const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
	name: DataTypes.STRING,
});

module.exports = Product;
