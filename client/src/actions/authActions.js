import axios from "axios";

export const fetchAuth = user => ({
  type: "FETCH_AUTH",
  user
});

export const startFetchAuth = () => async dispatch => {
  const user = await axios.get("/api/current_user");
  dispatch(fetchAuth(user.data));
};
