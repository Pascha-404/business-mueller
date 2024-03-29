import React from 'react';
import { Link } from 'react-router-dom';
import { useContact, useContactDispatch } from '../../contexts/contact.context';

import Button from '../Button';

import styles from './ContactForm.module.scss';

function ContactForm() {
	const { name, email, message, phoneCall, phoneNumber, acceptedDataPolicy } =
		useContact();
	const contactDispatch = useContactDispatch();

	const handleChange = key => e => {
		contactDispatch({ type: 'HANDLE_CHANGE', key: key, value: e.target.value });
	};

	const togglePhonecall = e => {
		contactDispatch({ type: 'TOGGLE_PHONECALL' });
	};

	const toggleDataPolicy = e => {
		contactDispatch({ type: 'TOGGLE_DATAPOLICY' });
	};

	const handleSubmit = e => {
		e.preventDefault();
		contactDispatch({ type: 'TOGGLE_SUBMIT' });
	};

	return (
		<form onSubmit={handleSubmit} className={styles.contactForm}>
			<input
				autoComplete='name'
				type='text'
				id='name'
				value={name}
				onChange={handleChange('name')}
				required
			/>
			<label htmlFor='name'>Vorname und Name</label>

			<input
				autoComplete='email'
				type='email'
				id='email'
				value={email}
				onChange={handleChange('email')}
				required
			/>
			<label htmlFor='email'>E-Mail Adresse</label>

			<textarea
				name='message'
				id='message'
				cols='30'
				rows='10'
				value={message}
				onChange={handleChange('message')}
				required></textarea>
			<label htmlFor='message'>Nachricht</label>

			<div className={styles.checkboxWrapper}>
				<input
					type='checkbox'
					name='phoneCall'
					id='phoneCall'
					checked={phoneCall}
					onChange={togglePhonecall}
				/>
				<label htmlFor='phoneCall'>Wünschen Sie einen Rückruf?</label>
			</div>

			<div className={styles.checkboxWrapper}>
				<input
					type='checkbox'
					name='dataPolicy'
					id='dataPolicy'
					checked={acceptedDataPolicy}
					onChange={toggleDataPolicy}
				/>

				<label htmlFor='dataPolicy'>
					Ich akzeptiere die{' '}
					<Link style={{ borderBottom: '1px solid #343f3ed9' }} to='/datenschutz'>
						Datenschutzerklärung
					</Link>
				</label>
			</div>

			<input
				className={`${styles.phoneNumberElement} ${phoneCall ? styles.active : ''}`}
				type='tel'
				name='phoneNumber'
				id='phoneNumber'
				autoComplete='tel'
				value={phoneNumber}
				onChange={handleChange('phoneNumber')}
				required
			/>
			<label
				htmlFor='phoneNumber'
				className={`${styles.phoneNumberElement} ${phoneCall ? styles.active : ''}`}>
				Telefonnummer
			</label>

			<div
				className={`${styles.btnWrapper} ${acceptedDataPolicy ? '' : styles.disabled}`}>
				<Button
					type='button'
					text="Los geht's!"
					submit
					theme='dark'
					bigBtn
					disabled={!acceptedDataPolicy}
				/>
			</div>
		</form>
	);
}

export default ContactForm;
