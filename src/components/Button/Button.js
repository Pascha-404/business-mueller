import React from 'react';

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
}) {
	// Constants define the passed style classes for theme and size of real button elements.
	const btnTheme =
		theme === 'light' ? styles.light : theme === 'dark' ? styles.dark : null;
	const bigButton = bigBtn === true ? styles.bigBtn : '';

	if (type === 'button' && submit === false) {
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
