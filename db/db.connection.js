const sql = require("mysql");
require("dotenv").config();

var con = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  dbname: process.env.DB_DBNAME,
  multipleStatement: true,
});
module.exports = con;
