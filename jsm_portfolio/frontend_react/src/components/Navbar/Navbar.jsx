/** @format */

import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { Outlet, Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Header } from '../../container';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div>
			<nav className='app__navbar'>
				<div className='app__navbar-logo'>
					<Link
						to='/'
						element={<Header />}>
						<img
							src={images.logo}
							alt='logo'
						/>
					</Link>
				</div>
				<div></div>
				<ul className='app__navbar-links '>
					{[
						'home',
						'about',
						'work',
						'skills',
						'education',
						'testimonials',
						'contact'
					].map(item => (
						<div>
							<li
								className='app__flex p-text '
								key={`link-${item}`}>
								<div />
								<Link
									to={item === 'home' ? '/' : `/${item}`}
									className='app__navbar-link '>
									{item}
								</Link>
							</li>
							<Outlet />
						</div>
					))}
				</ul>

				<div className='app__navbar-menu '>
					<HiMenuAlt4 onClick={() => setToggle(true)} />

					{toggle && (
						<motion.div
							whileInView={{ x: [300, 0] }}
							transition={{
								duration: 0.85,
								ease: 'easeOut'
							}}>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								{[
									'home',
									'about',
									'work',
									'skills',
									'contact',
									'testimonials'
								].map(item => (
									<li key={`link-${item}`}>
										<Link
											className='app__navbar-link '
											to={`/${item}`}
											onClick={() => setToggle(false)}>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
