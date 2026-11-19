const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Saket' }];

// CREATE
app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.send(user);
});

// READ all
app.get('/users', (req, res) => res.send(users));

// UPDATE
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user.name = req.body.name;
  res.send(user);
});

// DELETE
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send('User deleted');
});

app.listen(3000, () => console.log('Server on 3000'));
