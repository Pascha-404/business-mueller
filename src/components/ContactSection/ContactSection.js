import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

import { textureTwo, imgContact } from '../../assets';

import styles from './ContactSection.module.scss';

function ContactSection() {
	return (
		<section className={styles.contactSection}>
			<div className={styles.imgWrapper}>
                <img src={textureTwo} alt='Weiße Steintextur' className={styles.underlayedImg} />
                <img src={imgContact} alt="Weißes Badezimmer mit schwarz-goldenen Akzenten" />
			</div>
			<div className={styles.contactFormWrapper}>
				<h2>
					Schreiben Sie uns um zusammen Ihr
					<span className={styles.highlight}> neues Projekt</span> zu planen
				</h2>
				<p>
					Bitte hinterlassen Sie uns ihre bevorzugten Kontaktdaten - Email oder Telefon,
					damit wir uns mit Ihnen in Verbindung setzen und Ihr Projekt besprechen können.
				</p>
				<ContactForm />
			</div>
		</section>
	);
}

export default ContactSection;
