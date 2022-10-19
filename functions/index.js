const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
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
