import { useOutlet } from 'react-router-dom';
import { BtnThemeProvider } from '../../contexts/btnTheme.context';
import { ContactProvider } from '../../contexts/contact.context';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CookieBanner from '../CookieBanner/CookieBanner';
import PageTransition from '../PageTransition';

function App() {
	const currentOutlet = useOutlet();

	return (
		<ContactProvider>
			<header>
				<Navbar />
			</header>
			<main>
				<CookieBanner />
				<BtnThemeProvider>
					<PageTransition>{currentOutlet}</PageTransition>
				</BtnThemeProvider>
			</main>
			<Footer />
		</ContactProvider>
	);
}

export default App;
