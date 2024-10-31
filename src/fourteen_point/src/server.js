const express = require("express");
const { sequelize } = require("./models");
const exampleRoutes = require("./routes/exampleRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Подключаем маршруты
app.use("/api", exampleRoutes);

// Синхронизируем базы данных и запускаем сервер
sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
});
