import React from 'react';

import styles from './RatingSection.module.scss';

function RatingSection() {
	return (
		<section className={styles.ratingSection}>
			<h2>
				Was sagen <span className={styles.highlight}>unsere Kunden</span>
			</h2>
		</section>
	);
}

export default RatingSection;
