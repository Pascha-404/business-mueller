import React, { createContext, useContext } from 'react';
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
	return (
		<BtnThemeContext.Provider value={{isLight, setIsLight}}>
			{children}
		</BtnThemeContext.Provider>
	);
}

export { BtnThemeProvider, useBtnTheme };
