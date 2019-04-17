const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const databaseName = 'lbwlibrary';
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${databaseName}`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, err => {
  if (err) return console.log('Mongoose connection error:', err);
  console.log(`Mongoose connected to ${MONGODB_URI}`);
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build'));
});

app.listen(PORT, console.log(`\nServer running on port ${PORT}`));
