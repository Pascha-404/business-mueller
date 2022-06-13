import { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection';

function App() {
	return (
		<Fragment>
			<header><Navbar /></header>
			<main>
				<HeroSection />
			</main>
		</Fragment>
	);
}

export default App;
