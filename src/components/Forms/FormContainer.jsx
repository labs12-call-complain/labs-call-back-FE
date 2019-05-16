import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import fire from "../Firebase/firebase";
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./Form4.jsx";
import Success from "./Form5.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navigation from "../Navigation/navigation";
import axios from "axios";

const audioType = "audio/wav";

class FormContainer extends Component {
  state = {
    step: 1,
    username: firebase.auth().currentUser,
    email: "",
    UID: null,
    StoreName: "",
    StoreLocation: false,
    StorePhoneNumber: [],
    StoreGoogleRating: "",
    StoreWebsite: "",
    transcript: "",
    audiofile: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  updateStoreInfo = (StoreNameFromPlaces) => {
    this.setState({
      StoreName: StoreNameFromPlaces
    })
  }

  // updateTranscription = (transcript) => {
  //   this.setState({
  //     text: transcript
  //   })
  // }

  
  render() {
    const { step } = this.state;
    const { username, email } = this.state;
    const values = { username, email };
    // console.log(firebase.auth().currentUser);
    console.log(this.state.StoreName);

    switch (step) {
      case 1:
        return (
          <>
            <Form1
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              triggerStoreUpdate={this.updateStoreInfo}
            />
          </>
        );
      case 2:
        return (
          <>
            <Form2
            saveAudio = {this.saveAudio}
              transcribe={this.transcribe}
              deleteAudio={this.deleteAudio}
              audios={this.state.audios}
              audio={this.state.audio}
              toggleMicrophone={this.toggleMicrophone}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              // updateTranscription={this.updateTranscription}
            />
          </>
        );
      case 3:
        return (
          <>
            <Form3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 4:
        return (
          <>
            <Form4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 5:
        return (
          <>
            <Success />
          </>
        );
    }

    return <p>{this.state.username}</p>;
  }
}

export default FormContainer;
