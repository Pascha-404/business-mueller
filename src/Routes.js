import React, { createRef } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './components/App';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

// Routing displays by default Home component
// function Routing() {
// 	return (
// 		<Routes>
// 			<Route path='/' element={<App />}>
// 				<Route index element={<Home />} />
// 				<Route path='about' element={<Home scrollTo={'aboutSection'} />} />
// 				<Route path='inspirationen' element={<Home scrollTo={'inspoSection'} />} />
// 				<Route path='neukunde' element={<Home scrollTo={'couponSection'} />} />
// 				<Route path='bewertungen' element={<Home scrollTo={'ratingSection'} />} />
// 				<Route path='kontakt' element={<Home scrollTo={'contactSection'} />} />
// 				<Route path='impressum' element={<Impressum />} />
// 				<Route path='datenschutz' element={<Datenschutz />} />
// 			</Route>
// 		</Routes>
// 	);
// }

const routes = [
	{ path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
	{ path: '/impressum', name: 'Impressum', element: <Impressum />, nodeRef: createRef() },
	{
		path: '/datenschutz',
		name: 'Datenschutz',
		element: <Datenschutz />,
		nodeRef: createRef(),
	},
];

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: routes.map(route => ({
			index: route.path === '/',
			path: route.path === '/' ? undefined : route.path,
			element: route.element,
		})),
	},
]);

export { routes, router };
