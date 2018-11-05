import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";

const styles = {
  fontSize: "24px"
};

class CheckoutForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.stripe.createToken().then(res => {
      console.log(res.token);
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div
          style={{
            border: "2px solid #eee",
            padding: "10px 20px"
          }}
        >
          <CardElement hidePostalCode style={{ base: styles }} />
        </div>
        <button className="btn blue">Pay $5</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
