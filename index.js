const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const { mongoURL, cookieKey } = require("./config/keys");
const passportConfig = require("./services/passport");
const authRoutes = require("./routes/authRoutes");
require("./models/User");

// connect mongoose to MongoDB
mongoose.connect(mongoURL);

// init APP
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
);
app.use(passport.initialize());
app.use(passport.session());

passportConfig();
authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
