import React, { useEffect } from 'react';
import { cloudinaryUrls } from '../../assets';

import styles from './404.module.scss';

function Impressum() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<section className={styles.impressum}>
			<img src={cloudinaryUrls.img404.url} alt="Fehlerbild mit Nachricht 404: nicht gefunden" />
		</section>
	);
}

export default Impressum;
