const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "./db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannotopen database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE films(
      idFilm INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE)`,
    (err) => {
      if (err) {
        // Table already created
        console.log('films Table already created');
      }
    });
    db.run(`CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, 
        email TEXT UNIQUE, 
        password TEXT)`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Users Table already created');
        }
      });
     
      db.run(`CREATE TABLE reviews(
        idReview INTEGER PRIMARY KEY AUTOINCREMENT,
        idUsuario INTEGER,
        idFilme INTEGER, 
        nota INTEGER,
        descricao TEXT,
        dataPublicada DATE,
        FOREIGN KEY(idUsuario) REFERENCES users(id),
        FOREIGN KEY(idFilme) REFERENCES films(idFilm))`,
        
      (err) => {
        if (err) {
          // Table already created
          console.log('reviews Table already created');
        }
      });
  }
});

module.exports = db;