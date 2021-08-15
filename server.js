const http = require("http");
const products = require("./data/products");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.write("<h1>Hello World</h1>");
	res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
