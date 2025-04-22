const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    // Check if required fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailContent = {
      to: 'to.info@fischertelesec.co.ke',
      from: 'from.info@fischertelesec.co.ke',
      subject: 'New Message!',
      text: `Name: ${name}\r\nEmail: ${email}\r\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message.replace(/\r\n/g, '<br>')}</p>`,
    };

    await mail.send(mailContent);

    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 