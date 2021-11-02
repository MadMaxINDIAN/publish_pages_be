const express = require('express');
const { updateBook, createBook, getBook, deleteBook } = require('../controllers/book');
const router = express.Router();
const ImageUploader = require("../multer/upload.controller");

router.get("/", getBook);
router.post("/", ImageUploader.single('frontCoverImage'), createBook);
router.patch("/", updateBook);
router.delete("/", deleteBook);

module.exports = router;