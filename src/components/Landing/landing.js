import "./LandingPage.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import firebase from '../Firebase/index.js'
// import { LANDING } from "./config/routes";
import { withAuthentication } from "../Session/session.js";
import axios from "axios";


// about to add loader/spinner

class LandingPage extends Component {
  state = {
    docid: null
  };

  docid = this.state.docid; //may have to move back to app

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // signInSuccessUrl: function(currentUser, credential, redirectUrl) {
    //     const userId = currentUser.uid;
    //     window.location.assign(`/home/${userId}`);
    //     return true;
    //     // "/home"
    // }
    signInSuccessUrl: "/home"
  };

  componentDidMount() {
    axios
      .get(`https://griipe.herokuapp.com/`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="main-cont">
        <div class="topcontainer">
          {/* <img className='logo' src={require("./imgs/cclogo.png")} /> */}

          <div className="logo-two">
            <img src={require("./imgs/brandmark-designcoor.png")} />
          </div>
          <Link to="/home">
            <button className="start-btn start-btn-top">Complaints</button>
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
                  {/* <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                /> */}
                  {/* <Link to="/home">
                    <button className="start-btn">Get Started</button>
                  </Link> */}
                  {/* <img src={require("./imgs/Group10002.svg")} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuthentication(LandingPage);
