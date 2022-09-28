import React from 'react';
import {
	imgAbout,
	textureTwo,
	iconTile,
	iconQuestionMark,
	iconClipboard,
	iconHouse,
	iconDiamond,
	iconLightbulb,
} from '../../assets';

import AboutTile from '../AboutTile';
import Button from '../Button';

import styles from './AboutSection.module.scss';

// Data array for the tiles in about section.
const tiles = [
	{
		icon: iconTile,
		iconAlt: 'Vier kleine Fliesen',
		title: 'Fliesen',
		text: 'Hochwertige Natursteinverarbeitung im Dickbettverfahren.',
	},
	{
		icon: iconQuestionMark,
		iconAlt: 'Fragezeichen',
		title: 'Vorort Beratung',
		text: 'Wir stellen Ihre Wünsche gemeinsam zusammen.',
	},
	{
		icon: iconClipboard,
		iconAlt: 'Klemmbrett',
		title: 'Badgestaltung',
		text: 'Planung mittels moderner 3D Software.',
	},
	{
		icon: iconHouse,
		iconAlt: 'Haus Symbol',
		title: 'Innenausbau',
		text: 'Ausstattung von Küchen bis zu Treppenhäusern.',
	},
	{
		icon: iconDiamond,
		iconAlt: 'Diamant',
		title: 'Millimeterarbeit',
		text: 'Passgenaue Anfertigung auch für schwierige Stellen',
	},
	{
		icon: iconLightbulb,
		iconAlt: 'Glühbirne',
		title: 'Innovativ',
		text: 'Neueste Technologien, scharfe Mosaike. Wir erfüllen jeden Wunsch.',
	},
];

// Component for displaying the aboutSection.
// Adds AboutTile component based on tiles data array.
function AboutSection() {
	return (
		<section className={styles.aboutSection} id='aboutSection'>
			<div className={styles.firstRow}>
				<div className={styles.firstRowLeft}>
					<div className={styles.imgWrapper}>
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
						Wir spezalisieren uns auf Trockenbau und Fliesen nicht nur in Ihrem Bad als
						auch Küchen, Pools und weiteren Räumlichkeiten.
					</p>
					<p>
						Um Ihre induviduellen Gestaltungswünsche wird sich in unseren Unternehmen
						gerne gekümmert.
					</p>
					<p>
						Unser hilfbereites und freundliches Team steht Ihnen gernen für Fachberatungen
						und Rüchsprachen zur Verfügung. Schreiben oder Rufen Sie uns an. Wir freuen
						uns auf Ihre Projektideen.
					</p>
					<Button text='Unsere Inspirationen' />
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
		</section>
	);
}

export default AboutSection;
