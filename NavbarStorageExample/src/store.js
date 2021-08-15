import { createStore } from "redux";

const InitialState = {
  auth: false
};

const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ENABLE_AUTH:
      return { ...state, auth: true };
    case DISABLE_AUTH:
      return { ...state, auth: false };
    default:
      return state;
  }
};

const ENABLE_AUTH = "ENABLE_AUTH";
const DISABLE_AUTH = "DISABLE_AUTH";

export const auth_enable = () => {
  return {
    type: ENABLE_AUTH
  };
};

export const auth_disable = () => {
  return {
    type: DISABLE_AUTH
  };
};
const store = createStore(rootReducer);
export default store;
