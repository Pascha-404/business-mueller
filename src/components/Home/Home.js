import React, { Fragment } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import InspoSection from '../InspoSection';
import RatingSection from '../RatingSection';
import ContactButton from '../ContactButton/ContactButton';
import ContactForm from '../ContactForm/ContactForm';

import { useContact } from '../../contexts/contact.context';

// Gathers all Sections to display Homeview in <main> element
function Home() {
	const contact = useContact();
	return (
		<Fragment>
			<ContactButton />
			{contact.formIsActive && <ContactForm />}
			<HeroSection />
			<AboutSection />
			<InspoSection />
			<RatingSection />
		</Fragment>
	);
}

export default Home;
