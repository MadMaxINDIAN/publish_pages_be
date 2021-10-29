const express = require('express');
const { updateBook, createBook, getBook } = require('../controllers/book');
const router = express.Router();

router.get("/", getBook);
router.post("/", createBook);
router.patch("/", updateBook);
router.delete("/", deleteBook);

module.exports = router;