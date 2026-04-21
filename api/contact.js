const mongoose = require('mongoose');
const Contact = require('../server/models/Contact'); // Reusing the model

// Helper to connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await connectDB();
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully! I will get back to you soon.' });
  } catch (error) {
    console.error('Vercel Function Error:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
};
