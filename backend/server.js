import nodemailer from "nodemailer";

export default async (event, context) => {
    try {
        const { name, email, message } = JSON.parse(event.body);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USERNAME}>`,
            to: process.env.EMAIL_TO,
            subject: `Nuovo messaggio da ${name}`,
            text: `Email: ${email}\n\nMessaggio:\n${message}`
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                message: "Email inviata con successo!"
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: "Errore nell'invio dell'email",
                error
            })
        };
    }
};
