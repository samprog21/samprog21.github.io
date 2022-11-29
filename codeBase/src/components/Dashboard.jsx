/** @format */

import React from 'react';

import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
	const docRef = doc(db, 'samData', 'name');
	const docSnap = async () => {
		await getDoc(docRef);
	};
	console.log(docSnap());

	return <div>'hello'</div>;
};

export default Dashboard;
