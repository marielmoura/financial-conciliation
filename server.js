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

const getUrlPath = path => 'https://api.organizze.com.br/rest/v2' + path;

const options = { 
  headers: {
    'User-Agent': 'Mariel Moura (mariel.moura@gmail.com)'
  },
  json: true
};

request.get({ ...options, url: getUrlPath('/accounts')}, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', Array.isArray(body)); // Print the HTML for the Google homepage. 

	const filteredAccounts = _.filter(body, ['archived', false]);

  	for (s of filteredAccounts) { 
  	 console.log(s) 
  	};


	request.get({ ...options, url: getUrlPath('/accounts')}, (error, response, body) => {
		for (s of body) { 
  	 			console.log(s) 
  		};
	});
  


}).auth('mariel.moura@gmail.com', '176773d36f2e056485b6e2092c0955e1f3639c8e', true);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});