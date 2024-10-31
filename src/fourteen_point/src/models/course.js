const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define("Course", {
	name: DataTypes.STRING,
});

module.exports = Course;
