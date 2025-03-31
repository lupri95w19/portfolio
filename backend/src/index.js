require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: process.env.GMAIL_HOST,
	port: 587,
	secure: false,
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS,
	},
});

const mailOptions = {
	from: process.env.GMAIL_USER,
	to: 'priviteraluca01@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!',
};
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.error('Error', error);
	} else {
		console.log('Email sent: ', info.response);
	}
});
