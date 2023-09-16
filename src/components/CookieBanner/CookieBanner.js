import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';

import {
	activateGoogleAnalytics,
	deactivateGoogleAnalytics,
	logPageView,
} from '../../firebase.config';

function CookieBanner() {
	const [showBanner, setShowBanner] = useState(true);
	const [cookies, setCookie] = useCookies(['fliesenmueller_cookieConsent']);

	useEffect(() => {
		const hasConsent = cookies.fliesenmueller_cookieConsent === 'accepted';
		const hasNoCookies = Object.keys(cookies).length === 0;
		setShowBanner(!hasConsent && hasNoCookies);

		if (hasConsent) {
			activateGoogleAnalytics();
		} else {
			deactivateGoogleAnalytics();
		}
	}, [cookies]);

	function handleAccept() {
		setCookie('fliesenmueller_cookieConsent', 'accepted', {
			path: '/',
			secure: true,
			sameSite: 'strict',
		});
		logPageView();
	}

	function handleDecline() {
		setCookie('fliesenmueller_cookieConsent', 'declined', {
			path: '/',
			secure: true,
			sameSite: 'strict',
		});
	}

	if (!showBanner) {
		return null;
	} else
		return (
			<CookieConsent
				location='bottom'
				buttonText='Einverstanden'
				declineButtonText='Nur notwendige'
				cookieName='fliesenmueller_cookieConsent'
				enableDeclineButton='true'
				onAccept={handleAccept}
				onDecline={handleDecline}
				style={{ background: '#4a6d6a', borderRadius: '10px' }}
				buttonStyle={{
					backgroundColor: 'rgb(247 121 19)',
					color: '#fff',
					fontSize: '16px',
					borderRadius: '10px',
				}}
				declineButtonStyle={{
					backgroundColor: 'rgb(182 170 170 / 83%)',
					fontSize: '16px',
					borderRadius: '10px',
					color: '#fff',
				}}>
				<p>
					Wir verwenden Cookies, um Ihnen eine optimierte Erfahrung auf unserer Website zu
					ermöglichen. Durch die Nutzung unserer Website stimmen Sie der Verwendung von
					Cookies zu. Diese Cookies dienen dazu, Ihre Präferenzen zu speichern, die
					Website-Funktionalität zu verbessern und statistische Daten über die Nutzung zu
					erfassen.
				</p>
				<p>
					Wenn Sie die Verwendung von Cookies einschränken möchten, können Sie nur
					technisch notwendige zulassen. Bitte beachten Sie jedoch, dass dies Auswirkungen
					auf die Funktionalität und das Nutzererlebnis der Website haben kann.
				</p>
				<p>
					Weitere Informationen zu den von uns verwendeten Cookies und deren Zweck finden
					Sie in unserer{' '}
					<Link style={{ borderBottom: '2px solid white' }} to='/datenschutz'>
						Datenschutzerklärung
					</Link>
					.
				</p>
			</CookieConsent>
		);
}

export default CookieBanner;
