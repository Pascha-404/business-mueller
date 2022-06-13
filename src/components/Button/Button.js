import React from 'react';

import styles from './Button.module.scss';

// Renders a Button or Button shaped element.
// accepts type = button (default) | shaped.
// buttons and button shaped components have different styling (dark and light)
function Button({ type = 'button',  text }) {
	if (type === 'button') {
		return <button className={styles.button}>{text}</button>;
	} else if (type === 'shaped') {
		return <div className={styles.buttonShaped}>{text}</div>;
	} else {
		throw new Error("Type does not exist. Choose between 'button' or 'shaped'");
	}
}

export default Button;
