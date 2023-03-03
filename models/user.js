const db = require('./db');

const User = function(user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  console.log(newUser.username);
  db.run("INSERT INTO users (nickname, email, password) VALUES (?, ?, ?)", 
    [newUser.username, newUser.email, newUser.password], 
    (err) => {
      if (err) {
        console.error(err.message);
        result(err, null);
      } else {
        result(null, { id: this.lastID, ...newUser });
      }
    });
};

User.findById = (userId, result) => {
  db.get("SELECT * FROM users WHERE id = ?", [userId], (err, row) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else if (!row) {
      result({ message: "User not found." }, null);
    } else {
      result(null, row);
    }
  });
};

User.getAll = (result) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, rows);
    }
  });
};

User.updateById = (userId, user, result) => {
  db.run("UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?", 
    [user.username, user.email, user.password, userId], 
    (err) => {
      if (err) {
        console.error(err.message);
        result(err, null);
      } else {
        result(null, { id: userId, ...user });
      }
    });
};

User.remove = (userId, result) => {
  db.run("DELETE FROM users WHERE id = ?", [userId], (err) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, { message: "User deleted successfully!" });
    }
  });
};

module.exports = User;