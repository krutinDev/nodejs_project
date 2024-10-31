// Определяем функцию display с асинхронной реализацией
function display(message, callback) {
	// Используем setTimeout для имитации асинхронности
	setTimeout(() => {
		callback(null, message);
	}, 1000);
}

// Вызываем асинхронную функцию display
display("Hello Async", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	// Выводим данные на консоль
	console.log(data);
});

// Завершаем выполнение программы
console.log("Завершение работы программы");

// Теперь display выполняется асинхронно, и вывод "Hello Async" происходит после "Завершение работы программы".
