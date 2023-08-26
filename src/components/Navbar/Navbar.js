import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { cloudinaryUrls } from '../../assets';
import styles from './Navbar.module.scss';

function Navbar() {
	const location = useLocation();
	const isHome = location.pathname === '/';

	return (
		<nav className={styles.navbar}>
			<Link to='/'>
				<img src={cloudinaryUrls.logoMueller.url} alt='Fliesenfachbetrieb Müller Logo' />
			</Link>

			<ul>
				<li>
					<Link
						to='/'
						className={isHome === true ? styles.isHome : styles.hoverAnimation}
						data-content='Home'>
						Home
					</Link>
				</li>

				<li>
					<Link
						to='/'
						state={{ section: 'aboutSection' }}
						data-content='Warum Uns'
						className={styles.hoverAnimation}>
						Warum Uns
					</Link>
				</li>

				<li>
					<Link
						to='/'
						state={{ section: 'inspoSection' }}
						data-content='Inspirationen'
						className={styles.hoverAnimation}>
						Inspirationen
					</Link>
				</li>

				<li>
					<Link
						to='/'
						state={{ section: 'ratingSection' }}
						data-content='Bewertungen'
						className={styles.hoverAnimation}>
						Bewertungen
					</Link>
				</li>

				<li>
					<Link
						to='/'
						state={{ section: 'contactSection' }}
						data-content='Kontakt'
						className={styles.hoverAnimation}>
						Kontakt
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
