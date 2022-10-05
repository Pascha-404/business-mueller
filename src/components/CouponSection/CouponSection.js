import React from 'react';

import Button from '../Button';

import styles from './CouponSection.module.scss';

function CouponSection() {
	return (
		<section className={styles.couponSection}>
			<div className={styles.bgImage} />
			<h2 className='h1'>Wir freuen uns darauf Sie kennenzulernen!</h2>
			<p>
				Neukunden bekommen <span className={'couponHighlight'}>5% Rabatt</span> auf alle
				Leistungen
			</p>
			<a href='#contactSection'>
				<Button text={'Angebot einholen'} />
			</a>
		</section>
	);
}

export default CouponSection;
