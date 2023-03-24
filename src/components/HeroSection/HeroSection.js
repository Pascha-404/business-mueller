import React from 'react';

import Button from '../Button';

import heroImg from '../../assets/img-hero.png';
import textureImg from '../../assets/texture-1.png';
import compassLogo from '../../assets/icon-compass.svg';
import phoneLogo from '../../assets/icon-phone.png';

import styles from './HeroSection.module.scss';

function HeroSection() {
	return (
		<section className={styles.heroSection} id='heroSection'>
			<div className={styles.heroLeft}>
				<div className={`${styles.imgWrapper} ${styles.showOnSmall}`}>
					<img src={heroImg} alt='Waschtisch mit goldener Armatur' />
					<img
						src={textureImg}
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
					<Button text='Mehr über uns' />
					<h2 className={styles.heroLocation}>
						Wir sind ein Fliesenfachbetrieb aus Berlin Reinickendorf
					</h2>
				</div>
			</div>

			<div className={styles.heroRight}>
				<div className={`${styles.imgWrapper} ${styles.hideOnSmall}`}>
					<img src={heroImg} alt='Waschtisch mit goldener Armatur' />

					<img
						src={textureImg}
						alt='Weiße Steintextur'
						className={styles.underlayedImg}
					/>
				</div>

				<div className={styles.heroDetails}>
					<div className={styles.detailsItem}>
						<div className={styles.logoContainer}>
							<img src={compassLogo} alt='Compass' />
						</div>
						<p className={styles.heroDetailsP}>Egal woher Sie aus Berlin oder Brandenburg kommen</p>
					</div>

					<div className={styles.detailsItem}>
						<div className={styles.logoContainer}>
							<img src={phoneLogo} alt='Phone' />
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
