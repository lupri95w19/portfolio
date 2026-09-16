require('dotenv').config(); // Carica le variabili da .env
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json()); // Per leggere JSON dalle richieste

// Crea il trasportatore per inviare email usando Gmail
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD,
	},
});

// Endpoint per inviare email
app.post('/send-email', async (req, res) => {
	const { name, email, message } = req.body;

	try {
		await transporter.sendMail({
			from: `"Portfolio Contact" <${process.env.EMAIL_USERNAME}>`,
			to: process.env.EMAIL_TO,
			subject: `Nuovo messaggio da ${name}`,
			text: `Email: ${email}\n\nMessaggio:\n${message}`,
		});

		res.json({ success: true, message: 'Email inviata con successo!' });
	} catch (error) {
		res
			.status(500)
			.json({ success: false, message: "Errore nell'invio dell'email", error });
	}
});

// Avvia il server
app.listen(process.env.PORT || 3000, () =>
	console.log(
		`Server in ascolto su http://localhost:${process.env.PORT || 3000}`
	)
);
