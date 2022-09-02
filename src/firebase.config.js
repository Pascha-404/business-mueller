// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
const analytics = getAnalytics(app);

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
        });
        console.log(docRef)
	} catch (e) {
		console.error('Error adding document', e);
	}
};

export { addMailToCollection };
