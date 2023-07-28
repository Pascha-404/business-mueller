import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactButton.module.scss';

import { iconContact } from '../../assets';

// Simple component that displays a fixed button to get to contact section
function ContactButton({ isLight }) {
	return (
		<div
			className={`${styles.contactButton} ${isLight ? styles.lightTheme : ''}`}
			id='contactBtn'>
			<Link to='/kontakt'>
				<img src={iconContact} alt='Contact Icon' />
			</Link>
		</div>
	);
}

export default React.memo(ContactButton);
