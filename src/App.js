import React, { Component } from "react";
// import "./App.css";
import * as firebase from "firebase";
import fire from "./fire";
import Signedin from './SignedIn'
import LandingPage from './LandingPage'


class App extends Component {

  state = {
    isSignedIn: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
      console.log("user", user)

    })
  }

  render() {
    return (
      <>
        {this.state.isSignedIn ? <Signedin /> : 
          <LandingPage />}
      </>
      );
    }
  }

export default App;
