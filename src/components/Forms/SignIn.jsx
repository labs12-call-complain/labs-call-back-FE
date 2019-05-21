import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import "../Landing/LandingPage.css";

class SignInConfirmation extends Component {
    state = {
        docid: null
      };
    
        docid = this.state.docid //may have to move back to app
    
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
            signInSuccessUrl: '/home'
      }
    

        render() {
            return (
                <div class="signin">
                    <h2>Sign In</h2>
                    <StyledFirebaseAuth 
                    uiConfig={this.uiConfig} 
                    firebaseAuth={firebase.auth()} />
                </div>
            );
          }
        }

export default SignInConfirmation;