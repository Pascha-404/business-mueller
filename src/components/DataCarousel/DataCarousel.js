import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

import CustomerRating from '../CustomerRating/CustomerRating';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './DataCarousel.scss';

function DataCarousel({ data, type = 'img' }) {
	const windowWidth = window.innerWidth;

	function generateDataDisplay() {
		if (type === 'img') {
			return data.map(image => (
				<SwiperSlide key={`imgSlide-${image.id}`}>
					<img loading='lazy' src={image.src} alt={image.alt} />
				</SwiperSlide>
			));
		} else if (type === 'rating') {
			return data.map((rating, idx) => (
				<SwiperSlide key={`ratingSlide-${idx}`}>
					<CustomerRating
						key={`customerRating-${idx}`}
						titel={rating.titel}
						rating={rating.rating}
						review={rating.review}
						customerName={rating.customerName}
						customerInfo={rating.customerInfo}
					/>
				</SwiperSlide>
			));
		}
	}

	return (
		<Swiper
			modules={[Navigation, A11y, Pagination]}
			spaceBetween={windowWidth > 525 ? 60 : 0}
			slidesPerView={windowWidth > 525 ? 2 : 1}
			navigation={type === 'img' && true}
			loop
			pagination={{ clickable: true }}
			centeredSlides
			speed={300}
			className={`DataCarousel ${type === 'rating' && 'rating'}`}>
			{generateDataDisplay()}
		</Swiper>
	);
}

export default DataCarousel;
