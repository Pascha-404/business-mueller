import React from 'react';
import styles from './ContactButton.module.scss';

import { iconContact } from '../../assets';
import { useBtnTheme } from '../../contexts/btnTheme.context';

function ContactButton() {
	const { isLight } = useBtnTheme();
	return (
		<div className={`${styles.contactButton} ${isLight ? styles.lightTheme : ''}`} id='contactBtn'>
			<a href='#contactSection'>
				<img src={iconContact} alt='Contact Icon' />
			</a>
		</div>
	);
}

export default ContactButton;
