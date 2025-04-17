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
			html: `
  <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
    <p>Ciao!</p>
    <p>Grazie per avermi contattato. Ho ricevuto il tuo messaggio e ti risponderò al più presto.</p>
    <p>Nel frattempo, se vuoi dare un’occhiata ai miei progetti, ecco il mio portfolio:</p>
    <p>
      👉 <a href="https://lupri95w19.github.io/portfolio" target="_blank" style="color: #1e90ff; text-decoration: none;">
        lupri95w19.github.io/portfolio
      </a>
    </p>
    <p>A presto,<br><strong>Luca Privitera</strong></p>
  </div>
`,
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
