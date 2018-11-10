const stripeSecretKey = require("../config/keys").stripeSecretKey;
const stripe = require("stripe")(stripeSecretKey);
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
  app.post("/api/stripe_payment", requireLogin, async (req, res) => {
    const token = req.body.id;
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "charge $5 for 5 credits",
      source: token
    });
    if (charge.status === "succeeded") {
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    }
  });
};
