import React from 'react';
import CustomerRating from '../CustomerRating/CustomerRating';

import ratings from './ratings';

import styles from './RatingSection.module.scss';

function RatingSection() {
	return (
		<section className={styles.ratingSection} id='ratingSection'>
			<h2>
				Was sagen <span className={styles.highlight}>unsere Kunden</span>
			</h2>
			<div className={styles.ratingsWrap}>
				{ratings.map((rating, idx) => (
					<CustomerRating
						key={`customerRating-${idx}`}
						titel={rating.titel}
						rating={rating.rating}
						review={rating.review}
						customerName={rating.customerName}
						customerInfo={rating.customerInfo}
					/>
				))}
			</div>
		</section>
	);
}

export default RatingSection;
