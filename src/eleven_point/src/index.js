const pool = require("./db");

async function main() {
	try {
		const [rows, fields] = await pool.query("SELECT * FROM users");
		console.log("Результаты запроса:", rows);
	} catch (err) {
		console.error("Ошибка выполнения запроса:", err);
	} finally {
		pool.end((err) => {
			if (err) {
				console.error("Ошибка при закрытии пула подключений:", err);
			} else {
				console.log("Пул подключений закрыт.");
			}
		});
	}
}

main();
