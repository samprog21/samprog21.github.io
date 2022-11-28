/** @format */

import EventEmitter from 'events';
import http from 'node:http';

import ansiColors from 'ansi-colors';
const c = ansiColors;

const myEmitter = new EventEmitter();
myEmitter.on('new sale', () => {
	console.log(c.bgGreen.black('sam there is new sale'));
});
myEmitter.on('new sale', () => {
	console.log('customer name:sam');
});
myEmitter.emit('new sale');
