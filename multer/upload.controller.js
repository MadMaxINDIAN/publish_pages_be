const multer = require("multer");
var multerS3 = require("multer-s3");
var aws = require("aws-sdk");
const uuid4 = require("uuid4");
const dotenv = require("dotenv");
dotenv.config();

var s3 = new aws.S3({
  accessKeyId: process.env.AMAZON_S3_ACCESS_KEY,
  secretAccessKey: process.env.AMAZON_S3_SECRET_ACCESS_KEY,
});

const imageFileUpload = (req, files, cb) => {
  // reject a file
  if (
    files.mimetype === "image/jpeg" ||
    files.mimetype === "image/pipeg" ||
    files.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const ImageUploader = multer({
  storage: multerS3({
    s3: s3,
    bucket: "publish-pages-development",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        uuid4() + "__" + file.originalname
      );
    },
  }),
  limits: {
    // Maximum file size of 4MB
    fileSize: 1024 * 1024 * 4,
  },
  fileFilter: imageFileUpload,
});

module.exports = ImageUploader;