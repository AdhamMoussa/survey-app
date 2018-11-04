const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_AUTH":
      return action.user === "" ? false : action.user;
    default:
      return state;
  }
};
