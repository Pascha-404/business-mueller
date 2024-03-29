import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { addMailToCollection } from '../firebase.config';
import contactReducer from '../reducers/contact.reducer';

const ContactContext = createContext();
const ContactDispatch = createContext();

function useContact() {
	const context = useContext(ContactContext);
	if (context === undefined) {
		throw new Error('useContact must be used within a ContactProvider');
	}
	return context;
}

function useContactDispatch() {
	const dispatch = useContext(ContactDispatch);
	if (dispatch === undefined) {
		throw new Error('useContactDispatch must be used within a ContactProvider');
	}
	return dispatch;
}

function ContactProvider({ children }) {
	const [state, dispatch] = useReducer(contactReducer, {
		formState: 'form',
		name: '',
		email: '',
		message: '',
		phoneCall: false,
		phoneNumber: '',
		acceptedDataPolicy: false,
		submit: false,
	});

	useEffect(() => {
		async function addToDb() {
			try {
				const sendData = await addMailToCollection(state);
				if (sendData === 'success') {
					dispatch({ type: 'SHOW_SUCCESS' });
				} else if (sendData === 'error') {
					dispatch({ type: 'SHOW_ERROR' });
				}
			} catch (e) {
				dispatch({ type: 'SHOW_ERROR' });
			}
		}

		if (state.submit) {
			addToDb();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.submit]);

	return (
		<ContactContext.Provider value={state}>
			<ContactDispatch.Provider value={dispatch}>{children}</ContactDispatch.Provider>
		</ContactContext.Provider>
	);
}

export { useContact, useContactDispatch, ContactProvider };
