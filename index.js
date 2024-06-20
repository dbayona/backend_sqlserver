const sql = require("mssql");
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// Middleware and routes will be added here
const facturaRouter = require('./routes/factura.router');
const personalRouter = require('./routes/personal.router');
const configdb = require("./config/database");

sql.connect(configdb , err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!!");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Add middleware and other routes as needed
app.use('/facturas', facturaRouter);
app.use('/factura', facturaRouter);

app.use('/personal', personalRouter);

// Handle other endpoints or invalid requests
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});