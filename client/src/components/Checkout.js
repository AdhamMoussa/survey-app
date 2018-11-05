import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";

import InjectedCheckoutForm from "./CheckoutForm";
import style from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <div className={style.Checkout}>
      <h2>Buy more credits</h2>
      <p>Pay $5 for 5 more email credits</p>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUB_KEY}>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </StripeProvider>
    </div>
  );
};

export default Checkout;
