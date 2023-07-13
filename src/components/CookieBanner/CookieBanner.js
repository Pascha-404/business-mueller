import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';

function CookieBanner() {
	const [showBanner, setShowBanner] = useState(false);
	const [cookies, setCookie] = useCookies(['fliesenmueller_cookieConsent']);

	useEffect(() => {
		const hasConsent = cookies.fliesenmueller_cookieConsent === 'accepted';
		const hasNoCookies = Object.keys(cookies).length === 0;
		setShowBanner(!hasConsent && !hasNoCookies);
	}, [cookies]);

	if (!showBanner) {
		return null;
	} else
		return (
			<CookieConsent
				location='bottom'
				buttonText='Einverstanden'
				declineButtonText='Nur notwendige'
				enableDeclineButton='true'
				style={{ background: '#2B373B' }}
				buttonStyle={{ color: '#4e503b', fontSize: '13px' }}>
				<p>
					Wir verwenden Cookies, um Ihnen eine optimierte Erfahrung auf unserer Website zu
					ermöglichen. Durch die Nutzung unserer Website stimmen Sie der Verwendung von
					Cookies zu. Diese Cookies dienen dazu, Ihre Präferenzen zu speichern, die
					Website-Funktionalität zu verbessern und statistische Daten über die Nutzung zu
					erfassen.
				</p>
				<p>
					Wenn Sie die Verwendung von Cookies einschränken möchten, können Sie nur technisch notwendige zulassen. Bitte beachten Sie jedoch, dass dies
					Auswirkungen auf die Funktionalität und das Nutzererlebnis der Website haben
					kann.
				</p>
				<p>
					Weitere Informationen zu den von uns verwendeten Cookies und deren Zweck finden
					Sie in unserer Datenschutzerklärung.
				</p>
			</CookieConsent>
		);
}

export default CookieBanner;
