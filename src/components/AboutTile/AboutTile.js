import React from 'react';
import styles from './AboutTile.module.scss';

function AboutTile({ icon, iconAlt, title, text }) {
	return (
		<div className={styles.aboutTile}>
			<div className={styles.imgWrap}>
				<div className={styles.imgBlur} />
				<img src={icon} alt={iconAlt} />
			</div>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
}

export default AboutTile;
