import { Outlet } from 'react-router-dom';
import { BtnThemeProvider } from '../../contexts/btnTheme.context';
import { ContactProvider } from '../../contexts/contact.context';
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';

function App() {
	return (
		<ContactProvider>
			<header>
				<Navbar />
			</header>
			<main>
				<BtnThemeProvider>
					<Outlet />
				</BtnThemeProvider>
			</main>
			<Footer />
		</ContactProvider>
	);
}

export default App;
