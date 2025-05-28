const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end("<h1>Home page</h1>");
    } else if (req.url === '/about') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end("<h1>About page</h1>");
    } else if (req.url === '/api') {
        fs.readFile('./data/data.json', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Failed to read file" }));
                return;
            }

            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end(`<h1>Error 404: Page not found</h1><a href='/'>Go to homepage</a>`);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});
