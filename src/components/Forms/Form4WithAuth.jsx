import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import * as firebase from "firebase";
import axios from 'axios';
import { Spinner, Fade } from 'reactstrap';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import { AuthUserContext } from '../Session/session.js';

class Form4WithAuth extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 1000);
  }

  tweetAndRoute = e => {
    e.preventDefault();
    // this.props.nextStep();
    let data = {
      DisplayName: firebase.auth().currentUser.displayName,
      Email: firebase.auth().currentUser.email,
      UID: firebase.auth().currentUser.uid,
      StoreName: this.props.StoreName,
      StoreLocation: this.props.StoreAddress,
      StorePhoneNumber: this.props.StorePhone,
      StoreGoogleRating: this.props.StoreGoogleRating,
      StoreWebsite: this.props.StoreWebsite,
      text: this.props.confirmationTranscription,
      upVote: 0
      }
      let tweetdata = {
        status: `${this.props.StoreName}, your customer just complained about you on callandcomplain.com. We added you to our #worstcustomerservice leaderboard.`
      }
      console.log(tweetdata)
      axios
        .post(`https://call-complain.herokuapp.com/api/routes/makepost`, data)
        .then(res => {
          console.log("response:", res);
          axios
            .post(`https://call-complain.herokuapp.com/api/routes/makeatweet`, tweetdata)
            .then(res => {
              console.log("response:", res);
            })
            .catch(err => {
                console.log(err)            
            });
        })
        .catch(err => console.log(err));
  };

  render() {
    const { values, handleChange } = this.props;
    if(this.state.isLoading===true) {
      return (
      <div className="recording-loader loader">
        <h1>CALL COMPLAIN</h1>
        <br />
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>)
    };

    return (
      <MuiThemeProvider>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3 form-container" >
          <h1>Confirmation</h1>
          <div className="confirmation-container">
          <CloudDoneIcon />
            <p>{this.props.StoreName}</p>
          </div>
          <div className="confirmation-container">
          <CloudDoneIcon />            
            <p>{this.props.StoreAddress}</p>
          </div>
          <div className="confirmation-container">
          <CloudDoneIcon />          
            <p>Edit Transcription</p>
          </div>
          <div className="confirmation-container">
          <CloudDoneIcon />
            <p>Profile Info</p>
          </div>
          <Link to="/home" onClick={this.tweetAndRoute}>
            <RaisedButton
                label="Send Tweet"
                primary={true}
                style={styles.button}
                // onClick={this.tweetAndRoute}
            />
          </Link>
        </Fade>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Form4WithAuth;