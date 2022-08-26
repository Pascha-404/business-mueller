import { Outlet } from 'react-router-dom';
import { ContactProvider } from '../../contexts/contact.context';

import Navbar from '../Navbar/Navbar';

function App() {
	return (
		<ContactProvider>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
		</ContactProvider>
	);
}

export default App;
