const FormData = require('form-data');
const Mailgun = require('mailgun.js');
const { NextApiRequest, NextApiResponse } = require('next');

const API_KEY = 'pubkey-26ac8f906e5421d859eba82829f38444' || '';
const DOMAIN = 'sandbox975970df62ac4f418d26ff958f05be11.mailgun.org' || '';


export default async function handler(req, res) {
  console.log('Data', req.body);

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: 'api', key: API_KEY });

  const { name, email, message } = req.body;

  const messageData = {
    from: 'Contact Form <contact@mg.ethanmick.com>',
    to: 'ethan@ethanmick.com',
    subject: 'New Contact Form!',
    text: `Hello,

    You have a new form entry from: ${name} ${email}.

    ${message}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
    res.status(200).json({ submitted: true });
  } catch (err) {
    console.error('Error sending email', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
