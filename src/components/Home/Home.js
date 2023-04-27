import React, { Fragment, useEffect } from 'react';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import InspoSection from '../InspoSection';
import RatingSection from '../RatingSection';
import ContactButton from '../ContactButton';
import ContactSection from '../ContactSection';
import CouponSection from '../CouponSection';

import { useBtnTheme } from '../../contexts/btnTheme.context';

// Gathers all Sections to display Homeview in <main> element
function Home({scrollTo}) {
	const { isLight } = useBtnTheme();
	
	useEffect(() => {
		let targetSection
		if (scrollTo) {
			targetSection = document.querySelector(`#${scrollTo}`)
			targetSection.scrollIntoView();
	  }
	
	  return () => {
		targetSection = null
	  }
	}, [scrollTo])
	

	return (
		<Fragment>
			<ContactButton isLight={isLight} />
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
