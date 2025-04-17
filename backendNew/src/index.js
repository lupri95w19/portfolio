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
	// Modifica qui per allinearti al frontend
	const { userEmail, subject, message } = req.body;

	if (!userEmail || !subject || !message) {
		return res.status(400).json({
			success: false,
			message: 'Tutti i campi sono obbligatori',
		});
	}

	try {
		// 1. Email a te
		await transporter.sendMail({
			from: `"Luca Privitera" <${process.env.EMAIL_USERNAME}>`,
			to: process.env.EMAIL_USERNAME,
			subject: `[Portfolio] Nuovo messaggio da ${userEmail}: ${subject}`,
			// html: `<p>Da: ${userEmail}</p><p>Messaggio: ${message}</p>`,
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

		// 2. Conferma all'utente
		await transporter.sendMail({
			from: `"Luca Privitera" <${process.env.EMAIL_USERNAME}>`,
			to: userEmail,
			subject: 'Conferma invio messaggio',
			html: '<p>Grazie per il messaggio! Ti risponderò al più presto.</p>',
		});

		res.status(200).json({
			success: true,
			message: 'Email inviata con successo!',
		});
	} catch (error) {
		console.error('Errore completo:', error);
		res.status(500).json({
			success: false,
			message: 'Errore SMTP',
			error: error.message,
		});
	}
});

// Avvia il server sulla porta 3000
app.listen(3000, () => {
	console.log('Server in ascolto su http://localhost:3000');
});
