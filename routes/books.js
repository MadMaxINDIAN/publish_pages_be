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
router.patch("/", updateBook);
router.delete("/", deleteBook);

module.exports = router;

// [
//     body("title").not().isEmpty().withMessage("Title is required"),
//     body("author").not().isEmpty().withMessage("Author is required"),
//     body("description").not().isEmpty().withMessage("Description is required"),
//     body("publisher").not().isEmpty().withMessage("Publisher is required"),
//     body("language").not().isEmpty().withMessage("Language is required"),
//     body("publishedDate").isDate().withMessage("Enter a valid date"),
//     body("pageCount").isNumeric().withMessage("Enter a valid page count"),
//     body("isbn")
//       .custom((value, { req }) => {
//         const regex =
//           /^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/;
//         if (!regex.test(value)) {
//           return Promise.reject("ISBN invalid");
//         }
//       })
//       .withMessage("ISBN invalid"),
//     body("categories")
//       .custom((value, { req }) => {
//         console.log(value, "Category");
//         if (value.length === 0) {
//           return Promise.reject("At least one category is required");
//         }
//       })
//       .withMessage("At least one category is required"),
//   ]
