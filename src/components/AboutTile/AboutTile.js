import React from 'react';
import styles from './AboutTile.module.scss';

// Simple component to display cards/tiles for about section
function AboutTile({ icon, iconAlt, title, text }) {
	return (
		<div className={styles.aboutTile}>
			<div className={styles.imgWrap}>
				<div className={styles.imgBlur} />
				<img src={icon} alt={iconAlt} />
			</div>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.pTiles}>{text}</p>
		</div>
	);
}

export default AboutTile;
