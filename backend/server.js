/*
const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const cors = require('cors');
const port = 5000;
//const chatRoutes = require("./routes/chat");

mongoose.connect('mongodb://localhost:27017/kodikon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(express.json());
//app.use("/api/chat", chatRoutes);

const dataSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Data = mongoose.model('Data', dataSchema);

const chatMessageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: Date,
});
const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

app.post('/api/chat/messages', async (req, res) => {
  const requestData = req.body;
  const { sender, message } = requestData;
  const timestamp = new Date();

  if (!sender || !message) {
    return res.status(400).json({ error: 'Both sender and message are required in the request body' });
  }

  try {
    // Create a new chat message document to save in the database
    const newChatMessage = new ChatMessage({ sender, message, timestamp });

    // Save the chat message to MongoDB using promises
    await newChatMessage.save();

    console.log('Chat message saved to MongoDB:', newChatMessage);
    // Respond to the client
    res.json({ message: 'Chat message saved successfully' });
  } catch (err) {
    console.error('Error saving chat message to MongoDB:', err);
    res.status(500).json({ error: 'Failed to save chat message to MongoDB' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

*/


const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const cors = require('cors');
const port = 8000;

mongoose.connect('mongodb://localhost/kodikon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(express.json());

const dataSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Data = mongoose.model('Data', dataSchema);

app.post('/api/login', async (req, res) => {
  const requestData = req.body;
  const { email, password } = requestData;

  if (!email || !password) {
    return res.status(400).json({ error: 'Both email and password are required in the request body' });
  }

  try {
    // Create a new document to save in the database
    const newData = new Data({ email, password });

    // Save the data to MongoDB using promises
    await newData.save();

    console.log('Data saved to MongoDB:', newData);
    // Respond to the client
    res.json({ message: 'Server Connection and Login successful' });
  } catch (err) {
    console.error('Error saving data to MongoDB:', err);
    res.status(500).json({ error: 'Failed to save data to MongoDB' });
  }
});

const chatMessageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: Date,
});
const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

app.post('/api/chat/messages', async (req, res) => {
  const requestData = req.body;
  const { sender, message } = requestData;
  const timestamp = new Date();

  if (!sender || !message) {
    return res.status(400).json({ error: 'Both sender and message are required in the request body' });
  }

  try {
    // Create a new chat message document to save in the database
    const newChatMessage = new ChatMessage({ sender, message, timestamp });

    // Save the chat message to MongoDB using promises
    await newChatMessage.save();

    console.log('Chat message saved to MongoDB:', newChatMessage);
    // Respond to the client
    res.json({ message: 'Chat message saved successfully' });
  } catch (err) {
    console.error('Error saving chat message to MongoDB:', err);
    res.status(500).json({ error: 'Failed to save chat message to MongoDB' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
