const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { addUser, addAdminUser, getAllUsers } = require("../controllers/user");
const adminAuth = require("../middleware/adminAuth");
const userAuth = require("../middleware/userAuth");

// Register Different User
router.post("/register", addUser);
router.post("/admin/register", adminAuth, addAdminUser);

// Get all users for admin panel
router.get("/admin/users", adminAuth, getAllUsers);
module.exports = router;
