const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Team = sequelize.define("Team", {
	name: DataTypes.STRING,
});

module.exports = Team;
