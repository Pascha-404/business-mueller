import React from 'react';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

import { useBtnTheme } from '../../contexts/btnTheme.context';
import { cloudinaryUrls } from '../../assets';
import Button from '../Button';

import styles from './CouponSection.module.scss';

function CouponSection() {
	const { sectionsInView, setSectionsInView } = useBtnTheme();

	// Function triggers if component is in view
	// If value is not equal to context value of section, changes it
	function handleOberserverChange(inView, entry) {
		if (sectionsInView.couponVisible !== inView) {
			setSectionsInView({
				...sectionsInView,
				couponVisible: !sectionsInView.couponVisible,
			});
		}
	}

	return (
		<InView
			as='section'
			className={styles.couponSection}
			id='couponSection'
			rootMargin={'-100% 0px 0px 0px'}
			onChange={handleOberserverChange}>
			<img
				loading='lazy'
				src={cloudinaryUrls.bgService}
				className={styles.bgImage}
				alt='Edles Bad in hellen Tönen'
			/>

			<h2 className='h1'>Wir freuen uns darauf Sie kennenzulernen!</h2>

			<p>
				Neukunden bekommen <span className={'couponHighlight'}>5% Rabatt</span> auf alle
				Leistungen
			</p>

			<Link to='/' state={{ section: 'contactSection' }} className={styles.hideOnSmall}>
				<Button text={'Angebot einholen'} />
			</Link>
		</InView>
	);
}

export default CouponSection;
