import React from 'react';
import { useContact, useContactDispatch } from '../../contexts/contact.context';

import Button from '../Button';

import styles from './ContactForm.module.scss';

function ContactForm() {
	const { name, email, message, phoneCall, phoneNumber } = useContact();
	const contactDispatch = useContactDispatch();

	const handleChange = key => e => {
		contactDispatch({ type: 'HANDLE_CHANGE', key: key, value: e.target.value });
	};

	const togglePhonecall = e => {
		contactDispatch({ type: 'TOGGLE_PHONECALL' });
	};

	const handleSubmit = e => {
		e.preventDefault();
		contactDispatch({ type: 'TOGGLE_SUBMIT' });
	};

	return (
		<form onSubmit={handleSubmit} className={styles.contactForm}>
			<input type='text' id='name' value={name} onChange={handleChange('name')} />
			<label htmlFor='name'>Vorname und Name</label>
			<input type='email' id='email' value={email} onChange={handleChange('email')} />
			<label htmlFor='email'>E-Mail Adresse</label>
			<textarea
				name='message'
				id='message'
				cols='30'
				rows='10'
				value={message}
				onChange={handleChange('message')}></textarea>
			<label htmlFor='message'>Nachricht</label>
			<input
				type='checkbox'
				name='phoneCall'
				id='phoneCall'
				value={phoneCall}
				onChange={togglePhonecall}
			/>
			<label htmlFor='phoneCall'>Wünschen Sie einen Rückruf?</label>
			<input
				type='tel'
				name='phoneNumber'
				id='phoneNumber'
				value={phoneNumber}
				onChange={handleChange('phoneNumber')}
			/>
			<label htmlFor='phoneNumber'>Telefonnummer</label>
			<div className={styles.btnWrapper}>
				<Button type='button' text="Los geht's!" submit />
			</div>
		</form>
	);
}

export default ContactForm;
