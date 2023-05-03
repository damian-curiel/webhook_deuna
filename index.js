const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);

  // Define the JSON response object
  const jsonResponse = {
    "order": {
      "order_id": "1c7ab33bdd8340ba70d72c5441a241f88593",
      "store_code": "all",
      "currency": "MXN",
      "tax_amount": 0,
      "display_tax_amount": "MXN 0.00",
      "shipping_amount": 45000,
      "display_shipping_amount": "MXN 450.00",
      "items_total_amount": 81900,
      "display_items_total_amount": "MXN 819.00",
      "sub_total": 81900,
      "display_sub_total": "MXN 819.00",
      "total_amount": 126900,
      "display_total_amount": "MXN 1269.00",
      // ...
      // Add the rest of the JSON structure here
      // ...
    },
    "shipping_methods": [
      {
        "code": "278591635611",
        "name": "Standard",
        "min_delivery_date": "",
        "max_delivery_date": "",
        "cost": 45000,
        "display_cost": "MXN 450.00",
        "tax_amount": 0,
        "display_tax_amount": "MXN 0.00"
      }
    ]
  };

  // Respond with the JSON object
  res.json(jsonResponse);
//  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
});
