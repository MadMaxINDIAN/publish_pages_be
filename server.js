const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const morgan = require("morgan");

// CONNECT MONGOOSE
mongoose
  .connect(`${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"));

// CORS CONFIGURATION
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

// MORGAN SETUP
app.use(morgan("combined"));

// ROUTES FILES
const chapterRoutes = require("./routes/chapter");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

// APP ROUTES
app.use("/chapter", chapterRoutes);
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  console.log("Hello world");
  return res.send("Hello");
});

app.use((err, req, res, next) => {
  console.log(err, "app.js");
  const status = err.statusCode || 500;
  const message = err.message || "Internal server error. Try again later";
  const data = err.data;
  res.status(status).json({
    success: false,
    msg: message,
    data: data,
  });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
