const fs = require("fs");
const EventEmitter = require("events");
const zlib = require("zlib");
const path = require("path");

// Определяем пути к файлам
const helloPath = path.join(__dirname, "hello.txt");
const outputPath = path.join(__dirname, "output.txt");
const copyPath = path.join(__dirname, "copy.txt");
const gzipPath = path.join(__dirname, "hello.txt.gz");

// 1. Синхронное чтение из текстового файла
try {
	const data = fs.readFileSync(helloPath, "utf8");
	console.log("Синхронное чтение:", data);
} catch (err) {
	console.error(err);
}

// 2. Асинхронное чтение из текстового файла
fs.readFile(helloPath, "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log("Асинхронное чтение:", data);
});

// 4. Синхронная запись в текстовый файл
try {
	fs.writeFileSync(outputPath, "Hello, world!", "utf8");
	console.log("Синхронная запись завершена");
} catch (err) {
	console.error(err);
}

// Асинхронная запись в текстовый файл
fs.writeFile(outputPath, "Hello, async world!", "utf8", (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log("Асинхронная запись завершена");

	// 5. Дозапись информации в текстовый файл
	fs.appendFile(outputPath, "\nДобавленная строка", "utf8", (err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("Дозапись завершена");

		// 6. Асинхронное удаление файла после всех операций
		fs.unlink(outputPath, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log("Файл удалён (асинхронно)");
		});
	});
});

// 7. Генерация события и вызов обработчиков
const emitter = new EventEmitter();

emitter.on("event", () => {
	console.log("Событие произошло!");
});

emitter.emit("event");

// 8. Передача параметров событию
emitter.on("eventWithParams", (message) => {
	console.log(`Событие с сообщением: ${message}`);
});

emitter.emit("eventWithParams", "Привет, мир!");

// 9. Наследование от EventEmitter

// С использованием util.inherits
const util = require("util");

function MyObject() {
	EventEmitter.call(this);
}

util.inherits(MyObject, EventEmitter);

const obj1 = new MyObject();
obj1.on("customEvent", () => {
	console.log("Custom event triggered (util.inherits)!");
});
obj1.emit("customEvent");

// С использованием ES6 классов
class MyObjectES6 extends EventEmitter {}

const obj2 = new MyObjectES6();
obj2.on("customEvent", () => {
	console.log("Custom event triggered (ES6)!");
});
obj2.emit("customEvent");

// 10. Потоки для чтения и записи
const readStream = fs.createReadStream(helloPath, "utf8");
const writeStream = fs.createWriteStream(outputPath);

readStream.on("data", (chunk) => {
	writeStream.write(chunk);
});

readStream.on("end", () => {
	console.log("Данные записаны в файл");
});

// 11. Копирование данных с использованием pipe
const readStreamPipe = fs.createReadStream(helloPath);
const writeStreamPipe = fs.createWriteStream(copyPath);

readStreamPipe.pipe(writeStreamPipe);

// 12. Создание архива с использованием pipe и zlib
const gzip = zlib.createGzip();
const readStreamGzip = fs.createReadStream(helloPath);
const writeStreamGzip = fs.createWriteStream(gzipPath);

readStreamGzip.pipe(gzip).pipe(writeStreamGzip);
