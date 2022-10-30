import React from 'react';
import styles from './ContactButton.module.scss';

import { iconContact } from '../../assets';

// Simple component that displays a fixed button to get to contact section
function ContactButton({ isLight }) {
	return (
		<div
			className={`${styles.contactButton} ${isLight ? styles.lightTheme : ''}`}
			id='contactBtn'>
			<a href='#contactSection'>
				<img src={iconContact} alt='Contact Icon' />
			</a>
		</div>
	);
}

export default React.memo(ContactButton);
