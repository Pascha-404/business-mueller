import React from 'react';

import images from './images';
import DataCarousel from '../DataCarousel';

import styles from './InspoSection.module.scss';

function InspoSection() {
	return (
		<section className={styles.inspoSection} id='inspoSection'>
			<h2>
				Unsere <span className={styles.highlight}>Inspirationen</span> für Sie
			</h2>
			<p>
				Wir sind bereit für jedes Projekt, und wenn Sie wissen nicht, was zu bauen, wir
				...
			</p>
			<DataCarousel data={images} />
		</section>
	);
}

export default InspoSection;
