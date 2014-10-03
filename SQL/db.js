var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/




exports.findAllMessages = function(cb){
  dbConnection.connect();
  var queryString = 'SELECT * FROM ?';
  var queryArgs = ['MESSAGES'];
  dbConnection.query(queryString, queryArgs, function(err, results){
    if (err) {throw err;}

    cb(results);
  });

  dbConnection.end();
};

exports.findUser = function(username, cb){
  dbConnection.connect();
  var queryString = '';
  var queryArgs = [];
  dbConnection.query(queryString, queryArgs, function(err, results){
    if (err) {throw err;}

  });
  dbConnection.end();
};

exports.saveUser = function(username, cb){
  dbConnection.connect();
  var queryString = '';
  var queryArgs = [];
  dbConnection.query(queryString, queryArgs, function(err, results){
    if (err) {throw err;}

  });
  dbConnection.end();
};

exports.saveMessage = function(message, userid, roomname, cb){
  dbConnection.connect();
  var queryString = '';
  var queryArgs = [];
  dbConnection.query(queryString, queryArgs, function(err, results){
    if (err) {throw err;}

  });
  dbConnection.end();
};

