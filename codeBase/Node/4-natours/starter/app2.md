/** @format */

import express from 'express';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const app = express();

//b setting up middle-ware

app.use(express.json());

app.use((req, res, next) => {
	next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tours = JSON.parse(
   fs.readFileSync(
		`${__dirname}/dev-data/data/tours-simple.json`
	)
);

//a Get request

app.get('/apis/v1/tours', (req, res) => {
	res.status(200).json({
		status: 'success',
		results: tours.length,
		data: { tours }
	});
});

//d Post request

app.post('/apis/v1/tours', (req, res) => {
	const newId = tours[tours.length - 1].id + 1;
	const newTours = Object.assign({ id: newId }, req.body);
	tours.push(newTours);
	fs.writeFile(
		`${__dirname}/dev-data/data/tours-simple.json`,
		JSON.stringify(tours),
		err => {
			res.status(201).json({
				status: 'success',
				data: { tour: newTours }
			});
		}
	);
});

//d Get request with params

app.get('/apis/v1/tours/:id', (req, res) => {
	const id = req.params.id * 1;
	const tour = tours.find(el => el.id === id);

	if (!tour) {
		return res.status(404).json({
			status: 'fail',
			message: 'not found'
		});
	}
	res.status(200).json({
		status: 'success',
		data: { tour }
	});
});

const port = 3000;
app.listen(port, () => {
	console.log(`app is running on port ${port}`);
});
