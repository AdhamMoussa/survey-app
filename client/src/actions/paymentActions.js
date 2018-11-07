import axios from "axios";
import { fetchAuth } from "./authActions";

export const startPayment = token => async dispatch => {
  // send stripe token to the server > process > return updated user model
  const res = await axios.post("/api/stripe_payment", token);
  // dispatch updated user model to redux store
  dispatch(fetchAuth(res.data));
  // done loading credits after payment
  dispatch({ type: "DONE" });
};