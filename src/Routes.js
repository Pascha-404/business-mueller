import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

function Routing() {
	return (
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default Routing;
