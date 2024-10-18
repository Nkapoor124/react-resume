import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Method Not Allowed'});
  }

  const {name, email, message} = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({message: 'All fields are required'});
  }

  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your app-specific password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender address
      to: 'your-email@example.com',  // Replace with your email
      subject: `New message from ${name}`,
      text: message,
    });

    return res.status(200).json({message: 'Message sent successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'Internal Server Error'});
  }
}

export default handler;
