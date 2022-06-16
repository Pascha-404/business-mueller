import React from 'react';
import styles from './AboutTile.module.scss';

import logo from '../../assets/icon-phone.png'

function AboutTile() {
	return (
		<div className={styles.aboutTile}>
			<img src={logo} alt='' />
			<h3>Title</h3>
			<p>Lorem. Voluptates. Maxime? Repellat.</p>
		</div>
	);
}

export default AboutTile;
