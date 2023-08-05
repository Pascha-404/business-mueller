import React from 'react';

import styles from './Impressum.module.scss';

function Impressum() {
	return (
		<section className={styles.impressum}>
			<h1>Impressum</h1>
			<div className={styles.dataBlock}>
				<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
				<p>
					J&ouml;rg M&uuml;ller
					<br />
					Fliesenleger M&uuml;ller
					<br />
					Alt-Wittenau 67a
					<br />
					13437 Berlin
				</p>
			</div>
			<div className={styles.dataBlock}>
				<h2>Kontakt</h2>
				<p>
					<a href='mailto:mail@fliesenleger-mueller.de'>
						E-Mail: mail@fliesenleger-mueller.de
					</a>
				</p>
				<p>
					<a href='tel:03051637522'>Telefon: 030 5163 7522</a>
				</p>
			</div>
			<div className={styles.dataBlock}>
				<h2>Umsatzsteuer-ID</h2>
				<p>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
					Umsatzsteuergesetz:
					<br />
					asdadf
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
