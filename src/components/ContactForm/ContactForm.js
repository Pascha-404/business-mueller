import React from 'react';
import { useContact, useContactDispatch } from '../../contexts/contact.context';
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
		<section className={styles.formWrapper}>
			<div className={styles.contactForm}>
				<p>
					Wir freuen uns auf Ihre Nachricht und werden uns schnellst möglich bei Ihnen
					zurückmelden.
				</p>

				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' value={name} onChange={handleChange('name')} />
					<label htmlFor='email'>E-Mail Adresse</label>
					<input type='email' id='email' value={email} onChange={handleChange('email')} />
					<label htmlFor='message'>Nachricht</label>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						value={message}
						onChange={handleChange('message')}></textarea>
					<label htmlFor='phoneCall'>Wünschen Sie einen Rückruf?</label>
					<input
						type='checkbox'
						name='phoneCall'
						id='phoneCall'
						value={phoneCall}
						onChange={togglePhonecall}
					/>
					<label htmlFor='phoneNumber'>Telefonnummer</label>
					<input
						type='tel'
						name='phoneNumber'
						id='phoneNumber'
						value={phoneNumber}
						onChange={handleChange('phoneNumber')}
					/>
					<button>Abbrechen</button>
					<button type='submit'>Senden</button>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
