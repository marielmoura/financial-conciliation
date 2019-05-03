const http = require('http');
const request = require('request');
const _ = require('lodash');

const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

	

app.get('/', (req, res) => {

	return getTransactions.then(transactions=> res.send(getTransactions))

  // return ;
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

const getRequestOptions = path => {
  return {
  	 url: 'https://api.organizze.com.br/rest/v2' + path,
	  headers: {
	    'User-Agent': 'Mariel Moura (mariel.moura@gmail.com)'
	  },
	  json: true
	}; 
};

const getTransactions = new Promise((resolve, reject) => 
	request.get(getRequestOptions('/accounts'), (error, response, body) => {
		  console.error('error:', error); // Print the error if one occurred
		  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		  console.log('body:', Array.isArray(body)); // Print the HTML for the Google homepage. 

		const filteredAccountsIds = _.map(_.filter(body, ['archived', false]), 'id');

		var transactions = [];

		request.get(getRequestOptions('/transactions'), (error, response, body) => {
				for (s of body) { 
					 if(_.includes(filteredAccountsIds, s.account_id))
		  	 			transactions.push(s); 
		  		};

		  		resolve(transactions);
			})
			.auth('mariel.moura@gmail.com', '176773d36f2e056485b6e2092c0955e1f3639c8e', true);
	}).auth('mariel.moura@gmail.com', '176773d36f2e056485b6e2092c0955e1f3639c8e', true)
);

