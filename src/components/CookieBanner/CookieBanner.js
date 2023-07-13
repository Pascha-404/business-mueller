import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';

function CookieBanner() {
	const [showBanner, setShowBanner] = useState(false);

	return (
		<CookieConsent
			location='bottom'
			buttonText='Zustimmen'
			declineButtonText='Ablehnen'
			cookieName='fliesenmueller_cookie_consent'
			expires={150}
			style={{ background: '#2B373B' }}
			buttonStyle={{ color: '#4e503b', fontSize: '13px' }}>
			Diese Website verwendet Cookies!
		</CookieConsent>
	);
}

export default CookieBanner;
