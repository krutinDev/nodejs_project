const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
	host: "localhost",
	dialect: "sqlite",
	storage: "./database.sqlite", // Используем SQLite для простоты
});

module.exports = sequelize;
