const User = require('../models/user');

exports.getAll = async (req, res) => {
  //models                   
  User.getAll((err, users) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao buscar o usuários."
        });
      } else {
        res.send(users);
      }
    });
};
exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.create = async (req, res) => {
  
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      //models                   
    User.create(newUser, (err, user) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Ocorreu um erro ao criar o usuário."
          });
        } else {
          res.send(user);
        }
      });
};

exports.updateById = async (req, res) => {
  try {
    const user = await User.updateById(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const user = await User.remove(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};