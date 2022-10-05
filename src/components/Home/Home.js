import React, { Fragment } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import InspoSection from '../InspoSection';
import RatingSection from '../RatingSection';
import ContactButton from '../ContactButton';
import ContactSection from '../ContactSection';
import CouponSection from '../CouponSection';

// Gathers all Sections to display Homeview in <main> element
function Home() {
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
