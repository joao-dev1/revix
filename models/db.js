const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "./db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannotopen database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT, 
        email TEXT UNIQUE, 
        password TEXT)`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Table already created');
        }
      });
  }
});

module.exports = db;