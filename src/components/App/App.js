import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

function App() {
	return (
		<Fragment>
			<header><Navbar /></header>
			<main>
				<Outlet />
			</main>
		</Fragment>
	);
}

export default App;
