const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true };
    case "DONE":
      return initialState;
    default:
      return state;
  }
};
