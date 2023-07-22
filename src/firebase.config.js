// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAnalytics,
	setAnalyticsCollectionEnabled,
	logEvent,
} from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}.firebaseapp.com`,
	projectId: process.env.REACT_APP_FIREBASE_DOMAIN,
	storageBucket: `${process.env.REACT_APP_FIREBASE_DOMAIN}.appspot.com`,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider(`${process.env.REACT_APP_RECAPTCHA_USER}`),
	isTokenAutoRefreshEnabled: true,
});
// Initialize Google Analytics
const analytics = getAnalytics(app);

// Function to log pageView (e.g. after accepting cookie banner)
const logPageView = () => {
	logEvent(analytics, 'page_view', { page_location: window.location.href });
};

const activateGoogleAnalytics = () => {
	setAnalyticsCollectionEnabled(analytics, true);
};

const deactivateGoogleAnalytics = () => {
	setAnalyticsCollectionEnabled(analytics, false);
};

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Function to write Data into collection of Database
const addMailToCollection = async data => {
	try {
		const docRef = await addDoc(collection(db, 'mails'), {
			name: data.name,
			email: data.email,
			message: data.message,
			phoneCall: data.phoneCall,
			phoneNumber: data.phoneNumber,
			timestamp: Date.now(),
		});
		if (docRef.id) {
			return 'success';
		}
		return 'error';
	} catch (e) {
		console.error('Error adding document', e);
		return 'error';
	}
};

export {
	addMailToCollection,
	activateGoogleAnalytics,
	deactivateGoogleAnalytics,
	logPageView,
};
