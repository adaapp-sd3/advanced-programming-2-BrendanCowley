import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as  firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyDnCXnXrs7RuIncCE6WO9kps2TQq6SuhgY",
    authDomain: "advanced-programming-2.firebaseapp.com",
    databaseURL: "https://advanced-programming-2.firebaseio.com",
    projectId: "advanced-programming-2",
    storageBucket: "advanced-programming-2.appspot.com",
    messagingSenderId: "626351755049",
    appId: "1:626351755049:web:fb8076aa8d6ff4d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

