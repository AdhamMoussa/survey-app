const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require("../services/sendGrid");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = app => {
  const Survey = mongoose.model("survey");
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for your response.");
  });
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    // get user inputs from request body
    const { title, subject, body, recipients } = req.body;
    // create new survey model
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(x => ({ email: x.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    // create mailer provider object
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      // send mail
      await mailer.send();
      // subtract 1 credit from user
      req.user.credits -= 1;
      // save updated user object to DB
      const user = await req.user.save();
      // save new survey to DB
      const savedSurvey = await survey.save();
      // send back updated user & survey
      res.send({ user, savedSurvey });
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
