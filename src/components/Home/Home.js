import React, { Fragment, useState } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import InspoSection from '../InspoSection';
import RatingSection from '../RatingSection';
import ContactButton from '../ContactButton/ContactButton';

import { ContactProvider } from '../../contexts/contact.context';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	return (
		<ContactProvider>
			<ContactButton />
			<HeroSection />
			<AboutSection />
			<InspoSection />
			<RatingSection />
		</ContactProvider>
	);
}

export default Home;
