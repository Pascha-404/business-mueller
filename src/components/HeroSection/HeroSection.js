import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

import Button from '../Button';

import { iconCompass, iconPhone, textureOne, imgHero } from '../../assets';

import styles from './HeroSection.module.scss';

function HeroSection() {
	const navigate = useNavigate();
	
	return (
		<InView
			as='section'
			className={styles.heroSection}
			id='heroSection'
			rootMargin={'-100% 0px 0px 0px'}
			onChange={() => {
				if (window.scrollY <= 15) {
					navigate('/', { replace: true });
				}
			}}>
			<div className={styles.heroLeft}>
				<div className={`${styles.imgWrapper} ${styles.showOnSmall}`}>
					<img src={imgHero} alt='Waschtisch mit goldener Armatur' />
					<img
						src={textureOne}
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
					<NavLink to='/about'>
						<Button text='Mehr über uns' />
					</NavLink>

					<h2 className={styles.heroLocation}>
						Wir sind ein Fliesenfachbetrieb aus Berlin Reinickendorf
					</h2>
				</div>
			</div>

			<div className={styles.heroRight}>
				<div className={`${styles.imgWrapper} ${styles.hideOnSmall}`}>
					<img src={imgHero} alt='Waschtisch mit goldener Armatur' />

					<img
						src={textureOne}
						alt='Weiße Steintextur'
						className={styles.underlayedImg}
					/>
				</div>

				<div className={styles.heroDetails}>
					<div className={styles.detailsItem}>
						<div className={styles.logoContainer}>
							<img src={iconCompass} alt='Compass' />
						</div>
						<p className={styles.heroDetailsP}>
							Egal woher Sie aus Berlin oder Brandenburg kommen
						</p>
					</div>

					<div className={styles.detailsItem}>
						<div className={styles.logoContainer}>
							<img src={iconPhone} alt='Phone' />
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
		</InView>
	);
}

export default HeroSection;
