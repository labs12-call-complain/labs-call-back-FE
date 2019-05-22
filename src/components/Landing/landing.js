import "./LandingPage.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import React, { Component } from "react";
// import firebase from '../Firebase/index.js'
// import { LANDING } from "./config/routes";
import { withAuthentication } from "../Session/session.js";

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

  render() {
    console.log(this.state);
    return (
      <div className="main-cont">
        <div class="topcontainer">
          {/* <img className='logo' src={require("./imgs/cclogo.png")} /> */}

          <div className="logo-two">
            <img src={require("./imgs/Group100.png")} />
          </div>
          <div class="topcontainer-wrapper">
            <section class="toppage" />

            <div className="startBox-container">
              <div className="startBox">
                {" "}
                <h1> A Bad Experience Should Never Go Unchecked </h1>
                <br />
                <br />
                <h5>
                  With a single click of a button, CallComplain will send a text
                  translated version of your complaint directly to the company
                  email and corperate twitter so your voice can be heard
                  worldwide
                </h5>{" "}
              </div>
            </div>

            <div class="vl" />

            <div className="startBox-container">
              <div className="startBox-two">
                <img src={require("./imgs/Group10002.svg")} />
              </div>
              <div className="start-content">
                <h2>Sign In</h2>
                <br />
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuthentication(LandingPage);
