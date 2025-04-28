import express from 'express';
import { Vonage } from '@vonage/server-sdk';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_SECRET_KEY,
});

async function sendSMS(to, from, text) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

router.post('/', async (req, res) => {
    const { name, mobile, email, message } = req.body;

    const textMessage = `
Meddelande från: ${name || 'Inget namn'}\n
Email: ${email || 'Inget email'}\n
Mobil: ${mobile || 'Inget nummer'}\n
Meddelande: ${message}
    `;

    sendSMS("46725255471", mobile, textMessage);
});

export default router;