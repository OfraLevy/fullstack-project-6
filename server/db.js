const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harry#21",
  database: "fullstack_project_6"
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = connection;