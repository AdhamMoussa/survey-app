import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import { connect } from "react-redux";

const styles = {
  fontSize: "24px"
};

class CheckoutForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.creditsLoading();
    this.props.stripe.createToken().then(res => {
      this.props.startPayment(res.token);
    });
    setTimeout(() => this.cForm.clear(), 200);
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
          <CardElement
            hidePostalCode
            style={{ base: styles }}
            onReady={card => (this.cForm = card)}
          />
        </div>
        <button className="btn blue">Pay $5</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  creditsLoading: () => dispatch({ type: 'LOADING' })
});

export default injectStripe(connect(null, mapDispatchToProps)(CheckoutForm));
