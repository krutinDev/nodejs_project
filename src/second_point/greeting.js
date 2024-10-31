const names = require("./names");

module.exports = function (userName, currentDate) {
	const hour = currentDate.getHours();
	let timeGreeting = "Здравствуйте";

	if (hour < 12) {
		timeGreeting = "Доброе утро";
	} else if (hour < 18) {
		timeGreeting = "Добрый день";
	} else {
		timeGreeting = "Добрый вечер";
	}

	const nameGreetings = names
		.map((name) => `${timeGreeting}, ${name}!`)
		.join(" и ");

	return `${timeGreeting}, ${userName}! ${nameGreetings}`;
};
