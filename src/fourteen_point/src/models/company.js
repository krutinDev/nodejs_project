const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Company = sequelize.define("Company", {
	name: DataTypes.STRING,
});

module.exports = Company;
