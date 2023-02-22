const User = require('../models/User');

getUsers = (req, res) => {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
};

getOneUser = (req, res) => {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
};

createUser = (req, res) => {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
};

putOneUser = (req, res) => {
  const { userId } = req.params;
  const updatedData = req.body;

  User.findByIdAndUpdate(userId, updatedData, { new: true })
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};

deleteOneUser = (req, res) => {
  const { userId } = req.params;

  User.findByIdAndDelete(userId)
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json({ message: 'User deleted successfully' })
    )
    .catch((err) => res.status(500).json(err));
};


module.exports = { getUsers, getOneUser, createUser, putOneUser, deleteOneUser };
