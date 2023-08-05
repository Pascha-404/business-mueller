import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import styles from './PageTransition.module.scss';

function PageTransition({ children }) {
	const homeRef = useRef(null);
	const impressumRef = useRef(null);
	const privacyRef = useRef(null);
	const { pathname } = useLocation();
	const nodeRef =
		pathname === '/datenschutz'
			? privacyRef
			: pathname === '/impressum'
			? impressumRef
                : homeRef;
    
    
    
	return (
		<SwitchTransition mode='out-in'>
			<CSSTransition
				nodeRef={nodeRef}
				key={pathname}
				timeout={{ appear: 1000, enter: 300, exit: 300 }}
                appear
				classNames={{ ...styles }}>
				<div ref={nodeRef} className={styles.page}>
					{children}
				</div>
			</CSSTransition>
		</SwitchTransition>
	);
}

export default PageTransition;
