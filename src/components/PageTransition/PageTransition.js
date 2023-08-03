import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import styles from './PageTransition.module.scss';

function PageTransition({ children }) {
    const nodeRef = useRef(null);
    console.log('log')
	return (
		<TransitionGroup>
            <CSSTransition
				nodeRef={nodeRef}
				key={uuid()}
                timeout={500}
                in={false}
                unmountOnExit
                mountOnEnter
				classNames={{ ...styles }}>
				<div ref={nodeRef}>{children}</div>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default PageTransition;
