const db = require('./db');

const Review = function(review) {
  this.idUsuario=review.idUsuario;
  this.idFilme=review.idFilme;
  this.nota=review.nota;
  this.descricao=review.descricao;
  this.dataPublicada=review.dataPublicada;
};

Review.create = (newReview, result) => {
    console.log(newReview);
  db.run("INSERT INTO reviews (idUsuario, idFilme, nota, descricao, dataPublicada) VALUES (?,?,?,?,?)", 
    [newReview.idUsuario,newReview.idFilme,newReview.nota,newReview.descricao,newReview.dataPublicada], 
    (err) => {
      if (err) {
        console.error(err.message);
        result(err, null);
      } else {
        result(null, { id: this.lastID, ...newReview });
      }
    });
};

Review.findById = (ReviewId, result) => {
  db.get("SELECT * FROM reviews WHERE id = ?", [ReviewId], (err, row) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else if (!row) {
      result({ message: "Review not found." }, null);
    } else {
      result(null, row);
    }
  });
};

Review.getAll = (result) => {
  db.all("SELECT *FROM reviews WHERE idFilme IS NOT NULL", (err, rows) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, rows);
    }
  });
};

Review.updateById = (ReviewId, Review, result) => {
  db.run("UPDATE Reviews SET name = ?, email = ?, password = ? WHERE id = ?", 
    [Review.name, Review.email, Review.password, ReviewId], 
    (err) => {
      if (err) {
        console.error(err.message);
        result(err, null);
      } else {
        result(null, { id: ReviewId, ...Review });
      }
    });
};

Review.remove = (ReviewId, result) => {
  db.run("DELETE FROM Reviews WHERE id = ?", [ReviewId], (err) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, { message: "Review deleted successfully!" });
    }
  });
};

module.exports = Review;