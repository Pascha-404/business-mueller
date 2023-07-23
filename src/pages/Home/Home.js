import React, { Fragment, useEffect } from 'react';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import InspoSection from '../../components/InspoSection';
import RatingSection from '../../components/RatingSection';
import ContactButton from '../../components/ContactButton';
import ContactSection from '../../components/ContactSection';
import CouponSection from '../../components/CouponSection';

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
