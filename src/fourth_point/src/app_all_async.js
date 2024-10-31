// Определяем функцию display с асинхронной реализацией
function display(message, callback) {
	// Используем setTimeout для имитации асинхронности
	setTimeout(() => {
		callback(null, message);
	}, Math.floor(Math.random() * 1000));
}

// Первый асинхронный вызов
display("First Async Call", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);

	// Второй асинхронный вызов
	display("Second Async Call", (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(data);
	});
});

// Завершаем выполнение программы
console.log("Завершение работы программы");

// Теперь в программе два асинхронных вызова, которые могут выполняться в произвольном порядке из-за случайной задержки.
