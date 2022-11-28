/** @format */

import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import Lottie from 'lottie-react';

import loading from '../../assets/loading.json';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};

const Header = () => {
	return (
		<div
			id='home'
			className='app__header app__flex'>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{
					duration: 0.5,
					delayChildren: 0.5
				}}
				className='app__header-img'>
				<Lottie
					whileInView={{ scale: [0, 2] }}
					transition={{
						duration: 0.1,
						ease: 'easeInOut'
					}}
					animationData={loading}
					className='overlay_circle'
					loop={true}
					style={{ height: '700px', width: '700px' }}
				/>
				<img
					src={images.profile}
					alt='profile_bg'
					style={{ height: '550px', width: '250px' }}
				/>
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 0.5 }}
					className='app__header-info'>
					<div className='app__header-badge'>
						<div className='badge-cmp app__flex'>
							<span></span>
							<div style={{ marginLeft: 20 }}>
								<p className='p-text'>Hello i am</p>
								<h1 className='head-texts head-text-modified'>
									Sandip
								</h1>
							</div>
						</div>
						<div className='tag-cmp app__flex'>
							<p className='p-text'>Web Developer</p>
							<p className='p-text'> Freelancer</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className='app__header-circles'>
				{[
					images.react,
					images.sass,
					images.redux,
					images.html,
					images.javascript,
					images.node,
					images.css
				].map((circle, index) => (
					<div
						className='circle-cmp app__flex '
						key={`circle-${index}`}>
						<img
							src={circle}
							alt='circle'
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Header;
