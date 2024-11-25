// controllers/contactController.js
import transporter from '../helpers/nodemailerTransporter.js';
import Contact from '../models/Contact.js';
import dotenv from 'dotenv';


dotenv.config();

const sendEmail = async (name, email, phone, message) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
};

export const handleContactSubmission = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save contact information to the database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send the email
    await sendEmail(name, email, phone, message);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error details:', error); // Log full error details
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
};
