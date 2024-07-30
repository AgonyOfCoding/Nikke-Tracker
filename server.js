// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('./data', (req, res) => {
  const data = req.body;
  fs.writeFileSync('./data/investmentData.json', JSON.stringify(data, null, 2), 'utf8');
  res.send({ message: 'Data saved successfully' });
});

app.listen(4001, () => {
  console.log('Server running on port 4001');
});
