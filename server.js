const http = require('http');
const request = require('request');
const _ = require('lodash');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const options = {
  url: 'https://api.organizze.com.br/rest/v2/accounts',
  headers: {
    'User-Agent': 'Mariel Moura (mariel.moura@gmail.com)'
  }
};



request.get(options, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  // _.each(body, (value, key) => console.log(key));

  // for (var i = 0; i < body.length; i++) {
  // 	console.log(body[i]);
  // }

}).auth('mariel.moura@gmail.com', '176773d36f2e056485b6e2092c0955e1f3639c8e', true);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});