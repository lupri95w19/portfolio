// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
// 	host: 'smtp.gmail.com',
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: 'priviteraluca01@gmail.com',
// 		pass: 'mmgx leor lwho qhvg',
// 	},
// });

// transporter
// 	.sendMail({
// 		to: 'priviteraluca01@gmail.com',
// 		subject: 'My Subject',
// 		html: '<h1>Hi how are you</hl>',
// 	})
// 	.then(() => {
// 		console.log('Email sent');
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Per usare le variabili d'ambiente

const app = express();
app.use(cors());
app.use(express.json()); // Permette di leggere il body JSON

// Configurazione di nodemailer
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USERNAME, // Assicurati che questa variabile sia configurata nel tuo file .env
		pass: process.env.EMAIL_PASSWORD, // Anche questa variabile deve essere nel tuo .env
	},
});

app.post('/send-email', async (req, res) => {
	const { to, subject, message, userEmail } = req.body;

	// Verifica se l'email del mittente è corretta
	const fromEmail = process.env.EMAIL_USERNAME;

	try {
		// 1. Invia l'email a te
		await transporter.sendMail({
			from: `Luca Privitera <${fromEmail}>`, // Qui viene usato 'fromEmail', che è l'email corretta
			to: process.env.EMAIL_USERNAME, // La tua email (quella che riceve i messaggi)
			subject: `Messaggio da ${userEmail} - ${subject}`, // Oggetto personalizzato
			html: `<p><strong>Messaggio:</strong></p><p>${message}</p>`, // Corpo del messaggio
		});

		// 2. Invia una conferma all'utente
		await transporter.sendMail({
			from: `Luca Privitera <${fromEmail}>`,
			to: userEmail, // Email dell'utente che ha inviato il messaggio
			subject: 'Conferma invio messaggio',
			html: `<p>Grazie per avermi contattato. Il tuo messaggio è stato inviato correttamente.</p>`,
		});

		res
			.status(200)
			.json({ success: true, message: 'Email inviata con successo!' });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ success: false, message: 'Errore durante l’invio dell’email.' });
	}
});

// Avvia il server sulla porta 3000
app.listen(3000, () => {
	console.log('Server in ascolto su http://localhost:3000');
});
