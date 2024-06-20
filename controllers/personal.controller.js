const sql = require("mssql");

class PersonalController {
    static getAllPersonal(req, res) {
      // Fetch facturas data from your database or any other source
      
      /*const facturas = [
        // Sample user data
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
      ];*/

        // Execute a SELECT query
        new sql.Request().query("SELECT * FROM personal", (err, result) => {
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
    static addPersonal(req, res) {
      // Fetch facturas data from your database or any other source

        //console.log(" REQ: ", req)
        //console.log("REQ: ", req.body);
        //console.log("ID: ", req.body.tipo);

        // Execute a SELECT query or CALL PROCEDURE
      new sql.Request()
          .input('nombre', sql.VarChar(40), req.body.nombre)
          .input('tipo', sql.VarChar(20), req.body.tipo)
          //.query(`insert into personal (nombre, tipo) values (@input_nombre, @input_tipo)`, (err, result) => {
          .execute(`dbo.uspAddPersonal`, (err, result) => {
            if (err) {
                console.error("Error executing query:", err);
            } else {
                res.status(200).send('Registro insertado...' /*result.recordset*/); // Send query result as response
                console.dir('Registro insertado...' /*result.recordset*/);
            }
        });
    }
  }
  
  module.exports = PersonalController;