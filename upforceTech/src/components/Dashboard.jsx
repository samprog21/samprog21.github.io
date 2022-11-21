/** @format */

import React from 'react';
import {
	Card,
	Stack,
	Box,
	CardContent,
	Typography,
	CardMedia,
	CardHeader,
	Avatar,
} from '@mui/material';
import { red } from '@mui/material/colors';
import '../App.css';

const Dashboard = ({ users }) => {
	if (users)
		return (
			<Stack
				direction='row'
				flexWrap='wrap'
				justifyContent='start'
				alignItems='start'
				gap={2}>
				{users.map((item, index) => (
					<Box
						key={index}
						className='box-items'>
						<Card
							className='card-items'
							sx={{
								width: {
									xs: '100%',
									sm: '358px',
									md: '320px',
								},
							}}>
							<CardHeader
								avatar={
									<Avatar
										sx={{ bgcolor: red[500] }}
										aria-label='IDs'>
										Id
									</Avatar>
								}
								title={item.id}
							/>

							<CardMedia
								component='img'
								height='50%'
								image={item.image}
								alt={item.title}
							/>
							{
								<CardContent
									sx={{
										height: '106px',
									}}>
									<Typography className='header-text-primary'>
										Name:{item.firstName} {item.lastName}
									</Typography>

									<Typography className='header-text-primary'>
										Email: {item.email}
									</Typography>
								</CardContent>
							}
						</Card>
					</Box>
				))}
			</Stack>
		);
};

export default Dashboard;
