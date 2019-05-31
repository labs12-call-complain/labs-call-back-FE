import React, { Component } from 'react';
import { withRouter } from 'react-router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import * as firebase from "firebase";
import "../Landing/LandingPage.css";
import axios from 'axios';
import Navigation from '../Navigation/navigation.js';
import { Spinner, Fade } from 'reactstrap';

class SignInConfirmation extends Component {
      state = {
        docid: null
      };
      
        docid = this.state.docid
     
        uiConfig = {
          signInFlow: "popup",
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ],
            // signInSuccessUrl: '/tweet-confirmation'
            callbacks: {
              signInSuccess: function (currentUser, credential, redirectUrl) {
                  return false;
              },
            }
          }

          
          componentDidUpdate() {
            let data = {
              DisplayName: firebase.auth().currentUser.displayName,
              Email: firebase.auth().currentUser.email,
              UID: firebase.auth().currentUser.uid,
              StoreName: this.props.StoreName,
              StoreLocation: this.props.StoreAddress,
              StorePhoneNumber: this.props.StorePhone,
              StoreGoogleRating: this.props.StoreGoogleRating,
              StoreWebsite: this.props.StoreWebsite,
              tweet: this.props.confirmationTranscription,
              upVote: 0,
              downVote: 0
              }
              let tweetdata = {
                status: `${this.props.StoreName}, your customer just complained about you on griipe.me  We added you to our #worstcustomerservice leaderboard.`
              }
              axios
              .post(`https://griipe.herokuapp.com/api/routes/makepost`, data)
              .then(res => {
                console.log("It worked 1:", res);
                axios
                  .post(`https://griipe.herokuapp.com/api/routes/makeatweet`, tweetdata)
                  .then(res => {
                    console.log("It worked 2:", res);
                    this.props.history.push('/tweet-confirmation', tweetdata)
                  })
                  .catch(err => {
                      console.log("It broke 1:", err)       
                      this.props.history.push('/tweet-confirmation')
                  })
              })
              .catch(err => console.log("It broke 2:", err))
              this.props.history.push('/tweet-confirmation')
          }

        render() {
            return (
              <>
                <Navigation />
                <div class="signin">
                    <h2>Sign In</h2>
                    <StyledFirebaseAuth 
                    uiConfig={this.uiConfig} 
                    firebaseAuth={firebase.auth()} />
                </div>
              </>  
            );
          }
        }

export default withRouter(SignInConfirmation);