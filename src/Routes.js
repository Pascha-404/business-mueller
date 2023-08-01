import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import App from './components/App';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

import styles from './Routes.module.scss';

// Routing displays by default Home component
function Routing() {
	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition
				key={location.key}
				timeout={500}
				classNames={{
					enterActive: styles.pageEnterActive,
					enterDone: styles.pageEnterDone,
					exitActive: styles.pageExit,
					exitDone: styles.pageExitActive,
				}}>
				<Routes location={location}>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='about' element={<Home scrollTo={'aboutSection'} />} />
						<Route path='inspirationen' element={<Home scrollTo={'inspoSection'} />} />
						<Route path='neukunde' element={<Home scrollTo={'couponSection'} />} />
						<Route path='bewertungen' element={<Home scrollTo={'ratingSection'} />} />
						<Route path='kontakt' element={<Home scrollTo={'contactSection'} />} />
						<Route path='impressum' element={<Impressum />} />
						<Route path='datenschutz' element={<Datenschutz />} />
					</Route>
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default Routing;
