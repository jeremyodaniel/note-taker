// require the npm package 
const express = require('express');
// instantiate the server
const app = express();


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});