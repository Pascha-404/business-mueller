import React from 'react';
import styles from './ContactButton.module.scss';

import { useContactDispatch } from '../../contexts/contact.context';

import { iconContact } from '../../assets';

function ContactButton() {
	const contactDispatch = useContactDispatch();
	return (
		<button
			className={styles.contactButton}
			onClick={() => {
				contactDispatch({ type: 'TOGGLE_FORM' });
			}}>
			<img src={iconContact} alt='Contact Icon' />
		</button>
	);
}

export default ContactButton;
