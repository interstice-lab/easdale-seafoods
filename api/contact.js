// api/contact.js
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' })
  }
  
  const { name, email, message, _honey } = req.body

  // honeypot anti-spam
  if (_honey) {
    return res.status(400).json({ error: 'Spam detected' })
  }
  // validation minimale
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  try {
    await sendgrid.send({
      to:   process.env.CONTACT_EMAIL,
      from: process.env.CONTACT_EMAIL,      // doit être “autorisée” dans SendGrid
      replyTo: email,
      subject: `Contact form from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${message.replace(/\n/g,'<br>')}</p>`,
    })
    return res.status(200).json({ message: 'Message sent' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Mail send failed' })
  }
}
