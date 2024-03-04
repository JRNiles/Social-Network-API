const express = require('express');
const router = express.Router();
const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', getThoughts);

// GET a single thought by ID
router.get('/:thoughtId', getThoughtById);

// POST a new thought
router.post('/', createThought);

// PUT to update a thought by ID
router.put('/:thoughtId', updateThought);

// DELETE to remove a thought by ID
router.delete('/:thoughtId', deleteThought);

// POST to create a reaction for a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;