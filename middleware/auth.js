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
  req.uid = decodedToken.uid;
  next();
};
