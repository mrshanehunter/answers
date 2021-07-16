"use strict";

require("dotenv").config();

const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports.handler = async ({
  body,
  headers
}) => {
  try {
    const stripeEvent = stripe.webhooks.constructEvent(body, headers["stripe-signature"], process.env.STRIPE_ENDPOINT_SECRET);

    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;
      const confirmed = eventObject.payment_status;
      await console.log(confirmed);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        received: true
      })
    };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);
  }

  return {
    statusCode: 400,
    body: `Webhook Error: ${err.message}`
  };
};