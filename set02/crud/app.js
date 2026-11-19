const express = require('express');
const app = express();
app.use(express.json());

app.get('/user', (req, res) => res.send('GET: user fetched'));
app.post('/user', (req, res) => res.send('POST: user created'));
app.put('/user', (req, res) => res.send('PUT: user updated'));
app.delete('/user', (req, res) => res.send('DELETE: user deleted'));

app.listen(3000, () => console.log('Server on 3000'));
