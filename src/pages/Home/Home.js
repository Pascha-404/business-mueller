import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
	HeroSection,
	AboutSection,
	InspoSection,
	RatingSection,
	ContactButton,
	ContactSection,
	CouponSection,
	SectionTransition,
} from '../../components';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	const location = useLocation();
	const transitioningSections = [
		AboutSection,
		InspoSection,
		CouponSection,
		RatingSection,
		ContactSection,
	];

	// If location.state has a value, scrolls to provided section
	useEffect(() => {
		let targetSection;
		if (location.state !== null) {
			targetSection = document.querySelector(`#${location.state.section}`);
			targetSection.scrollIntoView();
		}

		return () => {
			targetSection = null;
		};
	}, [location]);

	return (
		<Fragment>
			<ContactButton />
			<HeroSection />
			{transitioningSections.map((Section, idx) => {
				return (
					<SectionTransition key={idx}>
						<Section />
					</SectionTransition>
				);
			})}
		</Fragment>
	);
}

export default Home;
