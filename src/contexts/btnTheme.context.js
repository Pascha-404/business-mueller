import React, { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BtnThemeContext = createContext();

function useBtnTheme() {
	const context = useContext(BtnThemeContext);
	if (context === undefined) {
		throw new Error('useBtnTheme must be used within a BtnThemeProvider');
	}
	return context;
}

function BtnThemeProvider({ children }) {
	const [isLight, setIsLight] = useState(false);
	const [sectionsInView, setSectionsInView] = useState({
		aboutVisible: false,
		couponVisible: false,
		contactVisible: false,
	});

	useEffect(() => {
		const filteredSections = Object.entries(sectionsInView).filter(
			([key, value]) => value === true
		);
		if (filteredSections.length > 0) {
			setIsLight(false);
		} else if (filteredSections.length <= 0) {
			setIsLight(true);
		}
	}, [sectionsInView]);

	return (
		<BtnThemeContext.Provider value={{ isLight, sectionsInView, setSectionsInView }}>
			{children}
		</BtnThemeContext.Provider>
	);
}

export { BtnThemeProvider, useBtnTheme };
