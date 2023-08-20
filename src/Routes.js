import React, { createRef } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './components/App';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

// Array of route objects for the different pages of the application
const routes = [
	{ path: '/', element: <Home />, nodeRef: createRef() },
	{ path: '/impressum', element: <Impressum />, nodeRef: createRef() },
	{
		path: '/datenschutz',

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
