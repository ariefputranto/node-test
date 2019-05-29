var mysql = require('mysql');

var db = mysql.createPool({
	connectionLimit : 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "test_tokocrypto"
});

module.exports = db;