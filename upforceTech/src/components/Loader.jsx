/** @format */

import React from 'react';
import { Box, Stack } from '@mui/material';
import Lottie from 'lottie-react';
import dots from '../assets/dots.json';
import { Typography } from '@mui/material';

const Loader = () => (
	<Box minHeight='95vh'>
		<Stack
			direction='row'
			justifyContent='center'
			alignItems='center'
			height='80vh'>
			<Typography
				variant='h2'
				sx={{ color: 'black' }}>
				loading
			</Typography>
			<Lottie
				animationData={dots}
				loop={true}
				style={{ width: '300px', height: '300px' }}
			/>
		</Stack>
	</Box>
);

export default Loader;
