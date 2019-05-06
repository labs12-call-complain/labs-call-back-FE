import React, { Component } from "react";
// import "./App.css";
import * as firebase from "firebase";
import fire from "./config/fire.js";
import Home from './components/Home.js'
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
        {this.state.isSignedIn ? <Home /> : 
          <LandingPage />}
      </>
      );
    }
  }

export default App;
