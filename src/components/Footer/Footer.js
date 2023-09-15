import React, { useState } from 'react';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { InView } from 'react-intersection-observer';

function Footer() {
	const [showTopBtn, setShowTopBtn] = useState(false);
	const handleScrollTop = () => {
		window.scrollTo({ top: 0 });
	};

	function handleChange(inView) {
		setShowTopBtn(inView);
	}

	return (
		<InView
			as='footer'
			className={styles.footer}
			id='footer'
			threshold={0.9}
			onChange={handleChange}>
			<div className={styles.contactDetails}>
				<div className={styles.address}>
					<h4>Müller Baufachbetrieb</h4>
					<div>
						<h5>Jörg Müller</h5>
						<h5>Schillingstraße 1</h5>
						<h5>13403 Berlin</h5>
						<h5>Deutschland</h5>
					</div>
				</div>
				<div>
					<h4>Kontakt</h4>
					<h5>
						<a href='tel:+491776286037'>0177 628 60 37</a>
					</h5>
					<h5 className={styles.mail}>
						<a href='mailto:J.Mueller@fliesenleger-mueller.de'>J.Mueller@fliesenleger-mueller.de</a>
					</h5>
					<div
						className={`${styles.scrollTopBtnWrap} ${showTopBtn ? styles.active : ''}`}
						onClick={handleScrollTop}>
						<Button text='Zum Seitenanfang' />
					</div>
				</div>
			</div>
			<div className={styles.links}>
				<div>
					<Link to='/datenschutz'>Datenschutz</Link>
				</div>
				<div>
					<Link to='/impressum'>Impressum</Link>
				</div>
			</div>
		</InView>
	);
}

export default Footer;
