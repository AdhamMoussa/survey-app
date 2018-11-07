const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const { mongoURL, cookieKey } = require("./config/keys");
const passportConfig = require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRouts");
require("./models/User");

// connect mongoose to MongoDB
mongoose.connect(mongoURL);

// init APP
const app = express();

app.use(express.json());
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
paymentRoutes(app);

if (process.env.NODE_ENV === "production") {
  // serve assets
  app.use(express.static("client/build"));
  // serve index.html if route is not recognized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
