// require the npm package 
const express = require('express');
// instantiate the server
const app = express();
const { notes } = require('./db/notes');


// GET route
app.get('/api/notes', (req, res) => {
  res.json(notes);
});


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});