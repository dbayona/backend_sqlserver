const sql = require("mssql");

class FacturaController {
    static getAllFacturas(req, res) {
      // Fetch facturas data from your database or any other source
      
      /*const facturas = [
        // Sample user data
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
      ];*/

        // Execute a SELECT query
        new sql.Request().query("SELECT * FROM facturas", (err, result) => {
            if (err) {
                console.error("Error executing query:", err);
            } else {
                res.send(result.recordset); // Send query result as response
                console.dir(result.recordset);
            }
        });
  
      //res.json({ facturas });
    }
  
    // Add more methods for handling user-related functionality
    static getFacturaId(req, res) {
        // Fetch facturas data from your database or any other source

          //console.log("REQ: ", req.params.id);
          console.log("ID: ", req.params.id);
  
          let id = req.params.id;
          // Execute a SELECT query
          //new sql.Request().query(`SELECT * FROM facturas where id = ${id}`, (err, result) => {
            new sql.Request()
            .input('input_id', sql.Int, id)
            .query(`SELECT * FROM facturas where id = @input_id`, (err, result) => {
            //.query(`SELECT * FROM facturas where id = ${id}`, (err, result) => {
              if (err) {
                  console.error("Error executing query:", err);
              } else {
                  res.send(result.recordset); // Send query result as response
                  console.dir(result.recordset);
              }
          });
    
        //res.json({ facturas });
      }
  }
  
  module.exports = FacturaController;