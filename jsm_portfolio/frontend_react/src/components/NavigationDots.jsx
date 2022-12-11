/**
 * /* eslint-disable jsx-a11y/control-has-associated-label
 *
 * @format
 */

/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
	<div className='app__navigation'>
		{[
			'home',
			'about',
			'work',
			'skills',
			'testimonial',
			'contact'
		].map((item, index) => (
			<a
				href={`#${item}`}
				key={item + index}
				className='app__navigation-dot'
				style={
					active === item
						? { backgroundColor: '#ee9ca7' }
						: {}
				}
			/>
		))}
	</div>
);

export default NavigationDots;