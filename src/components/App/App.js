import { Outlet } from 'react-router-dom';
import { BtnThemeProvider } from '../../contexts/btnTheme.context';
import { ContactProvider } from '../../contexts/contact.context';


import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CookieBanner from '../CookieBanner/CookieBanner';

function App() {
	return (
		<ContactProvider>
			<header>
				<Navbar />
			</header>
			<main>
				<CookieBanner />
				<BtnThemeProvider>
					<Outlet />
				</BtnThemeProvider>
			</main>
			<Footer />
		</ContactProvider>
	);
}

export default App;
