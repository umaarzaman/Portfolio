const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Portfolio Backend API Running');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
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
    
    console.log('📬 New message saved:', { name, email, subject });
    res.status(201).json({ message: 'Message sent successfully! I will get back to you soon.' });
  } catch (error) {
    console.error('🔥 Error saving contact form:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
