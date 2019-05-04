import React, { Component } from "react";
// import "./App.css";
import * as firebase from "firebase";
import fire from "./fire";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Signedin from './SignedIn';

class App extends Component {

  state = {
    speed: 0,
    age: '',
    allData: []
  };


  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false,
      signInSuccessWithAuthResult: (authResult, redirectURL) => {
        console.log(authResult);
        console.log(fire.firestore());

        fire.firestore().collection('users').doc(authResult.user.uid)
        .get().then(user => {if (user.exists) {console.log(`user logging in: ${user}`)} else {
          console.log(user)
          fire.firestore().collection('users').doc(authResult.user.uid).set({
            name: authResult.user.displayName,
            email: authResult.user.email
          })
        }})
        .catch(err => {console.log(err)})
      }
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
      console.log("user", user)

    })
  }

  render() {
    return (
      <div style={{margin:'30px'}}>
                  {this.state.isSignedIn ? <Signedin /> : 
            <StyledFirebaseAuth 
            uiConfig={this.uiConfig} 
            firebaseAuth={fire.auth()} />}

        </div>
      );
    }
  }

export default App;
