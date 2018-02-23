import React, {Component} from 'react';
import * as firebase from 'firebase'
import RoomList from './components/RoomList'
import logo from './logo.svg';
import './App.css';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsaCn0doxPWrH1J_mBrlPj6ByFObtuqCY",
    authDomain: "chat-app-ba0ff.firebaseapp.com",
    databaseURL: "https://chat-app-ba0ff.firebaseio.com",
    projectId: "chat-app-ba0ff",
    storageBucket: "chat-app-ba0ff.appspot.com",
    messagingSenderId: "40164148717"
};
var fire = firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }
    render() {
        return (
            <div className="container-fluid App">
                <h1 className="col-md-3 text-center">Mobile Messenger</h1>
                <RoomList firebase={fire}/>
            </div>
        );
    }
}

export default App;
