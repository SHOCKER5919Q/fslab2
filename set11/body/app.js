const express = require('express');
const app = express();

// the two middleware lines - this IS the answer
app.use(express.json());                                // for JSON bodies
app.use(express.urlencoded({ extended: true }));        // for HTML form bodies

app.post('/submit', (req, res) => {
    console.log('Received body:', req.body);
    res.send('Hello ' + req.body.name + ', you are ' + req.body.age);
});

app.listen(3000, () => console.log('Server on 3000'));
