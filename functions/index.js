const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const secret = require("./secret");
const stripe = require("stripe")(secret.key);

//App configs
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment :", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "gbp",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);
