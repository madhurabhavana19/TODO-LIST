const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://BhavanaMadhura:BHANU000@cluster0.pbqrtut.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
