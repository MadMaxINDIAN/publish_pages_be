const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { addUser, addAdminUser, getAllUsers } = require("../controllers/user");
const isAuth = require("../middleware/auth");

// Register Different User
router.post("/register", addUser);
router.post("/admin/register", addAdminUser);

// Get all users for admin panel
router.get("/admin/users", getAllUsers);
module.exports = router;
