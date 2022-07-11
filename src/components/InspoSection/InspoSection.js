import React from 'react';

import images from './images';
import ImageCarousel from '../ImageCarousel';

import styles from './InspoSection.module.scss';

function InspoSection() {
	return (
		<section className={styles.inspoSection}>
			<h2>
				Unsere <span className={styles.highlight}>Inspirationen</span> für Sie
			</h2>
			<p>
				Wir sind bereit für jedes Projekt, und wenn Sie wissen nicht, was zu bauen, wir
				...
			</p>
			<ImageCarousel images={images}/>
		</section>
	);
}

export default InspoSection;
