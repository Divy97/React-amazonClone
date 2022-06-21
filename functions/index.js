/* eslint max-len: ["error", { "code": 180 }]*/

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LChUESGL3dGrbDM9om3OjjRsi2oFauMXPkQuk1478rlKemp2H5OOGb8ehviQZtzFA2znrL68UdulkKGOCWNFIlo00dlrx9XAz");

// API

// APP Config
const app = express();

// middleWares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello, Divy"));

app.post("/payments/create", async (request, response) => {
    const total =  request.query.total;

    console.log("Payment req Done and AMOUNT IS: ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});
// Listen Command
exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-a53a5/us-central1/api
