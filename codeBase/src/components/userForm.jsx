/** @format */

import { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import '../css/style.css';

import { auth } from '../firebase-config';

function App() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] =
		useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const register = async () => {
		try {
			const user =
				await createUserWithEmailAndPassword(
					auth,
					registerEmail,
					registerPassword,
				);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword,
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<div>
			<div className='form-div logout'>
				<h4> User Logged In: </h4>
				{user?.email}

				<button
					className='btn-grad'
					onClick={logout}>
					Sign Out
				</button>
			</div>
			<div className='form form-div'>
				<h1> Register User </h1>
				<input
					className='form-input'
					placeholder='Email...'
					onChange={(event) => {
						setRegisterEmail(
							event.target.value,
						);
					}}
				/>
				<input
					className='form-input'
					placeholder='Password...'
					onChange={(event) => {
						setRegisterPassword(
							event.target.value,
						);
					}}
				/>

				<button
					className='btn-grad'
					onClick={register}>
					Create User
				</button>
			</div>

			<div className='form-div login'>
				<h1> Login </h1>
				<input
					className='form-input'
					placeholder='Email...'
					onChange={(event) => {
						setLoginEmail(event.target.value);
					}}
				/>
				<input
					className='form-input'
					placeholder='Password...'
					onChange={(event) => {
						setLoginPassword(
							event.target.value,
						);
					}}
				/>

				<button
					className='btn-grad'
					onClick={login}>
					Login
				</button>
			</div>
		</div>
	);
}

export default App;
