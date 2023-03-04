const db = require('./db');

const Film = function(film) {
  this.name = film.name;
};

Film.create = (newFilm, result) => {

  db.run("INSERT INTO films (name) VALUES (?)", 
    [newFilm.name], 
    (err) => {
      if (err) {
        console.error(err.message);
        result(err, null);
      } else {
        result(null, { id: this.lastID, ...newFilm });
      }
    });
};

Film.findById = (FilmId, result) => {
  db.get("SELECT * FROM films WHERE id = ?", [FilmId], (err, row) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else if (!row) {
      result({ message: "Film not found." }, null);
    } else {
      result(null, row);
    }
  });
};

Film.getAll = (result) => {
  db.all("SELECT *FROM films", (err, rows) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, rows);
    }
  });
};

Film.updateById = (FilmId, Film, result) => {
  db.run("UPDATE Films SET name = ?, email = ?, password = ? WHERE id = ?", 
    [Film.name, Film.email, Film.password, FilmId], 
    (err) => {
      if (err) {
        console.error(err.message);
        result(err, null);
      } else {
        result(null, { id: FilmId, ...Film });
      }
    });
};

Film.remove = (FilmId, result) => {
  db.run("DELETE FROM Films WHERE id = ?", [FilmId], (err) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, { message: "Film deleted successfully!" });
    }
  });
};

module.exports = Film;