/** @format */

import React, { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import Lottie from 'lottie-react';
import mail from '../../assets/mail.json';
import whatsapp from '../../assets/whatsapp.json';
import codee from '../../assets/codee.json';

const Footer = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [isFormSubmitted, setIsFormSubmitted] =
		useState(false);
	const [loading, setLoading] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		const contact = {
			_type: 'contact',
			name: formData.username,
			email: formData.email,
			message: formData.message
		};

		client
			.create(contact)
			.then(() => {
				setLoading(true);
				setIsFormSubmitted(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<h2
				className='head-text'
				style={{ marginBottom: '2.3rem' }}>
				Having <span>Second</span> thoughts?
			</h2>
			<div className='head-text portfd font-effect-shadow-multiple'>
				<h5>
					And with Last
					<span> piece of puzzle </span>
					<br />
					thisAmazing Portfolio
				</h5>
				<Lottie
					animationData={codee}
					loop={true}
					className='loti-codee'
				/>
				is also made by me
				{/* <span>
					<ul
						style={{
							fontSize: '1.5rem',
							listStyle: 'none'
						}}>
						<li
							style={{ color: 'Blue', listStyle: 'none' }}>
							React
						</li>
						<li
							style={{
								color: 'purple',
								listStyle: 'none'
							}}>
							Redux
						</li>
						<li
							style={{ color: 'pink', listStyle: 'none' }}>
							Sass
						</li>
						<li
							style={{ color: 'Green', listStyle: 'none' }}>
							Frammer motion
						</li>
						<li style={{ listStyle: 'none' }}>
							..and more
						</li>
					</ul>
				</span> */}
			</div>
			<h2 className='head-text'>
				Invite me For an <span>Interview</span>
				<br /> and Lets have a Chat
			</h2>
			<div className='app__footer-cards '>
				<div className='app__footer-card portf'>
					<Lottie
						animationData={mail}
						loop={true}
						className='loti-gmail'
					/>
					<a
						href='sandip:samprog21@gmail.com'
						className='p-text'>
						<span style={{ color: '#000000' }}>
							samprog21@gmail.com
						</span>
					</a>
				</div>
				<div className='app__footer-card portf'>
					<Lottie
						animationData={whatsapp}
						loop={true}
						className='loti'
					/>
					<a
						href='tel:+91-840-1331-327'
						className='p-text'>
						<span style={{ color: ' #000000' }}>
							+91-840-1331-327
						</span>
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className='app__footer-form app__flex '>
					<div className='app__flex '>
						<input
							className='p-text portf'
							type='text'
							placeholder='Your Name'
							name='username'
							value={username}
							onChange={handleChangeInput}
							style={{ color: 'black' }}
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text portf'
							type='email'
							placeholder='Your Email'
							name='email'
							value={email}
							onChange={handleChangeInput}
							style={{ color: 'black' }}
						/>
					</div>
					<div>
						<textarea
							className='p-text portf'
							placeholder='Your Message'
							value={message}
							name='message'
							onChange={handleChangeInput}
							style={{ color: 'black' }}
						/>
					</div>
					<button
						type='button'
						className='p-text'
						onClick={handleSubmit}>
						{!loading ? 'Send Message' : 'Sending'}
					</button>
				</div>
			) : (
				<div>
					<h3 className='head-text'>
						Thank you for getting in touch!
					</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
