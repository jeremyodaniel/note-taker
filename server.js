// require the npm package 
const express = require('express');
// instantiate the server
const PORT = process.env.PORT || 3001;


const app = express();
const { notes } = require('./db/notes');


// GET route
app.get('/api/notes', (req, res) => {
  res.json(notes);
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});