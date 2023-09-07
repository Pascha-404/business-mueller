const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const constructCustomerMail = require('./constructCustomerMail');

admin.initializeApp();

// Transporter which includes all informations to send triggered emails
const transporter = nodemailer.createTransport({
	host: 'smtp.strato.de',
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

// Function that triggers when ContactForm data is added in database.
// Sends a email with all data to the business e-mail account.
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
			console.log('Sent Mail To Business!');
		});
	});

// Function that triggers when ContactForm data is added in database.
// Sends a email with all data to the user which filled up the form.
exports.sendEmailToCustomer = functions.firestore
	.document('mails/{mailId}')
	.onCreate((snap, context) => {
		const { name, email, message, phoneCall, phoneNumber } = snap.data();

		const mailOptions = {
			from: process.env.MAIL_USER,
			to: email,
			subject: `Ihre Anfrage ist eingegangen`,
			html: constructCustomerMail({ name, email, message, phoneCall, phoneNumber }),
		};

		return transporter.sendMail(mailOptions, (error, data) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log('Sent Mail To Customer!');
		});
	});
