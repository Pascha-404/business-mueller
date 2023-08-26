import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { cloudinaryUrls } from '../../assets';

import styles from './HeroSection.module.scss';

function HeroSection() {
	return (
		<section className={styles.heroSection} id='heroSection'>
			<div className={styles.heroLeft}>
				<div className={`${styles.imgWrapper} ${styles.showOnSmall}`}>
					<img src={cloudinaryUrls.imgHero.url} alt='Waschtisch mit goldener Armatur' />
					<img
						src={cloudinaryUrls.textureOne.url}
						alt='Weiße Steintextur'
						className={styles.underlayedImg}
					/>
				</div>

				<div className={styles.btnWrap}>
					<Button type='shaped' text='Badezimmer' />
					<Button type='shaped' text='Küche' />
					<Button type='shaped' text='Pool' />
				</div>

				<h1>
					Einfach eine völlig <span className={styles.highlight}>neue Erfahrung</span>
				</h1>

				<h2 className={styles.h2}>Fliesen und andere Reparaturarbeiten</h2>

				<div className={styles.hideOnSmall}>
					<Link to='/' state={{ section: 'aboutSection' }}>
						<Button text='Mehr über uns' />
					</Link>

					<h2 className={styles.heroLocation}>
						Wir sind ein Fliesenfachbetrieb aus Berlin Reinickendorf
					</h2>
				</div>
			</div>

			<div className={styles.heroRight}>
				<div className={`${styles.imgWrapper} ${styles.hideOnSmall}`}>
					<img src={cloudinaryUrls.imgHero.url} alt='Waschtisch mit goldener Armatur' />

					<img
						src={cloudinaryUrls.textureOne.url}
						alt='Weiße Steintextur'
						className={styles.underlayedImg}
					/>
				</div>

				<div className={styles.heroDetails}>
					<div className={styles.detailsItem}>
						<div className={styles.logoContainer}>
							<img src={cloudinaryUrls.iconCompass.url} alt='Kompass' />
						</div>
						<p className={styles.heroDetailsP}>
							Egal woher Sie aus Berlin oder Brandenburg kommen
						</p>
					</div>

					<div className={styles.detailsItem}>
						<div className={styles.logoContainer}>
							<img src={cloudinaryUrls.iconPhone.url} alt='Telefon' />
						</div>

						<p className={styles.heroDetailsP}>
							Rufen Sie uns an:{' '}
							<a href='tel:+493051637522' className={styles.phoneNumber}>
								030 5163 7522
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
