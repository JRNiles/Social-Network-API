const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// GET all users
router.get("/", getUsers);

// GET a single user by ID
router.get("/:userId", getUserById);

// POST a new user
router.post("/", createUser);

// PUT to update a user by ID
router.put("/:userId", updateUser);

// DELETE to remove a user by ID
router.delete("/:userId", deleteUser);

module.exports = router;
