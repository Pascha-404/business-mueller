import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo-mueller.png';
import styles from './Navbar.module.scss';

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<NavLink to='/'>
				<img src={Logo} alt='Fliesenfachbetrieb Müller Logo' />
			</NavLink>
			<ul>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.unactiveLink
						}
						data-content='Home'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/about'
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.unactiveLink
						}
						data-content='Warum Uns'>
						Warum Uns
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/inspirationen'
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.unactiveLink
						}
						data-content='Inspirationen'>
						Inspirationen
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/bewertungen'
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.unactiveLink
						}
						data-content='Bewertungen'>
						Bewertungen
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/kontakt'
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.unactiveLink
						}
						data-content='Kontakt'>
						Kontakt
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
