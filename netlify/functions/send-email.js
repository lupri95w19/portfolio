import nodemailer from 'nodemailer';

export async function handler(event) {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: 'Method Not Allowed' }),
		};
	}

	const { userEmail, subject, message } = JSON.parse(event.body);

	if (!userEmail || !subject || !message) {
		return {
			statusCode: 400,
			body: JSON.stringify({
				success: false,
				message: 'Tutti i campi sono obbligatori',
			}),
		};
	}

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: `"Luca Privitera" <${process.env.EMAIL_USERNAME}>`,
			to: process.env.EMAIL_USERNAME,
			subject: `Nuovo messaggio da ${userEmail}: ${subject}`,
			html: `<p>Da: ${userEmail}</p><p>Messaggio: ${message}</p>`,
		});

		await transporter.sendMail({
			from: `"Luca Privitera" <${process.env.EMAIL_USERNAME}>`,
			to: userEmail,
			subject: 'Conferma invio messaggio',
			html: '<p>Grazie per il messaggio! Ti risponderò al più presto.</p>',
		});

		return {
			statusCode: 200,
			body: JSON.stringify({
				success: true,
				message: 'Email inviata con successo!',
			}),
		};
	} catch (error) {
		console.error('Errore completo:', error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				success: false,
				message: 'Errore SMTP',
				error: error.message,
			}),
		};
	}
}
