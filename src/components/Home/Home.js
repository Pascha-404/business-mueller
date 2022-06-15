import React, { Fragment } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	return (
		<Fragment>
			<HeroSection />
			<AboutSection />
		</Fragment>
	);
}

export default Home;
