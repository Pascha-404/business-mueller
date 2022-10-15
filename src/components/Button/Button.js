import React from 'react';
import { useContactDispatch } from '../../contexts/contact.context';

import styles from './Button.module.scss';

// Renders a Button or Button shaped element.
// accepts type = button (default) | shaped.
// buttons and button shaped components have different styling (dark and light)
function Button({
	type = 'button',
	text,
	submit = false,
	theme = 'light',
	bigBtn = false,
	backToForm = false,
}) {
	// Constants define the passed style classes for theme and size of real button elements.
	const btnTheme =
		theme === 'light' ? styles.light : theme === 'dark' ? styles.dark : null;
	const bigButton = bigBtn === true ? styles.bigBtn : '';

	const contactDispatch = useContactDispatch();

	// Function to change contact context back to formState: form and submit: false
	// In case that form failed to send
	const handleBackToForm = () => {
		contactDispatch({ type: 'BACK_TO_FORM' });
	};

	if (type === 'button' && submit === false) {
		if (backToForm) {
			return (
				<button
					className={`${styles.button} ${btnTheme} ${bigButton}`}
					onClick={handleBackToForm}>
					{text}
				</button>
			);
		}
		return (
			<button className={`${styles.button} ${btnTheme} ${bigButton}`}>{text}</button>
		);
	} else if (type === 'button' && submit === true) {
		return (
			<button className={`${styles.button} ${btnTheme} ${bigButton}`} type='submit'>
				{text}
			</button>
		);
	} else if (type === 'shaped') {
		return <div className={`${styles.buttonShaped}`}>{text}</div>;
	} else {
		throw new Error("Type does not exist. Choose between 'button' or 'shaped'");
	}
}

export default Button;
