const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongooseconnect('process.env.mongodb+srv://BhavanaMadhura:BHANU000@cluster0.pbqrtut.mongodb.net/')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on ${PORT}`);
});
