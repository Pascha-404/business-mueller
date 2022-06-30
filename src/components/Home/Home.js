import React, { Fragment } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import InspoSection from '../InspoSection';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	return (
		<Fragment>
			<HeroSection />
			<AboutSection />
			<InspoSection />
		</Fragment>
	);
}

export default Home;
