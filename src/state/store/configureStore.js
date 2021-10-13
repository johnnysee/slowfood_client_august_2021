import { createStore } from "redux";
import rootReducer from "../redusers/rootReducer";

const initalState = {
  currentUser: {},
  authenticated: false,
  showLogin: false,
};

const configureStore = () => {
  return createStore(rootReducer, initalState);
};

export default configureStore;
