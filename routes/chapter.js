const express = require("express");
const ImageUploader = require("../multer/upload.controller");

const {
  getChapters,
  getChapter,
  createChapter,
  updateChapter,
  deleteChapter,
} = require("../controllers/chapter");
const router = express.Router();

router.get("/:bookId", getChapters);
router.get("/get/:id", getChapter);
router.post("/:bookId", ImageUploader.single("image"), createChapter);
router.patch("/:id", updateChapter);
router.delete("/:id", deleteChapter);

module.exports = router;
