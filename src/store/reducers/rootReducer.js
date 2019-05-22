import authReducer from "./authReducer.js";
import bencanaReducer from "./bencanaReducer.js";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
  auth    : authReducer,
  bencana : bencanaReducer,
  firestore : firestoreReducer,
  firebase  : firebaseReducer
})

export default rootReducer;
