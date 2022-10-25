import React from 'react';
import { InView } from 'react-intersection-observer';
import { textureTwo, imgContact } from '../../assets';
import { iconError, iconSuccess } from '../../assets';

import { useContact } from '../../contexts/contact.context';
import { useBtnTheme } from '../../contexts/btnTheme.context';

import Button from '../Button';
import ContactForm from '../ContactForm/ContactForm';

import styles from './ContactSection.module.scss';

function ContactSection() {
	const { formState } = useContact();
	const { isLight, setIsLight } = useBtnTheme();

	function handleOberserverChange(inView, entry) {
		setIsLight(!isLight);
	}
	return (
		<InView
			as='section'
			className={styles.contactSection}
			id='contactSection'
			rootMargin={'-100% 0px 0px 0px'}
			onChange={handleOberserverChange}>
			<div className={styles.imgWrapper}>
				<img src={textureTwo} alt='Weiße Steintextur' className={styles.underlayedImg} />
				<img src={imgContact} alt='Weißes Badezimmer mit schwarz-goldenen Akzenten' />
			</div>

			{formState === 'form' && (
				<div className={styles.contactFormWrapper}>
					<h2>
						Schreiben Sie uns um zusammen Ihr
						<span className={styles.highlight}> neues Projekt</span> zu planen
					</h2>
					<p>
						Bitte hinterlassen Sie uns ihre bevorzugten Kontaktdaten - Email oder Telefon,
						damit wir uns mit Ihnen in Verbindung setzen und Ihr Projekt besprechen
						können.
					</p>
					<ContactForm />
				</div>
			)}

			{formState === 'success' && (
				<div className={styles.feedback}>
					<img src={iconSuccess} alt='Haken Symbol' />
					<p className={styles.h1}>Fertig!</p>
					<p>
						Ihre Nachricht wurde erfolgreich abgeschickt. Sie erhalten eine Kopie an die
						angegebene Email Adresse. Dankeschön, wir melden uns schnellst möglich bei
						Ihnen.
					</p>
				</div>
			)}

			{formState === 'error' && (
				<div className={`${styles.feedback} ${styles.error}`}>
					<img src={iconError} alt='Kreuz Symbol' />
					<p className={styles.h1}>Sorry!</p>
					<p>Irgendwas ist schief gelaufen. Senden Sie das Formular bitte noch einmal:</p>
					<Button text='Zurück' bigBtn theme='dark' backToForm />
				</div>
			)}
		</InView>
	);
}

export default ContactSection;
