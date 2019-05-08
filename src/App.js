import React, { Component } from "react";
// import "./App.css";
import * as firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import fire from "./config/fire.js";
import Home from "./Home";
import LandingPage from "./LandingPage";

class App extends Component {
  state = {
    isSignedIn: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log( user);
      this.setState({ isSignedIn: !!user });
      
    });
  }

  render() {
    return <>{this.state.isSignedIn ? <Home /> : <LandingPage />}</>;
  }
}

export default App;
