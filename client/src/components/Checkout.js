import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import { connect } from "react-redux";

import InjectedCheckoutForm from "./CheckoutForm";
import { startPayment } from "../actions/paymentActions";
import style from "./Checkout.module.scss";

const Checkout = ({ startPayment }) => {
  return (
    <div className={style.Checkout}>
      <h2>Buy more credits</h2>
      <p>Pay $5 for 5 more email credits</p>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUB_KEY}>
        <Elements>
          <InjectedCheckoutForm startPayment={startPayment} />
        </Elements>
      </StripeProvider>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startPayment: token => dispatch(startPayment(token))
});

export default connect(
  null,
  mapDispatchToProps
)(Checkout);
