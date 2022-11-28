/** @format */
//a read from file

const fs = require('fs');
const url = require('url');
/* const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
//b write to file

const textOut = `this is what we knwo:${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut); */
/*
fs.readFile('./txt/sam.txt', 'utf-8', (err, data) => {
	fs.readFile(
		`./txt/${data}.txt`,
		'utf-8',
		(err, data1) => {
			fs.writeFile(
				'./txt/output.txt',
				`${data1}\n >>${data}`,
				err => {
					console.log(err);
				}
			);
		}
	);
}); */
/*
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
	//if (err) return console.log('ERROR! 💥');

	fs.readFile(
		`./txt/${data1}.txt`,
		'utf-8',
		(err, data2) => {
			console.log(data2);
		}
	);
}); */

//A building server

const http = require('http');
const server = http.createServer((req, res) => {
	res.end('hello from the server');
	const pathname = req.url;

	if (pathname === '/' || pathname === '/overview') {
		res.end('this is overview');
	} else if (pathname === '/product') {
		res.end('this is product');
	} else if (pathname === '/api') {
		res.end('api');
	} else {
		res.writeHead(404, {
			'Content-type': 'text/html'
		});
		res.end('<h1>this is 404</h1>');
	}
});

server.listen(8000, '127.0.0.1', () => {
	console.log('listening');
});
