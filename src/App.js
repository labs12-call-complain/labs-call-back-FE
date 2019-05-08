import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";
import fire from "./config/fire.js";

import Home from "../src/components/Home.js";
import RecordForm from '../src/components/Forms/RecordForm.js'
import Profile from './components/Users/Profile'

import "./App.css";
import LandingPage from "./LandingPage";
import { Spinner } from 'reactstrap';


class App extends Component {
  state = {
    isSignedIn: false,
    isLoading: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ 
        isSignedIn: !!user,
        isLoading: true 
      });
      console.log("user", user);
    });
  }

  render( ) {
      if (this.state.isLoading === false) {
      return (
        <div className='loading-container'>
          <h1 className='home-loading-header'>
          Please Wait ...<br />
          As We Route You To<br />
          Call Complain</h1>
          <div className='spinner-container'>
          <Spinner style={{width: '5rem', height: '5rem'}} type="grow" color="danger" />
          </div>
        </div>
      )
    }
    return (
    <>
      {this.state.isSignedIn ? 
      <Link to="/" />
      : <LandingPage />
      }

      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/record-complaint" component={RecordForm} />
        <Route path="/profile" component={Profile}/>
      </Router>
    </>
    )
  }
}

export default App;
