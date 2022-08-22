import React from 'react';

import styles from './CustomerRating.module.scss';

function CustomerRating({ review, customerName, customerInfo }) {
	return (
		<article className={styles.customerRating}>
			<p className={styles.review}>{review}</p>
			<div className={styles.customerDetails}>
                <p className={styles.customerName}>{customerName}</p>
                <p className={styles.customerInfo}>{customerInfo}</p>
            </div>
		</article>
	);
}

export default CustomerRating;
