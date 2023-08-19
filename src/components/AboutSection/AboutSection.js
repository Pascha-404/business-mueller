import React from 'react';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

import tiles from './tiles';
import { imgAbout, textureTwo } from '../../assets';

import { useBtnTheme } from '../../contexts/btnTheme.context';

import AboutTile from '../AboutTile';
import Button from '../Button';

import styles from './AboutSection.module.scss';

// Component for displaying the aboutSection.
// Adds AboutTile component based on tiles data array.
function AboutSection() {
	const { sectionsInView, setSectionsInView } = useBtnTheme();

	// Function triggers if component is in view
	// If value is not equal to context value of section, changes it
	function handleOberserverChange(inView, entry) {
		if (sectionsInView.aboutVisible !== inView) {
			setSectionsInView({
				...sectionsInView,
				aboutVisible: !sectionsInView.aboutVisible,
			});
		}
	}

	return (
		<InView
			as='section'
			className={styles.aboutSection}
			id='aboutSection'
			rootMargin={'-100% 0px 0px 0px'}
			onChange={handleOberserverChange}>
			<div className={styles.firstRow}>
				<div className={styles.firstRowLeft}>
					<div className={`${styles.imgWrapper} ${styles.hideOnSmall}`}>
						<img src={imgAbout} alt='Waschtisch und Fliesen in Marmor' />
						<img
							src={textureTwo}
							alt='Weiße Steintextur'
							className={styles.underlayedImg}
						/>
					</div>
				</div>
				<div className={styles.firstRowRight}>
					<h2>
						Planlos geht der <span className={styles.highlight}>Plan los!</span>
					</h2>
					<p>
						Wir haben uns auf Trockenbau und Fliesen spezialisiert und bieten unsere
						Dienstleistungen nicht nur für Badezimmer, sondern auch für Küchen, Pools und
						andere Räumlichkeiten an.
					</p>
					<p>
						Bei uns im Unternehmen kümmern wir uns gerne um Ihre individuellen
						Gestaltungswünsche.
					</p>
					<p>
						Unser hilfsbereites und freundliches Team steht Ihnen gerne für Fachberatungen
						und Rückfragen zur Verfügung. Schreiben Sie uns eine E-Mail oder rufen Sie uns
						an. Wir freuen uns darauf, Ihre Projektideen zu besprechen.
					</p>
					<Link to='/' state={{ section: 'inspoSection' }}>
						<Button text='Unsere Inspirationen' />
					</Link>
				</div>
			</div>
			<div className={styles.secondRow}>
				{tiles.map((tile, idx) => (
					<AboutTile
						key={`tile-${idx}`}
						icon={tile.icon}
						iconAlt={tile.iconAlt}
						title={tile.title}
						text={tile.text}
					/>
				))}
			</div>
		</InView>
	);
}

export default AboutSection;
