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
  constructor() {
    super();
    this.state = {
      step: 1,
      username: "jay",
      email: "",
      icon: null,
      audio: null,
      recording: false,
      audios: [],
      transcription: "",
      audioUrl: "",
      audioChunks: [],
      StoreName: "",
      StoreAddress: "",
      StorePhone: "",
      StoreWebsite: "",
      StoreGoogleRating: ""
    };
  }

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

  updateTranscription = transcription => {
    this.setState({
      text: transcription
    });
  };

  recording = recording => {
    this.setState({
      recording: recording
    });
  };

  audio = audio => {
    this.setState({
      audio: audio
    });
  };

  setAudioUrl = url => {
    this.setState({
      audioUrl: url
    });
  };

  setAudios = audios => {
    this.setState({
      audios: audios
    });
  };
  

  setTranscription = transcript => {
    this.setState({
      transcription: transcript
    });
  };

  updateStoreInfo = (StoreNameFromPlaces, StoreAddressFromPlaces, StorePhoneFromPlaces, StoreWebsiteFromPlaces, StoreRatingFromPlaces) => {
    this.setState({
      StoreName: StoreNameFromPlaces,
      StoreAddress: StoreAddressFromPlaces,
      StorePhone: StorePhoneFromPlaces,
      StoreWebsite: StoreWebsiteFromPlaces,
      StoreGoogleRating: StoreRatingFromPlaces
    });
  };

  render() {
    const { step } = this.state;
    const { username, email } = this.state;
    const values = { username, email };

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
              stateTranscription={this.state.transcription}
              setTranscriptionProps={this.setTranscription}
              setAudiosProp={this.setAudios}
              setUrl={this.setAudioUrl}
              audioState={this.audio}
              recordingState={this.recording}
              updateTranscriptionProp={this.updateTranscription}
              transcription={this.state.transcription}
              saveAudio={this.saveAudio}
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
              transcription={this.state.transcription}
              setTranscriptionProps={ this.setTranscription}
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
              confirmationTranscription={this.state.transcription}
              StoreName={this.state.StoreName}
              StoreAddress={this.state.StoreAddress}
              StorePhone={this.state.StorePhone}
              StoreWebsite={this.state.StoreWebsite}
              StoreGoogleRating={this.state.StoreGoogleRating}
              audioBlobs={this.state.audios}
            />
          </>
        );
      case 5:
        return (
          <>
            <Success 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            confirmationTranscription={this.state.transcription}
            StoreName={this.state.StoreName}
            StoreAddress={this.state.StoreAddress}
            StorePhone={this.state.StorePhone}
            StoreWebsite={this.state.StoreWebsite}
            StoreGoogleRating={this.state.StoreGoogleRating}
            audioBlobs={this.state.audios}
            />
          </>
        );
    }

    return <p>{this.state.username}</p>;
  }
}

export default FormContainer;
