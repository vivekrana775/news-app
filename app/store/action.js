export const isAuthorized = (authorized) => {
  return {
    type: "IS_AUTHORIZED",
    payload: authorized,
  };
};

export const SET_NAME = (name) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};

export const SET_USERNAME = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};
