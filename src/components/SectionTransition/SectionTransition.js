import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import styles from './SectionTransition.module.scss';

function SectionTransition({ children }) {
    const [transitionActive, setTransitionActive] = useState(false);
    
	return (
		<InView
			className={`${styles.sectionAnimation} ${transitionActive && styles.transition}`}
			rootMargin={'0px 0px -10% 0px'}
			onChange={inView => {
				setTransitionActive(inView);
			}}>
			{children}
		</InView>
	);
}

export default SectionTransition;
