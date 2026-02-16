require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors({ 
  origin: process.env.FRONTEND_URL || "https://monumental-sfogliatella-3043ba.netlify.app", 
  credentials: true
 }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is live");
});

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
