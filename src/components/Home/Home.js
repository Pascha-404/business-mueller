import React, { Fragment, useState } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import InspoSection from '../InspoSection';
import RatingSection from '../RatingSection';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	return (
		<Fragment>
			<HeroSection />
			<AboutSection />
			<InspoSection />
			<RatingSection />
		</Fragment>
	);
}

export default Home;
