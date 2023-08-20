import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import styles from './SectionTransition.module.scss';

function SectionTransition({ children }) {
	const [transitionActive, setTransitionActive] = useState(false);

	function handleChange(inView) {
		setTransitionActive(inView);
	}

	return (
		<InView
			className={`${styles.sectionTransition} ${transitionActive && styles.transition}`}
			rootMargin={'0px 0px -10% 0px'}
			onChange={handleChange}>
			{children}
		</InView>
	);
}

export default SectionTransition;
