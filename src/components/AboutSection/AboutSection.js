import React from 'react';
import aboutImg from '../../assets/img-about.png';
import textureImg from '../../assets/texture-2.png';

import Button from '../Button'

import styles from './AboutSection.module.scss';

function AboutSection() {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.firstRow}>
				<div className={styles.firstRowLeft}>
                    <div className={styles.imgWrapper}>
                        <img src={aboutImg} alt='Waschtisch und Fliesen in Marmor' />
                        <img
                            src={textureImg}
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
					<Button text='Unsere Inspirationen'/>
				</div>
			</div>
			<div></div>
		</section>
	);
}

export default AboutSection;
