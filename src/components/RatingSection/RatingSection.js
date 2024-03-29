import React from 'react';
import CustomerRating from '../CustomerRating/CustomerRating';

import ratings from './ratings';

import styles from './RatingSection.module.scss';
import DataCarousel from '../DataCarousel';

function RatingSection() {
	const windowWidth = window.innerWidth;

	return (
		<section className={styles.ratingSection} id='ratingSection'>
			<h2>
				Was sagen <span className={styles.highlight}>unsere Kunden</span>
			</h2>
			<div className={styles.ratingsWrap}>
				{windowWidth >= 576 &&
					ratings.map((rating, idx) => (
						<CustomerRating
							key={`customerRating-${idx}`}
							titel={rating.titel}
							rating={rating.rating}
							review={rating.review}
							customerName={rating.customerName}
							customerInfo={rating.customerInfo}
						/>
					))}
				
				{windowWidth < 576 && <DataCarousel type='rating' data={ratings} />}
			</div>
		</section>
	);
}

export default RatingSection;
