// pages/api/contact.ts
import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Method Not Allowed'});
  }

  const {name, email, message} = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({message: 'All fields are required'});
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or configure your SMTP settings
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: 'your-email@example.com', // Replace with your own email address
    subject: `New message from ${name}`, // Subject line
    text: message, // Plain text body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({message: 'Message sent successfully'});
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({message: 'Internal Server Error'});
  }
};

export default handler;
