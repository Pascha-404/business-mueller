import React, { createContext, useContext, useReducer, useEffect } from 'react';

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
    const [state, dispatch] = useReducer()
	return (
		<ContactContext.Provider value={state}>
			<ContactDispatch.Provider value={dispatch}>{children}</ContactDispatch.Provider>
		</ContactContext.Provider>
	);
}

export {useContact, useContactDispatch, ContactProvider};