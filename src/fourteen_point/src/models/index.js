const sequelize = require("../config/database");
const Company = require("./company");
const Product = require("./product");
const Coach = require("./coach");
const Team = require("./team");
const Student = require("./student");
const Course = require("./course");
const Enrolment = require("./enrolment");

// Устанавливаем связи между моделями
Company.hasMany(Product, { onDelete: "CASCADE" });
Product.belongsTo(Company);

Coach.hasOne(Team, { onDelete: "CASCADE" });
Team.belongsTo(Coach);

Student.belongsToMany(Course, { through: Enrolment });
Course.belongsToMany(Student, { through: Enrolment });

module.exports = {
	sequelize,
	Company,
	Product,
	Coach,
	Team,
	Student,
	Course,
	Enrolment,
};
