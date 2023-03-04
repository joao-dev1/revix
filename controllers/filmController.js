const Film = require('../models/film');

exports.getAll = async (req, res) => {
  //models                   
  Film.getAll((err, films) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao buscar o usuários."
        });
      } else {
        res.send(films);
      }
    });
};
exports.getById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).send('Film not found');
    }
    res.json(film);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.create = async (req, res) => {
  
    const newFilm = new Film({
        name: req.body.name,
       
      });
      
      //models                   
    Film.create(newFilm, (err, film) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao criar o usuário."
          });
        } else {
          res.send(film);
        }
      });
};

exports.updateById = async (req, res) => {
  try {
    const Film = await Film.updateById(req.params.id, req.body, { new: true });
    if (!Film) {
      return res.status(404).send('Film not found');
    }
    res.json(Film);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const Film = await Film.remove(req.params.id);
    if (!Film) {
      return res.status(404).send('Film not found');
    }
    res.json({ message: 'Film deleted successfully' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};