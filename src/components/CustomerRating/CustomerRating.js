import React from 'react';

import { iconStar, cloudinaryUrls } from '../../assets';

import styles from './CustomerRating.module.scss';

function CustomerRating({ titel, rating, review, customerName, customerInfo }) {
	return (
		<article className={styles.customerRating}>
			<div>
				<h3>{titel}</h3>
				<div className={styles.ratingWrapper}>
					{[...Array(rating)].map((e, i) => (
						<img src={cloudinaryUrls.iconStar} key={i} alt='Stern' />
					))}
				</div>
			</div>
			<p className={styles.review}>{review}</p>
			<div className={styles.customerDetails}>
				<p className={styles.customerName}>{customerName}</p>
				<p className={styles.customerInfo}>{customerInfo}</p>
			</div>
		</article>
	);
}

export default CustomerRating;
