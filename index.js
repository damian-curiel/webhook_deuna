const express = require('express');
const app = express();
const port = process.env.PORT || 8087;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});
