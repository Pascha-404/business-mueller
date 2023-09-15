import React, { useEffect } from 'react';

import styles from './Impressum.module.scss';

function Impressum() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<section className={styles.impressum}>
			<h1>Impressum</h1>
			<div className={styles.dataBlock}>
				<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
				<p>
					J&ouml;rg M&uuml;ller
					<br />
					Baufachbetrieb M&uuml;ller
					<br />
					Schillingstraße 1
					<br />
					13403 Berlin
				</p>
			</div>
			<div className={styles.dataBlock}>
				<h2>Kontakt</h2>
				<p>
					<a href='mailto:J.Mueller@fliesenleger-mueller.de'>
						E-Mail: J.Mueller@fliesenleger-mueller.de
					</a>
				</p>
				<p>
					<a href='tel:+491776286037'>Telefon: 0177 628 60 37</a>
				</p>
			</div>
			<div className={styles.dataBlock}>
				<h2>Umsatzsteuer-ID</h2>
				<p>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
					Umsatzsteuergesetz:
					<br />
					Folgt in Kürze
				</p>
			</div>
			<div className={styles.dataBlock}>
				<h2>
					Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
				</h2>
				<p>
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>
			<p>
				Quelle:{' '}
				<a href='https://www.e-recht24.de/impressum-generator.html'>
					https://www.e-recht24.de/impressum-generator.html
				</a>
			</p>
		</section>
	);
}

export default Impressum;
