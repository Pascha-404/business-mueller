import React from 'react';
import styles from './ContactForm.module.scss';

function ContactForm() {
	return (
		<section className={styles.formWrapper}>
			<div className={styles.contactForm}>
				<p>
					Wir freuen uns auf Ihre Nachricht und werden uns schnellst möglich bei Ihnen
					zurückmelden.
				</p>
				<form>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' />
					<label htmlFor='email'>E-Mail Adresse</label>
					<input type='text' id='email' />
					<label htmlFor='message'>Nachricht</label>
					<textarea name='message' id='message' cols='30' rows='10'></textarea>
					<label htmlFor='phoneCall'>Wünschen Sie einen Rückruf?</label>
					<input type='checkbox' name='phoneCall' id='phoneCall' />
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
