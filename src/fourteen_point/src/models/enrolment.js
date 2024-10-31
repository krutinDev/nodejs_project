const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Enrolment = sequelize.define("Enrolment", {
	grade: DataTypes.INTEGER,
});

module.exports = Enrolment;
