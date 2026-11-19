const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Express server</h1>');
});

app.get('/student', (req, res) => {
  res.send('Student: Saket, Branch: CSE');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
