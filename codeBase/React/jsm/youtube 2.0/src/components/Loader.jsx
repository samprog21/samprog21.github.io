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
				variant='h5'
				sx={{ color: 'gray' }}>
				loading
			</Typography>
			<Lottie
				animationData={dots}
				loop={true}
				style={{ width: '100px', height: '100px' }}
			/>
		</Stack>
	</Box>
);

export default Loader;
