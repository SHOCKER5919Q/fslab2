const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('This is the Home page'));

app.get('/about', (req, res) => res.send('This is the About page'));

app.get('/old', (req, res) => res.redirect('/about'));

app.listen(3000, () => console.log('Server on 3000'));
