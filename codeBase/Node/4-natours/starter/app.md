/** @format */

import express from 'express';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

const port = 3000;
app.listen(port, () => {
	console.log('app is running');
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tours = JSON.parse(
	fs.readFileSync(
		`${__dirname}/dev-data/data/tours-simple.json`
	)
);

app.get('/apis/v1/tours', (req, res) => {
	res.status(200).json({
		status: 'success',
		results: tours.length,
		data: { tours }
	});
});
