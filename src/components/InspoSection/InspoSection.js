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
				Sie brauchen noch die nötige Insipiration? Hier ein paar Ideen, wir sind bereit für jedes Projekt.
			</p>
			<DataCarousel data={images} />
		</section>
	);
}

export default InspoSection;
