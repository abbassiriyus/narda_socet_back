const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {-
  res.send('<h1>Hello world</h1>');
});

server.listen(5000, () => {
  console.log('server running at http://localhost:5000');
});