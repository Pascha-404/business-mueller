import React, { useEffect } from 'react';
import { cloudinaryUrls } from '../../assets';

import styles from './NotFound.module.scss';

function NotFound() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<section className={styles.impressum}>
			<img src={cloudinaryUrls.img404.url} alt="Fehlerbild mit Nachricht 404: nicht gefunden" />
		</section>
	);
}

export default NotFound;
