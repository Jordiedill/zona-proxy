const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('hello world');
})

// app.listen(PORT, ()=>{
//   console.log('baby, i\'m listening...');
// })

const server = app.listen(PORT);

module.exports = {app, server};