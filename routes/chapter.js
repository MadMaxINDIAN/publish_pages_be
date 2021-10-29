const express = require('express');
const { getChapter, createChapter, updateChapter, deleteChapter } = require('../controllers/chapter');
const router = express.Router();

router.get("/", getChapter);
router.post("/", createChapter);
router.patch("/", updateChapter);
router.delete("/", deleteChapter);

module.exports = router;