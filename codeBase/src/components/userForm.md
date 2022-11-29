userForm

```jsx
/** @format */

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const UserForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = async () => {
		try {
			const user =
				await createUserWithEmailAndPassword(
					auth,
					email,
					password,
				);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	/* const handleSubmit = (e) => {
		console.log(e);
	}; */
	const handleChange = (e) => {
		console.log(e.target.value);
		switch (e.target.id) {
			case 'name':
				setName(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			default:
				setPassword(e.target.value);
		}
	};

	return (
		<form>
			<label>
				Name:
				<input
					id='name'
					type='text'
					value={name}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label>
				Email:
				<input
					id='email'
					type='email'
					value={email}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<label>
				Password:
				<input
					id='password'
					type='password'
					value={password}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<button onClick={register}>Create User</button>
		</form>
	);
};

export default UserForm;

```