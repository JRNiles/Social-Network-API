const Thought = require('../models/thought');

// Controller functions for CRUD operations on thoughts and reactions
exports.getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createThought = async (req, res) => {
  try {
    const thought = new Thought(req.body);
    await thought.save();
    res.status(201).json(thought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReaction = async (req, res) => {
  const { reactionBody, username } = req.body;
  const { thoughtId } = req.params;

  try {
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    thought.reactions.push({ reactionBody, username });
    await thought.save();
    res.status(201).json(thought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReaction = async (req, res) => {
  const { thoughtId, reactionId } = req.params;

  try {
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    thought.reactions = thought.reactions.filter(reaction => reaction._id != reactionId);
    await thought.save();
    res.json({ message: 'Reaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};