/** @format */

import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import { Box } from '@mui/material';
import {
	ChannelDetail,
	Feed,
	Navbar,
	SearchFeed,
	VideoDetail,
} from './components';

const App = () => (
	<BrowserRouter>
		<Box>
			<Navbar />
			<Routes>
				<Route
					exact
					path='/'
					element={<Feed />}
				/>
				<Route
					exact
					path='/video/:id'
					element={<VideoDetail />}
				/>
				<Route
					exact
					path='/channel/:id'
					element={<ChannelDetail />}
				/>
				<Route
					exact
					path='/search/:searchTerm'
					element={<SearchFeed />}
				/>
			</Routes>
		</Box>
	</BrowserRouter>
);

export default App;
