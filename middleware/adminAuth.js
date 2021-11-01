const User = require("../models/User");

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.get("Authorization");
  let decodedToken;
  try {
    decodedToken = jwt.decode(token);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const err = new Error("Unauthorized");
    err.statusCode = 401;
    throw err;
  }
  console.log(decodedToken);
  User.findOne({ uid: decodedToken.user_id })
    .then((user) => {
      if (user?.type !== "admin") {
        const err = new Error("Not authorized");
        err.statusCode = 401;
        throw err;
      } else {
        req.user = decodedToken;
        next();
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
        next(err);
      }
    });
};
