const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Coach = sequelize.define("Coach", {
	name: DataTypes.STRING,
});

module.exports = Coach;
ы;
