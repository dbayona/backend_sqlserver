//const sql = require("mssql");

// SQL Server configuration
var configdb = {
    "user": "sa", // Database username
    "password": "MiPassw0rd!1521", // Database password
    "server": "localhost", // Server IP address
    "database": "master", // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}

// Connect to SQL Server
/*sql.connect(configdb, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
});*/

module.exports = configdb;