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
} from '../../components';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	const location = useLocation();

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
			<AboutSection />
			<InspoSection />
			<CouponSection />
			<RatingSection />
			<ContactSection />
		</Fragment>
	);
}

export default Home;
