const express = require("express");
const { body } = require("express-validator");
const {
  updateBook,
  createBook,
  getBook,
  deleteBook,
} = require("../controllers/book");
const router = express.Router();
const ImageUploader = require("../multer/upload.controller");
const validate = require("../middleware/validate");

router.get("/", getBook);
router.post(
  "/",
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("author").not().isEmpty().withMessage("Author is required"),
    body("description").not().isEmpty().withMessage("Description is required"),
    body("publisher").not().isEmpty().withMessage("Publisher is required"),
    body("language").not().isEmpty().withMessage("Language is required"),
    body("publishedDate").isDate().withMessage("Enter a valid date"),
    body("pageCount").isNumeric().withMessage("Enter a valid page count"),
    body("isbn")
      .custom((value, { req }) => {
        console.log(value, typeof value, "ISBN");
        if (value.length !== 10 && value.length !== 13) {
          return Promise.reject("ISBN must be 10 or 13 digits");
        }
      })
      .withMessage("ISBN must be 10 or 13 digits"),
    body("categories")
      .custom((value, { req }) => {
        console.log(value, "Category");
        if (value.length === 0) {
          return Promise.reject("At least one category is required");
        }
      })
      .withMessage("At least one category is required"),
  ],
  validate,
  ImageUploader.single("frontCoverImage"),
  createBook
);
router.patch("/", updateBook);
router.delete("/", deleteBook);

module.exports = router;
