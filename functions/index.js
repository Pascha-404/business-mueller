const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const constructCustomerMail = require('./constructCustomerMail');
const constructBusinessMail = require('./constructBusinessMail');

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
	.onCreate(async (snap, context) => {
		try {
			const { name, email, message, phoneCall, phoneNumber } = snap.data();

			const mailOptions = {
				from: process.env.MAIL_USER,
				to: process.env.MAIL_RECIEVER,
				replyTo: email,
				subject: `Anfrage von ${name}`,
				html: constructBusinessMail({ name, email, message, phoneCall, phoneNumber }),
			};

			await transporter.sendMail(mailOptions);
			console.log('Kundenanfrage gesendet: ', name, email)
			return null;
		} catch (error) {
			console.log('Error from sending business mail: ', error);
			return null;
		}
	});

// Function that triggers when ContactForm data is added in database.
// Sends a email with all data to the user which filled up the form.
exports.sendEmailToCustomer = functions.firestore
	.document('mails/{mailId}')
	.onCreate(async (snap, context) => {
		try {
			const { name, email, message, phoneCall, phoneNumber } = snap.data();

			const mailOptions = {
				from: process.env.MAIL_USER,
				to: email,
				subject: `Ihre Anfrage ist eingegangen`,
				html: constructCustomerMail({ name, email, message, phoneCall, phoneNumber }),
			};

			await transporter.sendMail(mailOptions);
			console.log('Kopie von Kontakformular gesendet an: ', email)
			return null;
		} catch (error) {
			console.log('Error from sending customer mail: ', error);
			return null;
		}
	});
