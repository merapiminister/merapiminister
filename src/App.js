import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from "react-router-dom";

import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers/rootReducer.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk"
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig.js'
import PrivateRoute from "./privateRoute";
import firebase from 'firebase';

export const hist  = createBrowserHistory();
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  ));


class App extends React.Component {

  state = {authenticated: false, currentUser: null };

  componentWillMount() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setState({
        authenticated: true,
        currentUser: user
      });
    } else {
      this.setState({
        authenticated: false,
        currentUser: null,
      });
    }
  });
}

  render(){
    const { authenticated } = this.state;
  return (
    <Provider store={store}>
    <Router history={hist}>
      <Switch>
      <PrivateRoute
              path="/"
              authenticated={authenticated}
            />
      </Switch>
    </Router>
    </Provider>
  );
}
}

export default App;
