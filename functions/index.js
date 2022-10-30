const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
	host: 'smtp.strato.de',
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

exports.sendEmail = functions.firestore
	.document('mails/{mailId}')
	.onCreate((snap, context) => {
		const callBack = snap.data().phoneCall
			? `<p>Telefonnummer: ${
					snap.data().phoneNumber
			  }</p><p>Der Kunde wünscht einen Rückruf</p>`
			: '<p>Der Kunde wünscht die Kontaktaufnahme via Email</p>';

		const mailOptions = {
			from: process.env.MAIL_USER,
			to: process.env.MAIL_RECIEVER,
			replyTo: snap.data().email,
			subject: `Anfrage von ${snap.data().name}`,
			html: `<h1>Kontaktformular eingegangen</h1>
                    <br>
                    <p>Name: ${snap.data().name}</p>
                    <p>Email: ${snap.data().email}</p>
                    ${callBack}
                    <p>Nachricht: ${snap.data().message}</p>`,
		};

		return transporter.sendMail(mailOptions, (error, data) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log('Mail Sent!');
		});
	});

exports.sendEmailToCustomer = functions.firestore
	.document('mails/{mailId}')
	.onCreate((snap, context) => {
		const callBack = snap.data().phoneCall
			? `<p>Telefonnummer: ${
					snap.data().phoneNumber
			  }</p><p>Sie wünschen einen Rückruf</p>`
			: '<p>Sie wünschen die Kontaktaufnahme via Email</p>';

		const mailOptions = {
			from: process.env.MAIL_USER,
			to: snap.data().email,
			subject: `Ihre Anfrage ist eingegangen`,
			html: `<h1>Kontaktformular eingegangen</h1>
					<p>Sehr geehrte Damen und Herren, <br> herzlichen Dank für ihre Kontaktanfrage. Wir werden uns so schnell wie möglich mit Ihnen in Verbindungen setzen.</p>
					<p>Unten finden sie noch mal die von Ihnen angegebenen Daten.</p>
                    <br>
					<p>Dies ist eine automatisch generierte Eingangsbestätigung. Bitte antworten Sie nicht auf diese E-Mail.</p>
					<br>
					<p>Freundlich grüßt Sie Ihr</p>
					<p>Fliesenfachbetrieb Müller</p>
					<br>
                    <p>Name: ${snap.data().name}</p>
                    <p>Email: ${snap.data().email}</p>
                    ${callBack}
                    <p>Nachricht: ${snap.data().message}</p>
					`,
		};

		return transporter.sendMail(mailOptions, (error, data) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log('Mail to customer Sent!');
		});
	});
