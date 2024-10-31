const http = require("http");
const fs = require("fs");
const path = require("path");

let userId = 0;

const server = http.createServer(async (request, response) => {
	userId++;
	const url = request.url;

	if (url === "/") {
		response.writeHead(301, { Location: "/home" });
		response.end();
	} else if (url === "/home") {
		sendFile(response, "index.html", "text/html");
	} else if (url === "/about") {
		sendFile(response, "about.html", "text/html");
	} else if (url === "/contact") {
		sendFile(response, "contact.html", "text/html");
	} else if (url === "/styles.css") {
		sendFile(response, "styles.css", "text/css");
	} else if (url === "/template") {
		fs.readFile(
			path.join(__dirname, "template.html"),
			"utf8",
			(err, data) => {
				if (err) {
					response.statusCode = 500;
					response.end("Error loading template.html");
					return;
				}
				const content = data
					.replace("{header}", "Welcome")
					.replace("{message}", "This is a dynamic message!");
				response.writeHead(200, { "Content-Type": "text/html" });
				response.end(content);
			}
		);
	} else if (request.method === "POST" && url === "/data") {
		let body = "";
		request.on("data", (chunk) => {
			body += chunk.toString();
		});
		request.on("end", () => {
			console.log("Received data:", body);
			response.end("Data received");
		});
	} else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.end("<h1>404 Not Found</h1>");
	}
});

function sendFile(response, filePath, contentType) {
	fs.readFile(path.join(__dirname, filePath), (err, data) => {
		if (err) {
			response.statusCode = 500;
			response.end(`Error loading ${filePath}`);
			return;
		}
		response.writeHead(200, { "Content-Type": contentType });
		response.end(data);
	});
}

server.listen(3003, () => {
	console.log("Server running at http://localhost:3003/");
});
