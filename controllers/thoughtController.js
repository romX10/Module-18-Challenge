const thought = require('../models/Thought');

getThoughts = (req, res) => {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
};

getOneThought = (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
};

createThought = (req, res) => {
    thought.create(req.body)
      .then((dbthoughtData) => res.json(dbthoughtData))
      .catch((err) => res.status(500).json(err));
};

module.exports = { getThoughts, getOneThought, createThought };
