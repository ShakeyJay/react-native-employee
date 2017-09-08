import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCAHJs0GAnHp3HXIMrWoF7YltnZ39CCP08",
      authDomain: "manager-e4757.firebaseapp.com",
      databaseURL: "https://manager-e4757.firebaseio.com",
      projectId: "manager-e4757",
      storageBucket: "manager-e4757.appspot.com",
      messagingSenderId: "616124428420"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
      </Provider>
    );
  }
}

export default App;
