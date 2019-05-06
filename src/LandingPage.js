import "./LandingPage.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import React, { Component } from "react";
import fire from './fire'



class LandidngPage extends Component {

  state = {

  };



    uiConfig = {

    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
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

  render() {
    return (
        <>
        <div class="topcontainer">
        <div class="topcontainer-wrapper">
        
            
            <header>
                <h1 class="logo">
                CallComplain
                </h1>
            </header>

            <section class="toppage">
                <h1 class="slogan">A bad experience should never go unchecked</h1>

                <div class="signin">
                <h2>Sign In</h2>
                <StyledFirebaseAuth 
                uiConfig={this.uiConfig} 
                firebaseAuth={fire.auth()} />
                </div>
            </section>

            </div>
            </div>

            <h3 class="simplethree">Its as simple as 3 easy steps</h3>

            <div class="line">
                    <div/>
                </div>

            <section class="midpage" data-aos="fade-right">

                

                <div class="step-list">

                    <div class="step-container">
                    <i class="fas fa-search fa-3x"></i>
                    <p class="three-steps">1. Search for the business</p>
                    </div>                    

                    <div class="step-container">
                    <i class="fas fa-microphone-alt fa-3x"></i>
                    <p class="three-steps">2. Record your voice message</p>
                    </div>
                   
                    <div class="step-container">
                    <i class="fas fa-globe-americas fa-3x"></i>
                    <p class="three-steps">3. Press send</p>
                    </div>

                    </div>
            </section>

            <section class="lowpage">
                <div data-aos="fade-up" class="lower-content-fade">
                <h3>No more calling customer service</h3>

                <p>With a single click of a button, CallComplain will 
                send a text translated version of your complaint directly
                to the company email and corperate twitter so your voice can be heard worldwide</p>
                </div>
                </section>

            <footer>

            </footer>

        </>
    )
  }
}
export default LandidngPage