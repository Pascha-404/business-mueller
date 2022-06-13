import React from 'react';
import Button from '../Button';
import styles from './HeroSection.module.scss';
import HeroImg from '../../assets/img-hero.png'

function HeroSection() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroLeft}>
				<div>
					<Button type='shaped' text='Badezimmer' />
					<Button type='shaped' text='Küche' />
					<Button type='shaped' text='Pool' />
				</div>
				<h1>
					Einfach eine völlig <span className={styles.highlight}>neue Erfahrung</span>
                </h1>
                <Button text='Mehr über uns' />
                <h2>Wir sind ein Fliesenfachbetrieb aus Berlin Reinickendorf</h2>
			</div>
			<div className={styles.heroRight}><div><img src={HeroImg} alt="Waschtisch mit goldener Armatur" /></div></div>
		</section>
	);
}

export default HeroSection;
