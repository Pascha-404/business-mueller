import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactButton.module.scss';

import { cloudinaryUrls } from '../../assets';

import { useBtnTheme } from '../../contexts/btnTheme.context';

// Simple component that displays a fixed button to get to contact section
function ContactButton() {
	const { isLight } = useBtnTheme();
	return (
		<div
			className={`${styles.contactButton} ${isLight ? styles.lightTheme : ''}`}
			id='contactBtn'>
			<Link to='/' state={{ section: 'contactSection' }}>
				<span className={styles.text}>Schreiben Sie uns!</span>
				<img src={cloudinaryUrls.iconContact} alt='Email Logo' />
			</Link>
		</div>
	);
}

export default React.memo(ContactButton);
