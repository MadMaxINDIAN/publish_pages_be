const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
