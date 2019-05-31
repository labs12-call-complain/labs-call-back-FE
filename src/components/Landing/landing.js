import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import axios from "axios";
import { withAuthentication } from "../Session/session.js";
import { Spinner } from "reactstrap";

import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    docid: null,
    loading: true
  };

  docid = this.state.docid; 

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "/home"
  };

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 1000);
    axios
    .get(`https://griipe.herokuapp.com/`)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
  }

  componentWillUnmount() {
    window.location.reload();
  }
  
  render() {
    if(this.state.isLoading===true) {
      return (
      <div className="recording-loader loader">
        <h1>Griipe</h1>
        <br />
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>)
    };
    return (
      <div className="main-cont">

        {this.state.loading ? 
        <div className="recording-loader loader">
                <h1>Griipe</h1>
                <br />
                <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div> :

        <div class="topcontainer">
          

          <div className="logo-two">
            <img src={require("./imgs/brandmark-designcoor.png")} />
          </div>
          <Link to="/home">
            <button className="start-btn start-btn-top" onClick={this.handleClick}>Complaints</button>
          </Link>
          <Link to="/login">
            <div className="login-btn-top">Login</div>
          </Link>
          <div class="topcontainer-wrapper">
            <section class="toppage" />

            <div className="startBox-container">
              <div className="startBox">
                {" "}
                <h1> A Bad Experience Should Never Go Unchecked </h1>
                <br />
               
                <ul>
                  <li>Record</li>

                  <li>Transcribe</li>

                  <li>Send A Review</li>
                </ul>
                <br/>
                <Link to="/complaint-form">
                  <button className="start-btn">Get Started</button>
                </Link>
              </div>
            </div>

            <div className="startBox-container">
              <div className="startBox-two">
                <div className="start-content">
                  <img src={require("./imgs/mushroom.png")} />

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div> }
      </div>
    );
  }
}
export default withAuthentication(LandingPage);
