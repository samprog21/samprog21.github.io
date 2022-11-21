/** @format */

import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/features/postSlice';
import { valuePage } from './redux/features/pageSlice';
import Dashboard from './components/Dashboard';
import Container from '@mui/material/Container';
import { Pagination, Grid, Box } from '@mui/material';

import Loader from './components/Loader';

const App = () => {
	const dispatch = useDispatch();

	const {
		posts: { users },
		loading,
	} = useSelector((state) => state.post);

	//value from Pagination that will update the state

	const nValue = useSelector((state) => state.page.value);

	useEffect(() => {
		dispatch(getPosts(nValue));
	}, [nValue, dispatch]);

	const handleChange = (event, value) => {
		dispatch(valuePage(value));
	};

	return (
		<>
			<CssBaseline />
			<Container
				maxWidth='xl'
				fixed>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					<Box
						p={2}
						sx={{
							overflowY: 'auto',
							height: '90vh',
							flex: 1,
						}}>
						{loading ? (
							<Loader />
						) : (
							<Dashboard users={users} />
						)}
					</Box>
				</Grid>

				<Pagination
					sx={{ position: 'sticky' }}
					count={10}
					variant='outlined'
					color='secondary'
					onChange={(event, value) => {
						handleChange(event, value);
					}}
				/>
			</Container>
		</>
	);
};

export default App;
