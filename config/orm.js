// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (table, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Example of updateValues: { name: "panther", sleepy: true }
  // Example of condition: { id: 1 }
  updateOne: (table, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    const values = [table, updateValues, condition];

    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Add a `deleteOne` method which deletes row from a table which meets given
  // criteria parameter
  // ... CODE HERE ...
  deleteOne: (table, condition, callback) => {
    const queryString = "DELETE FROM ?? WHERE ? LIMIT 1";
    const values = [table, condition]
    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }

};

// Export the orm object
module.exports = orm;
