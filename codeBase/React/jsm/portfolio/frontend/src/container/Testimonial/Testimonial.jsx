/** @format */

import React, { useState, useEffect } from 'react';
import {
	HiChevronLeft,
	HiChevronRight
} from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';
import contract from '../../assets/contract.json';
import Lottie from 'lottie-react';
const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [testimonials, setTestimonials] = useState([]);
	const [brands, setBrands] = useState([]);

	const handleClick = index => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then(data => {
			setTestimonials(data);
		});

		client.fetch(brandsQuery).then(data => {
			setBrands(data);
		});
	}, []);

	return (
		<>
			<div
				className='head-text'
				style={{ marginBottom: '1.2rem' }}>
				<span style={{ display: 'flex' }}>
					<Lottie
						animationData={contract}
						loop={true}
						className='loti-contract'
					/>
					<h3>Testimonials</h3>
				</span>

				<h5>Don't just believe my words</h5>
			</div>
			{testimonials.length && (
				<>
					<div className='app__testimonial-item app__flex'>
						<img
							src={urlFor(
								testimonials[currentIndex].imgurl
							)}
							alt={testimonials[currentIndex].name}
						/>
						<div className='app__testimonial-content'>
							<p className='p-text'>
								{testimonials[currentIndex].feedback}
							</p>
							<div>
								<h4 className='bold-text'>
									{testimonials[currentIndex].name}
								</h4>
								<h5 className='p-text'>
									{testimonials[currentIndex].company}
								</h5>
							</div>
						</div>
					</div>

					<div className='app__testimonial-btns app__flex'>
						<div
							className='app__flex'
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}>
							<HiChevronLeft />
						</div>

						<div
							className='app__flex'
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}
			<span className='head-text'>
				known Areas and <span>Techs</span>
			</span>
			<div className='app__testimonial-brands app__flex'>
				{brands.map(brand => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: 'tween' }}
						key={brand._id}>
						<img
							src={urlFor(brand.imgUrl)}
							alt={brand.name}
						/>
					</motion.div>
				))}
			</div>
		</>
	);
	/* <>
			<span className='head-text'>
				known Areas and <span>Techs</span>
			</span>
		</> */
};

export default AppWrap(
	MotionWrap(Testimonial, 'app__testimonial'),
	'testimonial',
	'app__primarybg'
);
