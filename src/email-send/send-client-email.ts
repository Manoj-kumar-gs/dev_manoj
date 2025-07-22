// lib/send-client-message.ts
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import ClientMessageEmailTemplate from '@/email-templates/client-email-template';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export default async function sendClientMessageEmail({ name, email, message }: ContactData) {
  console.log('Sending email with the following data:', { name, email, message });
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const htmlContent = await render(ClientMessageEmailTemplate({ name, email, message }));

  const info = await transporter.sendMail({
      from: email, // <-- your email
      to:   process.env.GMAIL_USER, // <-- send to yourself
      subject: `New Message from ${name || email}`,
      html: htmlContent,
    });

    console.log('Email sent:', info.response);

    return { success: true, message: 'Email sent.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Email sending failed.' };
  }
}
