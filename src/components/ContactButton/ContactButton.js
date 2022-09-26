import React from 'react';
import styles from './ContactButton.module.scss';


import { iconContact } from '../../assets';

function ContactButton() {

	return (
		<div className={styles.contactButton}>
			<a>
				<img src={iconContact} alt='Contact Icon' />
			</a>
		</div>
	);
}

export default ContactButton;
