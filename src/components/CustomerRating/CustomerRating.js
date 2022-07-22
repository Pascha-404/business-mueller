import React from 'react';

import styles from './CustomerRating.module.scss';

function CustomerRating({ review, customerName, customerInfo }) {
	return (
		<article className={styles.customerRating}>
			<p>{review}</p>
			<p>{customerName}</p>
			<p>{customerInfo}</p>
		</article>
	);
}

export default CustomerRating;
