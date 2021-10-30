const User = require("../models/User");

exports.addUser = (req, res, next) => {
  const { displayName, email, phoneNumber, photoURL, providerId, uid } =
    req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (providerId === "google.com") {
          user.provider = providerId;
          return user.save().then((user) => {
            return res.status(200).json({
              success: true,
              msg: "User already registered",
              user: user,
            });
          });
        }
        return res.status(400).json({
          success: false,
          msg: "User already exists",
        });
      } else {
        const newUser = new User({
          displayName: displayName,
          email: email,
          phoneNumber: phoneNumber,
          photoURL: photoURL,
          provider: providerId,
          uid: uid,
        });
        return newUser.save().then((user) => {
          return res.status(200).json({
            success: true,
            msg: "User created successfully",
            user: user,
          });
        });
      }
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ success: false, msg: "Failed to register user", err });
    });
};
