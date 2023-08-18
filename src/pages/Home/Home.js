import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import InspoSection from '../../components/InspoSection';
import RatingSection from '../../components/RatingSection';
import ContactButton from '../../components/ContactButton';
import ContactSection from '../../components/ContactSection';
import CouponSection from '../../components/CouponSection';

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
