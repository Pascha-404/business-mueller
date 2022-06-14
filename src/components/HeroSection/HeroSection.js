import React from 'react';
import Button from '../Button';
import styles from './HeroSection.module.scss';
import HeroImg from '../../assets/img-hero.png';
import TextureImg from '../../assets/texture-1.png';

function HeroSection() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroLeft}>
				<div className={styles.btnWrap}>
					<Button type='shaped' text='Badezimmer' />
					<Button type='shaped' text='Küche' />
					<Button type='shaped' text='Pool' />
				</div>
				<h1>
					Einfach eine völlig <span className={styles.highlight}>neue Erfahrung</span>
				</h1>
				<h2 className={styles.h2}>Fliesen und andere Reparaturarbeiten</h2>
				<Button text='Mehr über uns' />
				<h2>Wir sind ein Fliesenfachbetrieb aus Berlin Reinickendorf</h2>
			</div>
			<div className={styles.heroRight}>
				<div className={styles.imgWrapper}>
					<img src={HeroImg} alt='Waschtisch mit goldener Armatur' />
					<img
						src={TextureImg}
						alt='Weiße Steintextur'
						className={styles.underlayedImg}
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
