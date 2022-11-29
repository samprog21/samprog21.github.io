/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDNVPyuvSd-fcc7Sk7aDqCZ6W1-mxJfiAs',
	authDomain: 'streamme-365513.firebaseapp.com',
	projectId: 'streamme-365513',
	storageBucket: 'streamme-365513.appspot.com',
	messagingSenderId: '319163067804',
	appId: '1:319163067804:web:5047519eff232f66702c59',
	measurementId: 'G-JP5FSCG22X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
