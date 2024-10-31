const http = require("http");
const os = require("os");
const fs = require("fs");

const greeting = require("./greeting");
const sinModule = require("./sinModule");

const config = JSON.parse(
	fs.readFileSync("./src/second_point/config/config.json", "utf8")
);
global.name = config.name;
global.date = new Date();

const server = http.createServer((req, res) => {
	const userName = os.userInfo().username;
	const currentDate = new Date();
	const greetingMessage = greeting(userName, currentDate);

	console.log(`Дата и время запроса: ${currentDate}`);
	console.log(greetingMessage);
	console.log(`Глобальная переменная name: ${global.name}`);
	console.log(`Sin(10) = ${sinModule(10)}\n`);
	res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
	res.write(greetingMessage, "utf8");
	res.end();
});

server.listen(3000, () => {
	console.log("Сервер запущен на http://localhost:3000/");
});
