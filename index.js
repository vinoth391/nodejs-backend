const http = require('node:http');
const fs = require('node:fs');

let tweets = []; // fake in-memory DB

// Function to log into log.txt
function log(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync('log.txt', `[${timestamp}] ${message}\n`);
}

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;

  // Routes
  switch (method) {
    case 'GET': {
      switch (path) {
        case '/':
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Hello from the server');
          log("GET /");
          return;

        case '/contact-us':
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Email: vino@example.com | Contact: +91 9876543210');
          log("GET /contact-us");
          return;

        case '/tweet':
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(tweets));
          log("GET /tweet - sent all tweets");
          return;
      }
      break;
    }

    case 'POST': {
      switch (path) {
        case '/tweet': {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            try {
              const data = JSON.parse(body); // expecting { "tweet": "..." }
              tweets.push(data.tweet); // fake DB insert
              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ message: 'Tweet saved successfully!' }));
              log(`POST /tweet - new tweet: ${data.tweet}`);
            } catch (err) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Invalid JSON' }));
              log("POST /tweet - invalid JSON");
            }
          });
          return;
        }
      }
      break;
    }
  }

  // Default 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end("You are lost");
  log(`${method} ${path} - 404`);
});

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
