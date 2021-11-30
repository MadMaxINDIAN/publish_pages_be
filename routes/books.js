const express = require("express");
const { body } = require("express-validator");
const {
  updateBook,
  createBook,
  getBooks,
  getBook,
  deleteBook,
} = require("../controllers/book");
const router = express.Router();
const ImageUploader = require("../multer/upload.controller");

router.get("/", getBooks);
router.get("/:isbn", getBook);
router.post("/", ImageUploader.single("frontCoverImage"), createBook);
router.post("/:isbn", ImageUploader.single("frontCoverImage"), updateBook);
router.delete("/:isbn", deleteBook);

module.exports = router;
