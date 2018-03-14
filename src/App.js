import React, {Component} from 'react';
import * as firebase from 'firebase'
import RoomList from './components/RoomList'
import './App.css'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAsaCn0doxPWrH1J_mBrlPj6ByFObtuqCY",
    authDomain: "chat-app-ba0ff.firebaseapp.com",
    databaseURL: "https://chat-app-ba0ff.firebaseio.com",
    projectId: "chat-app-ba0ff",
    storageBucket: "chat-app-ba0ff.appspot.com",
    messagingSenderId: "40164148717"
};
let fire = firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="sidebar-nav">
                    <div className="row">
                        <h1 className="col-md-3">Mobile Messenger</h1>
                    </div>
                    <div className="row">
                        <RoomList firebase={fire}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
