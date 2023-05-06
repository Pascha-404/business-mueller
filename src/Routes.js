import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

// Routing displays by default Home component
function Routing() {
	return (
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Home />} />
				<Route path='about' element={<Home scrollTo={'aboutSection'} />} />
				<Route path='inspirationen' element={<Home scrollTo={'inspoSection'}/>} />
				<Route path='neukunde' element={<Home scrollTo={'couponSection'} />} />
				<Route path='bewertungen' element={<Home scrollTo={'ratingSection'} />} />
				<Route path='kontakt' element={<Home scrollTo={'contactSection'} />} />
			</Route>
		</Routes>
	);
}

export default Routing;
