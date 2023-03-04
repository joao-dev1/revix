const Review = require('../models/review');

exports.getAll = async (req, res) => {
  //models                   
  Review.getAll((err, reviews) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao buscar o usuários."
        });
      } else {
        res.send(reviews);
      }
    });
};
exports.getById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).send('Review not found');
    }
    res.json(review);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.create = async (req, res) => {
  console.log(req.body);
    const newReview = new Review({
      idUsuario: req.body.idUsuario,
      idFilme: req.body.idFilme,
      nota: req.body.nota,
      descricao: req.body.descricao,
      dataPublicada: req.body.dataPublicada,
      });

 console.log(newReview);
      //models                   
    Review.create(newReview, (err, review) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao criar o usuário."
          });
        } else {
          res.send(review);
        }
      });
};

exports.updateById = async (req, res) => {
  try {
    const Review = await Review.updateById(req.params.id, req.body, { new: true });
    if (!Review) {
      return res.status(404).send('Review not found');
    }
    res.json(Review);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const Review = await Review.remove(req.params.id);
    if (!Review) {
      return res.status(404).send('Review not found');
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};