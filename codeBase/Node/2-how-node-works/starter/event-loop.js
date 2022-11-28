/** @format */

const fs = require('fs');

setTimeout(() => {
	console.log('set timeOut 1');
}, 0);
setImmediate(() => {
	console.log('set Immediate 1');
});

fs.readFile('test-file.txt', () => {
	console.log('I/O finished');
	console.log('--------------------');
	setTimeout(() => {
		console.log('set timeOut 2');
	}, 3000);
	setImmediate(() => {
		console.log('set Immediate 2');
	});
});

console.log('top level code executed');
