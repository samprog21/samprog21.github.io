/** @format */

import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { SearchBar } from './';
import Lottie from 'lottie-react';
import youtube from '../assets/youtube.json';
import logo from '../assets/logo.svg';
import { Typography } from '@mui/material';
import { fontFamily } from '@mui/system';

const Navbar = () => (
	<Stack
		direction='row'
		alignItems='center'
		p={2}
		sx={{
			position: 'sticky',
			background: '#000',
			top: 0,
			justifyContent: 'space-between',
		}}>
		<Link
			to='/'
			style={{ display: 'flex', alignItems: 'center' }}>
			<Lottie
				animationData={youtube}
				loop={false}
			/>
		</Link>

		<a
			href=''
			target='blank'>
			<Typography
				variant='h6'
				sx={{ color: 'black' }}
				className='samN'>
				Youtube 3.0
			</Typography>
		</a>
		<span
			style={{
				color: 'gray',
				fontSize: '21px',
				fontFamily: 'Signika',
			}}>
			samprog21@gmail.com
		</span>

		<SearchBar />
	</Stack>
);

export default Navbar;
