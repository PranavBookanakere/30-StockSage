// routes/chat.js
const express = require("express");
const router = express.Router();
const { saveMessage } = require("../db"); // Import the function to save chat messages

// Define API endpoints for chat
router.post("/messages", (req, res) => {
  // Handle incoming chat messages and save them to MongoDB
  const newMessage = req.body; // Assuming you send the message data in the request body
  saveMessage(newMessage);
  res.status(201).json({ message: "Message saved" });
});

module.exports = router;
