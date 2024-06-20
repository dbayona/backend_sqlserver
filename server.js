const express = require("express");
const sql = require("mssql");

const app = express();
const configdb = require("./config/database");

// SQL Server configuration
/*var config = {
    "user": "sa", // Database username
    "password": "MiPassw0rd!1521", // Database password
    "server": "localhost", // Server IP address
    "database": "master", // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}

// Connect to SQL Server
sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
});*/

sql.connect(configdb , err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!!");
});

// Define route for fetching data from SQL Server Facturas table
app.get("/facturas", (request, response) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM facturas", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Define route for fetching data from SQL Server Personal table
app.get("/personal", (request, response) => {
    // Execute a SELECT query
    new sql.Request().query("SELECT * FROM personal", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
