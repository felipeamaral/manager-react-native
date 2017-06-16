import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBcf-KRM8DOM0R3K0hnXEPibnrdC_ZiPvE",
      authDomain: "manager-260ca.firebaseapp.com",
      databaseURL: "https://manager-260ca.firebaseio.com",
      projectId: "manager-260ca",
      storageBucket: "manager-260ca.appspot.com",
      messagingSenderId: "297606951762"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>

    );
  }
}

export default App;
