import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { routes } from '../../Routes';

import styles from './PageTransition.module.scss';

function PageTransition({ children }) {
	const location = useLocation();
	const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {};

	return (
		<div className={styles.container}>
			<SwitchTransition mode='out-in'>
				<CSSTransition
					key={location.pathname}
					nodeRef={nodeRef}
					timeout={{ appear: 2000, enter: 300, exit: 300 }}
					appear
					in
					unmountOnExit
					classNames={{ ...styles }}>
					{state => <div ref={nodeRef}>{children}</div>}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
}

export default PageTransition;
