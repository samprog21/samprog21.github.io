/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	const onhandleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);

			setSearchTerm('');
		}
	};

	return (
		<Paper
			component='form'
			onSubmit={onhandleSubmit}
			sx={{
				borderRadius: 20,
				border: '1px solid #787878',
				pl: 2,
				boxShadow: 'none',
				mr: { sm: 5 },
				backgroundColor: '#787878',
				boxShadow: '1px 1px 5px #000',
			}}>
			<input
				className='search-bar'
				placeholder='Search...'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				style={{
					backgroundColor: '#787878',
					color: 'white',
				}}
			/>
			<IconButton
				type='submit'
				sx={{ p: '10px', color: 'red' }}
				aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
