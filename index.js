const express = require('express');
const app = express();
app.use(express.json());
app.post('/Login', (req, res) => {
  const { email, password,} = req.body;
  if (!email) return res.status(400).send("Email cannot be empty");
  if (!password) return res.status(400).send("Password cannot be empty");
  res.send("login done");
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
