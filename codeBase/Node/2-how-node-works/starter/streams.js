/** @format */

import fs from 'node:fs';
import { createServer } from 'http';

const server = createServer();

//a solution 1
/*
server.on('request', (req, res) => {
	fs.readFile('test-file.txt', (err, data) => {
		err ? console.log(err) : res.end(data);
	});
}); */

server.listen(8000, '127.0.0.1', () => {
	console.log('listening...');
});

//a solution 2 --> Streams
/*
server.on('request', (req, res) => {
	const readable = fs.createReadStream('test-file.txt');

	//s--> write

	readable.on('data', chunk => {
		res.write(chunk);
	});

	//s--> end

	readable.on('end', () => res.end());

	//s--> error

	readable.on('error', err => {
		console.log(err);
		res.statusCode = 500;
		res.end('file na  mali');
	});
}); */

//a solution 3 --> pipe

server.on('request', (req, res) => {
	const readable = fs.createReadStream('test-file.txt');
	readable.pipe(res);
});
