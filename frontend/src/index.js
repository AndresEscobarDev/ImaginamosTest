import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Routes from './routes'
import './index.css'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAnhc0Qwnh2kD-LjgOqmjtIwAp56POKm-I",
  authDomain: "imaginamos-test.firebaseapp.com",
  projectId: "imaginamos-test",
  storageBucket: "imaginamos-test.appspot.com",
  messagingSenderId: "292447890045",
  appId: "1:292447890045:web:8b44110aadc71be798df14",
  measurementId: "G-JHYCJ494MG"
})
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
