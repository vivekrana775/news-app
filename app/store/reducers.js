const initialState = {
  authorized: false,
  name: "",
  username: "",
  news: {},
};

export const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "IS_AUTHORIZED":
      return { ...state, authorized: payload };
    case "SET_NAME":
      return { ...state, name: payload };

    case "SET_USERNAME":
      return { ...state, username: payload };

    default:
      return state;
  }
};
