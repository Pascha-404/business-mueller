import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './ImageCarousel.scss';

function ImageCarousel({ images }) {
	return (
		<Swiper
			modules={[Navigation, A11y, Pagination]}
			spaceBetween={-20}
			slidesPerView={3}
			navigation
			loop
			pagination={{clickable: true}}
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
