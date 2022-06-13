import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo-mueller.png';
import styles from './Navbar.module.scss';

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<img src={Logo} alt='Fliesenfachbetrieb Müller Logo' />
			<ul>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}>
						Warum Uns
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}>
						Insipationen
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}>
						Bewertungen
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}>
						Kontakt
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
