import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import styles from './ContactSection.module.scss';

function ContactSection() {
	return (
		<section className={styles.contactSection}>
			<ContactForm />
		</section>
	);
}

export default ContactSection;
