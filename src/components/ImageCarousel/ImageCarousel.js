import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './ImageCarousel.scss';

function ImageCarousel({ images }) {
	const windowWidth = window.innerWidth;

	return (
		<Swiper
			modules={[Navigation, A11y, Pagination]}
			spaceBetween={windowWidth < 870 ? -50 : windowWidth < 1200 ? -150 : -20}
			slidesPerView={windowWidth < 1200 ? 2 : 3}
			navigation
			loop
			pagination={{ clickable: true }}
			centeredSlides
			speed={300}
			className='imageCarousel'>
			{images.map(image => (
				<SwiperSlide key={`slide-${image.id}`}>
					<img src={image.src} alt={image.alt} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default ImageCarousel;
